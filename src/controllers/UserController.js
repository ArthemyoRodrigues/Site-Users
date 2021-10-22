// Importando o model da tabela
const User = require("../model/User")

//Classe com as funções para fazer as querys
module.exports = {
    // Pegas todos os user do db
    async encontreTodos(req, res){
        try {
            const users = await User.findAll()
            return res.json(users).status(200)
        } catch (error) {
            return res.json(error).status(400)
        }
        
    },
    // Cadastra um user no db
    async criaUm(req, res) {
        try {
            const { name, idade } = req.body
            const user = await User.create({name, idade})

            return res.json(user)
        } catch (error) {
            return res.json(error)
        }
        
    },
    // Encontra um único user
    async encontraUm(req, res) {
        try {
            const { id } = req.params
            const user = await User.findOne({ where: { id: id } })

            return res.json(user)
        } catch (error) {
            return res.json(error)
        }
    },
    // Deleta um user
    async deleteUm(req, res) {
        try {
            const { id } = req.params
            await User.destroy({ where: { id: id } })

            return res.json({ "id": "destroy"})
        } catch (error) {
            return res.json(erro)
        }
    },
    // Atualiza um user
    async atualizaUm(req, res) {
        const { id } = req.params
        const infos = req.body
        try {
            await User.update(infos, {returning: true ,where: {id: id}})
            const response = await User.findOne({where: { id: Number(id) }})
            return res.json(response)
        } catch (error) {
            return res.json(error)
        }
    }
}