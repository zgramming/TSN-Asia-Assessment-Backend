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

    await queryInterface.bulkInsert("questions", [
      {
        id: 1,
        template_id: 1,
        category_id: 1,
        label: "How satisfied are you with your workplace environment?",
        type: "radio",
        max_weight_value: 5,
        display_order: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        template_id: 1,
        category_id: 2,
        label: "How supported do you feel by management?",
        type: "radio",
        max_weight_value: 5,
        display_order: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: 3,
        template_id: 2,
        category_id: 3,
        label: "Rate your leadership skills.",
        type: "radio",
        max_weight_value: 5,
        display_order: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        template_id: 2,
        category_id: 4,
        label: "How well do you collaborate with your team?",
        type: "radio",
        max_weight_value: 5,
        display_order: 2,
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
    await queryInterface.bulkDelete("questions", null, {});
  },
};
