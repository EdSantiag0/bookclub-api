"use strict";

const { query } = require("express");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Categories", [
      {
        id: 1,
        name: "Ficção",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Romance",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "Terror",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "Autoajuda",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: "Negócios",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: "Biografia",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: "Mangá",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        name: "HQ",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        name: "Saúde",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        name: "Informática",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        name: "Suspense",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        name: "Fantasia",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        name: "Culinária",
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
