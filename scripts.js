// Quando a página carregar
window.onload = function() {
    carregarTarefas()
}

function adicionar(){
    /* função adicionar 
         - pega o valor da caixa
         - validar
         - manda criar item
         - manda salvar
    */    
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
    /* função criarItem
        - criar o item (li)
        - add texto
        - add botoes
        -aplicar classe (opcional)
    */
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
    /* função salva
        - salvar os itens
        - percorrer os li
    */
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
    /* função carregar
        - buscar as tarefas salvas
    */
    var tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    for(var i = 0; i < tarefas.length; i++){
        criarItem(tarefas[i].texto, tarefas[i].concluida)
    }
}