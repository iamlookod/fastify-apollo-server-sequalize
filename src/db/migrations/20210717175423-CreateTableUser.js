"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("user", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      username: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: { type: Sequelize.DataTypes.STRING, allowNull: false },
      name: { type: Sequelize.DataTypes.STRING, allowNull: false },
      createdAt: { type: Sequelize.DataTypes.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DataTypes.DATE, allowNull: false },
      deletedAt: Sequelize.DataTypes.DATE,
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable("user");
  },
};
