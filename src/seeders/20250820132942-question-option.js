"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("question_options", [
      // Question 1
      {
        question_id: 1,
        label: "Very Satisfied",
        value: "very_satisfied",
        weight: 5,
        display_order: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 1,
        label: "Satisfied",
        value: "satisfied",
        weight: 4,
        display_order: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 1,
        label: "Neutral",
        value: "neutral",
        weight: 3,
        display_order: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 1,
        label: "Dissatisfied",
        value: "dissatisfied",
        weight: 2,
        display_order: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 1,
        label: "Very Dissatisfied",
        value: "very_dissatisfied",
        weight: 1,
        display_order: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },

      // Question 2
      {
        question_id: 2,
        label: "Very Supported",
        value: "very_supported",
        weight: 5,
        display_order: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 2,
        label: "Supported",
        value: "supported",
        weight: 4,
        display_order: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 2,
        label: "Neutral",
        value: "neutral",
        weight: 3,
        display_order: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 2,
        label: "Unsupported",
        value: "unsupported",
        weight: 2,
        display_order: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 2,
        label: "Very Unsupported",
        value: "very_unsupported",
        weight: 1,
        display_order: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },

      // Question 3
      {
        question_id: 3,
        label: "Excellent",
        value: "excellent",
        weight: 5,
        display_order: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 3,
        label: "Good",
        value: "good",
        weight: 4,
        display_order: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 3,
        label: "Average",
        value: "average",
        weight: 3,
        display_order: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 3,
        label: "Poor",
        value: "poor",
        weight: 2,
        display_order: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 3,
        label: "Very Poor",
        value: "very_poor",
        weight: 1,
        display_order: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },

      // Question 4
      {
        question_id: 4,
        label: "Excellent",
        value: "excellent",
        weight: 5,
        display_order: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 4,
        label: "Good",
        value: "good",
        weight: 4,
        display_order: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 4,
        label: "Average",
        value: "average",
        weight: 3,
        display_order: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 4,
        label: "Poor",
        value: "poor",
        weight: 2,
        display_order: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 4,
        label: "Very Poor",
        value: "very_poor",
        weight: 1,
        display_order: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },

      // Question 5 (have 10 options for rating 1 - 10)
      {
        question_id: 5,
        label: "1",
        value: "1",
        weight: 1,
        display_order: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 5,
        label: "2",
        value: "2",
        weight: 2,
        display_order: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 5,
        label: "3",
        value: "3",
        weight: 3,
        display_order: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 5,
        label: "4",
        value: "4",
        weight: 4,
        display_order: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 5,
        label: "5",
        value: "5",
        weight: 5,
        display_order: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 5,
        label: "6",
        value: "6",
        weight: 6,
        display_order: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 5,
        label: "7",
        value: "7",
        weight: 7,
        display_order: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 5,
        label: "8",
        value: "8",
        weight: 8,
        display_order: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 5,
        label: "9",
        value: "9",
        weight: 9,
        display_order: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        question_id: 5,
        label: "10",
        value: "10",
        weight: 10,
        display_order: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("question_options", null, {});
  },
};
