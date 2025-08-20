import database from "@config/database";
import { DataTypes, Model } from "sequelize";
import QuestionCategoryModel from "./question-category.model";
import RespondentModel from "./respondent.model";

export class TemplateModel extends Model {
  declare id: number;
  declare code: string;
  declare name: string;
  declare description: string;
  declare is_active: boolean;
  declare created_at: Date;
  declare updated_at: Date;

  declare categories?: QuestionCategoryModel[];
  declare respondents?: RespondentModel[];
}

TemplateModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize: database,
    modelName: "template",
    tableName: "templates",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

// TemplateModel.sync();
