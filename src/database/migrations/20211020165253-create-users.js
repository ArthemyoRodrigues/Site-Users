'use strict';

// Migration: onde você manipulas tabelas do db
module.exports = {
  // Função para "fazer" algo no db
  up: async (queryInterface, Sequelize) => {
    // Função que cria uma tabela
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      idade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
     
  },

  // Função para desfazer algo feito na função up para caso dê erro 
  down: async (queryInterface, Sequelize) => {
    // Função de apaga a tabela
    await queryInterface.dropTable('users');
  }
};
