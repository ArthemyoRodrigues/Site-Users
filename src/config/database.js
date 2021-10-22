module.exports = {
    dialect: '', // Qual db vai usar
    host: '', // O host
    username:  '', // User do db
    password: '', // Senha do usuário
    database:  '', // nome do banco de dados
    define: {
        timestamp: true, // Cria um created_at e um update_at para cada instância
        underscored: true // // As variáveis são escritas em snack_case
    }
}