import { DataTypes, Model } from "sequelize";
import QuestionModel from "./question.model";
import RespondentModel from "./respondent.model";
import database from "config/database";

class RespondentAnswerModel extends Model {
  declare id: number;
  declare respondent_id: number;
  declare question_id: number;
  declare value?: string;
  declare weight?: number;
  declare created_at: Date;
  declare updated_at: Date;
}

RespondentAnswerModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    respondent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: RespondentModel,
        key: "id",
      },
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: QuestionModel,
        key: "id",
      },
    },
    value: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize: database,
    modelName: "respondent_answer",
    tableName: "respondent_answers",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

// RespondentAnswerModel.sync();

export default RespondentAnswerModel;
