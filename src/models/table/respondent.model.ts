import database from "config/database";
import { DataTypes, Model } from "sequelize";
import RespondentSummaryModel from "./respondent-summary.model";
import RespondentAnswerModel from "./respondent-answer.model";

class RespondentModel extends Model {
  declare id: number;

  declare template_id: number;
  declare first_name: string;
  declare last_name: string;
  declare department: string;
  declare years_working: number;
  declare created_at: Date;
  declare updated_at: Date;

  declare summary?: RespondentSummaryModel;
  declare answers?: RespondentAnswerModel[];
}

RespondentModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    template_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    years_working: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: "respondent",
    tableName: "respondents",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

// RespondentModel.sync();

export default RespondentModel;
