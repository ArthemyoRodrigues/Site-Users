// Importando o express
const express = require('express')
// Importando o UserController
const UserController = require('./controllers/UserController')

// Pegando a classe Router do express
const routes = express.Router();

// Rota para ciar um user
routes.post('/users', UserController.criaUm)
// Rota para pegar todos os user
routes.get('/users/all', UserController.encontreTodos)
// Deleta um user
routes.delete('/users/:id', UserController.deleteUm)
// Encontra um user
routes.get('/users/:id', UserController.encontraUm)
// Atualiza um user
routes.put('/users/:id', UserController.atualizaUm)

module.exports = routes