// Importando o sequelize
const Sequelize = require('sequelize')
// Importando as configurações do db
const dbConfig = require('../config/database')
// Importando o model da tabela
const User = require('../model/User')

//Connect com o db
const connection = new Sequelize(dbConfig);
// Iniciando a model passando a conexão
User.init(connection)

module.exports = connection