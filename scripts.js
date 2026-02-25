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
    item.innerHTML = valorCaixa +
    '<span onclick="concluir(this)">✅</span>' +
    '<span onclick="deletar(this)">❌</span>'
    
    if(concluida === 'true'){
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