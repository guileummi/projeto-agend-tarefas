function adicionar(){
    var caixa = window.document.getElementById('itaf')
    var lista = window.document.getElementById('lista')
    var valorCaixa = caixa.value

    if(valorCaixa === ''){
        window.alert('[ERROR] Valor vazio')
        return
    }

    var item = document.createElement('li')
    item.innerHTML = valorCaixa +
    '<span onclick="concluir(this)">✅</span>' +
    '<span onclick="deletar(this)">❌</span>'

    lista.appendChild(item)

    window.document.getElementById('itaf').value = ''
}

function concluir(item){
    item.parentElement.classList.toggle('concluida')
}

function deletar(item){
    item.parentElement.remove()
}