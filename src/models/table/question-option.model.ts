import { DataTypes, Model } from "sequelize";
import QuestionModel from "./question.model";
import database from "@config/database";

class QuestionOptionModel extends Model {
  declare id: number;
  declare question_id: number;
  declare label: string;
  declare value: string;
  declare weight: number;
  declare display_order: number;
  declare created_at: Date;
  declare updated_at: Date;
}

QuestionOptionModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: QuestionModel,
        key: "id",
      },
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    display_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize: database,
    modelName: "question_option",
    tableName: "question_options",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

// QuestionOptionModel.sync();

export default QuestionOptionModel;
