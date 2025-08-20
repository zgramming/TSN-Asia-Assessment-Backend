import { DataTypes, Model } from "sequelize";
import database from "config/database";
import QuestionCategoryModel from "./question-category.model";
import QuestionOptionModel from "./question-option.model";
import { TemplateModel } from "./template.model";

class QuestionModel extends Model {
  declare id: number;
  declare category_id: number;
  declare template_id: number;
  declare label: string;
  declare type: string;
  declare max_weight_value: number;
  declare display_order: number;
  declare created_at: Date;
  declare updated_at: Date;

  declare category?: QuestionCategoryModel;
  declare template?: TemplateModel;
  declare options?: QuestionOptionModel[];
}

QuestionModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: QuestionCategoryModel,
        key: "id",
      },
    },
    template_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: TemplateModel,
        key: "id",
      },
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["text", "radio", "checkbox", "dropdown", "number"]],
      },
    },
    max_weight_value: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    display_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: "question",
    tableName: "questions",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);


// QuestionModel.sync();

export default QuestionModel;
