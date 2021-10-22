// Manipulando o DOM do cadastro
try {

    // Pegando o botão de submit
    const submit = document.getElementById('submit')
    setCad(submit)

}
catch (error) {
    console.error(error)
}

// Função para cadastrar
async function setCad(submit){
    submit.onclick = function () {
    const name = document.getElementById('nome').value
    const idade = document.getElementById('old').value

    fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: { 'content-type': 'application/json'},
    body: JSON.stringify({
        name,
        idade
    })
    }).then(res => {
    return res.json()
    }).catch(ex => {
    console.error(ex)
        })
    }
}


