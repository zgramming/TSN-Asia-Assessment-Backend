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
     *
     */

    await queryInterface.bulkInsert("templates", [
      {
        id: 1,
        code: "EMP_SATISFACTION_2025",
        name: "Employee Satisfaction Survey 2025",
        description: "Annual survey to assess employee satisfaction and engagement.",
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        code: "MNG_PERF_REVIEW_2025",
        name: "Management Performance Review 2025",
        description: "Performance review for management team to evaluate leadership and team collaboration.",
        is_active: true,
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

    await queryInterface.bulkDelete("templates", null, {});
  },
};
