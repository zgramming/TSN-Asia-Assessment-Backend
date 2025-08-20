"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("respondent_summaries", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      respondent_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "respondents",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      max_point: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      earned_point: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      average_point: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      percentage_point: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("respondent_summaries");
  },
};
