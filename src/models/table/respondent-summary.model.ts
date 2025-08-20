import { DataTypes, Model } from "sequelize";
import RespondentModel from "./respondent.model";
import database from "@config/database";

class RespondentSummaryModel extends Model {
  declare id: number;
  declare respondent_id: number;
  declare max_point: number;
  declare earned_point: number;
  declare average_point: number;
  declare percentage_point: number;
  declare created_at: Date;
  declare updated_at: Date;

  declare respondent?: RespondentModel;
}

RespondentSummaryModel.init(
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
    max_point: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    earned_point: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    average_point: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    percentage_point: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: "respondent_summary",
    tableName: "respondent_summaries",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

// RespondentSummaryModel.sync();

export default RespondentSummaryModel;
