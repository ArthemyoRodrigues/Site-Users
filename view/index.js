// Função que pega os dados da api
async function getContent(){
    let response = await fetch('http://localhost:3000/users/all')
    let data = await response.json()
    console.log(data)

    show(data)
}

// Funcão que exibi o html com usuários da api
function show(data){
    let outLine = ''
    var date = new Date().getFullYear()

    console.log(date)

    for(let user of data){
        outLine += `<div class="peopleCad">`
        outLine += `<h1 id="h1-${user.id}">Nome: ${user.name}</h1>`
        outLine += `<h1 id="h2-${user.id}">Idade: ${user.idade}</h1>`
        outLine += `<h3>Ano de nascimento: ${date-user.idade}</h3>`
        outLine += `<button class="btn", id="${user.id}">Apagar</button>`
        outLine += `<button class="btn", id="edit-${user.id}">Editar</button></div>`
    }

    document.querySelector('body').innerHTML = outLine
    
    atualizar(data)

    apagar(data)

    console.log(outLine)
}

// Função que apaga os usuários no front
function apagar(data) {
    data.forEach(button => {
        button = document.getElementById(`${button.id}`)
        button.onclick = () => {
            console.log('clicado', 'id: ',button.id)
            fetch(`http://localhost:3000/users/${button.id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json'}})
            location.reload()
            
        }
    });
}

// Função que atualiza os usuários
function atualizar(data){
    data.forEach((button)=>{
        var btn = document.getElementById(`edit-${button.id}`)
        btn.onclick = () => {
            document.getElementById(`h1-${button.id}`).innerHTML = '<label>Nome: <input name="name-edit" id="name-input"></input></label>'
            document.getElementById(`h2-${button.id}`).innerHTML = '<label>Idade: <input name="idade-edit" id="idade-input"></input></label>'
            document.getElementById(`edit-${button.id}`).innerHTML = 'Concluir'

            btn.onclick = () =>{

                let name = document.getElementById('name-input').value
                let idade = document.getElementById('idade-input').value

                if (!name || !idade){
                    alert('Algum campo sem informação!')
                }else{
                    fetch(`http://localhost:3000/users/${button.id}`, {
                    method: 'PUT',
                    headers: { 'content-type': 'application/json'},
                    body: JSON.stringify({
                        name,
                        idade
                    })
                    })
                    location.reload()
                }
            }
        }
    })
}


getContent()