// importando o express
const express = require('express')
// importando as rotas
const routes = require('./routes')
// Importando o cors do node
const cors = require('cors')
// Importando o database
require('./database/index')

// Atribuindo o express a variável app
const app = express()

// Usando cors no express para evitar conflito
app.use(cors())
// Usando json
app.use(express.json())
// Usando o urlencoded
app.use(express.urlencoded({extended: false}))
// Usando as rotas criadas
app.use(routes)

// Alocando a aplicação na porta 300
app.listen(3000)