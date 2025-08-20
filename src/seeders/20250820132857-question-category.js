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

    await queryInterface.bulkInsert("question_categories", [
      {
        id: 1,
        template_id: 1,
        name: "Workplace Environment",
        display_order: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        template_id: 1,
        name: "Management Support",
        display_order: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: 3,
        template_id: 2,
        name: "Leadership Skills",
        display_order: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        template_id: 2,
        name: "Team Collaboration",
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

    await queryInterface.bulkDelete("question_categories", null, {});
  },
};
