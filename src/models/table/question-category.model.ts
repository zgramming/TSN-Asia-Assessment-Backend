import { DataTypes, Model } from "sequelize";
import database from "@config/database";
import QuestionModel from "./question.model";
import { TemplateModel } from "./template.model";

class QuestionCategoryModel extends Model {
  declare id: number;
  declare template_id: number;
  declare name: string;
  declare display_order: number;
  declare created_at: Date;
  declare updated_at: Date;

  declare template?: TemplateModel;
  declare questions?: QuestionModel[];
}

QuestionCategoryModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    template_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: TemplateModel,
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    display_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize: database,
    modelName: "question_category",
    tableName: "question_categories",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

// QuestionCategoryModel.sync();

export default QuestionCategoryModel;
