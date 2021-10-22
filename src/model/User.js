// Exportando a classe Model e Datatype do sequelize
const { Model, DataTypes } = require('sequelize')

class User extends Model {
    // Modelando o a tabela de User
    static init (sequelize){
        super.init({
            name: DataTypes.STRING,
            idade: DataTypes.INTEGER
        }, {
            sequelize
        })
    }
}

module.exports = User