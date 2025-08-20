import database from "config/database";
import { AssessmentCreateDto } from "models/dtos/assessment-create.dto";
import { IAssessmentCreateResponse } from "models/response/assessment-create.response";
import { IAssessmentDetailResponse } from "models/response/assessment-detail.response";
import { IAssessmentResponse } from "models/response/assessment.response";
import {
  TemplateModel,
  QuestionCategoryModel,
  QuestionModel,
  QuestionOptionModel,
  RespondentModel,
  RespondentAnswerModel,
  RespondentSummaryModel,
} from "models/table";
import { Op } from "sequelize";

interface IAssessmentService {
  create(data: AssessmentCreateDto): Promise<IAssessmentCreateResponse>;
  get(): Promise<IAssessmentResponse[]>;
  getDetail(id: number): Promise<IAssessmentDetailResponse>;
}

export class AssessmentService implements IAssessmentService {
  async create(data: AssessmentCreateDto): Promise<IAssessmentCreateResponse> {
    try {
      await database.transaction(async (t) => {
        const respondent = await RespondentModel.create({
          first_name: data.profile.first_name,
          last_name: data.profile.last_name,
          department: data.profile.department,
          years_working: data.profile.years_working,
        });

        const questionIds = data.assessment.answer.map(
          (item) => item.question_id
        );
        const optionIds = data.assessment.answer.map((item) => item.option_id);

        const questions = await QuestionModel.findAll({
          where: {
            id: {
              [Op.in]: questionIds,
            },
          },
        });

        const options = await QuestionOptionModel.findAll({
          where: {
            id: {
              [Op.in]: optionIds,
            },
          },
        });

        const mappingRespondentAnswer = data.assessment.answer.map((item) => {
          const option = options.find((x) => x.id === item.option_id);
          const question = questions.find((x) => x.id === item.question_id);
          return {
            respondent_id: respondent.id,
            question_id: question?.id,
            value: option?.value,
            weight: option?.weight,
          };
        });

        await RespondentAnswerModel.bulkCreate(mappingRespondentAnswer, {
          transaction: t,
        });

        const maxPoint = questions.reduce(
          (acc, question) => acc + (question.max_weight_value || 0),
          0
        );

        const earnedPoint = mappingRespondentAnswer.reduce(
          (acc, answer) => acc + (answer.weight || 0),
          0
        );

        const avg = earnedPoint / questions.length;

        const percentagePoint =
          maxPoint > 0 ? (earnedPoint / maxPoint) * 100 : 0;

        const insertSummary = await RespondentSummaryModel.create({
          respondent_id: respondent.id,
          max_point: maxPoint,
          earned_point: earnedPoint,
          percentage_point: percentagePoint,
          average_point: avg,
        });

        return insertSummary;
      });

      const result: IAssessmentCreateResponse = {
        message: "Assessment created successfully",
        is_success: true,
      };
      return result;
    } catch (error) {
      console.error("Error creating assessment:", error);
      throw new Error("Failed to create assessment");
    }
  }
  async get(): Promise<IAssessmentResponse[]> {
    const result = await TemplateModel.findAll();
    const x: IAssessmentResponse[] = result.map((item) => ({
      template_id: item.id,
      code: item.code,
      name: item.name,
      description: item.description,
      is_active: item.is_active,
      created_at: item.created_at,
      updated_at: item.updated_at,
    }));
    return x;
  }
  async getDetail(id: number): Promise<IAssessmentDetailResponse> {
    const result = await TemplateModel.findByPk(id);
    if (!result) throw new Error("Template not found");
    const categories = await QuestionCategoryModel.findAll({
      where: { template_id: id },
      order: [["display_order", "ASC"]],
      include: [
        {
          model: QuestionModel,
          as: "questions",
          order: [["display_order", "ASC"]],
          include: [
            {
              model: QuestionOptionModel,
              as: "options",
              order: [["display_order", "ASC"]],
            },
          ],
        },
      ],
    });

    const item: IAssessmentDetailResponse = {
      template_id: result.id,
      code: result.code,
      name: result.name,
      description: result.description,
      is_active: result.is_active,
      categories: categories.map((cat) => {
        return {
          question_category_id: cat.id,
          template_id: cat.template_id,
          name: cat.name,
          display_order: cat.display_order,
          questions: cat.questions?.map((q) => ({
            question_id: q.id,
            question_category_id: q.category_id,
            template_id: q.template_id,
            label: q.label,
            type: q.type,
            max_weight_value: q.max_weight_value,
            display_order: q.display_order,
            options: q.options?.map((o) => ({
              option_id: o.id,
              question_id: o.question_id,
              label: o.label,
              value: o.value,
              weight: o.weight,
              display_order: o.display_order,
            })),
          })),
        };
      }),
    };

    return item;
  }
}
