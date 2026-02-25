
window.onload = function() {
    carregarTarefas()
}

function adicionar(){   
    var caixa = window.document.getElementById('itaf')
    var valorCaixa = caixa.value

    if(valorCaixa === ''){
        window.alert('[ERROR] Valor vazio')
        return
    }
    
    criarItem(valorCaixa, false)
    salvaLocalStorage()

    window.document.getElementById('itaf').value = ''
}

function criarItem(texto, concluida){
    var lista = window.document.getElementById('lista')
    var item = document.createElement('li')
    item.innerHTML = texto +
    '<span onclick="concluir(this)">✅</span>' +
    '<span onclick="deletar(this)">❌</span>'
    
    if(concluida){
        item.classList.add('concluida')
    }

    lista.appendChild(item)
}

function concluir(botao){
    botao.parentElement.classList.toggle('concluida')
    salvaLocalStorage()
}

function deletar(botao){
    botao.parentElement.remove()
    salvaLocalStorage()
}

function salvaLocalStorage(){
    var lista = window.document.getElementById('lista')
    var itens = lista.getElementsByTagName('li')

    var tarefas = []

    for(var i = 0; i < itens.length; i++){
        tarefas.push({
            texto: itens[i].childNodes[0].textContent,
            concluida: itens[i].classList.contains('concluida')
        })
    }
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

function carregarTarefas(){
    var tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    for(var i = 0; i < tarefas.length; i++){
        criarItem(tarefas[i].texto, tarefas[i].concluida)
    }
}