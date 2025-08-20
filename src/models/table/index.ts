import QuestionModel from "./question.model";
import RespondentModel from "./respondent.model";

import QuestionOptionModel from "./question-option.model";
import QuestionCategoryModel from "./question-category.model";

import RespondentSummaryModel from "./respondent-summary.model";
import RespondentAnswerModel from "./respondent-answer.model";
import { TemplateModel } from "./template.model";

//* Relationship Template
TemplateModel.hasMany(QuestionCategoryModel, {
  foreignKey: "template_id",
  as: "categories",
});
TemplateModel.hasMany(RespondentModel, {
  foreignKey: "template_id",
  as: "respondents",
});

//* Relationships Respondent
RespondentModel.belongsTo(TemplateModel, {
  foreignKey: "template_id",
  as: "template",
});
RespondentModel.hasOne(RespondentSummaryModel, {
  foreignKey: "respondent_id",
  as: "summary",
});

RespondentModel.hasMany(RespondentAnswerModel, {
  foreignKey: "respondent_id",
  as: "answers",
});

//* Relationship Respondent Summary
RespondentSummaryModel.belongsTo(RespondentModel, {
  foreignKey: "respondent_id",
  as: "respondent",
});

//* Relationship Respondent Answer
RespondentAnswerModel.belongsTo(RespondentModel, {
  foreignKey: "respondent_id",
  as: "respondent",
});
RespondentAnswerModel.belongsTo(QuestionModel, {
  foreignKey: "question_id",
  as: "question",
});

//* Relationship Question
QuestionModel.belongsTo(QuestionCategoryModel, {
  foreignKey: "category_id",
  as: "category",
});

QuestionModel.belongsTo(TemplateModel, {
  foreignKey: "template_id",
  as: "template",
});

QuestionModel.hasMany(QuestionOptionModel, {
  foreignKey: "question_id",
  as: "options",
});

//* Relationship Question Option
QuestionOptionModel.belongsTo(QuestionModel, {
  foreignKey: "question_id",
  as: "question",
});


//* Relationship Question Category Model
QuestionCategoryModel.belongsTo(TemplateModel, {
  foreignKey: "template_id",
  as: "template",
});

QuestionCategoryModel.hasMany(QuestionModel, {
  foreignKey: "category_id",
  as: "questions",
});

export {
  TemplateModel,
  RespondentModel,
  RespondentSummaryModel,
  RespondentAnswerModel,
  QuestionModel,
  QuestionOptionModel,
  QuestionCategoryModel,
};
