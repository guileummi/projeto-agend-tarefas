function adicionar(){
    var caixa = window.document.getElementById('itaf')
    var lista = window.document.getElementById('lista')
    var valorCaixa = caixa.value

    if(valorCaixa.trim() === ''){
        window.alert('[ERROR] valor vazio')
        return
    }

    var item = document.createElement('li')
    item.innerHTML = valorCaixa + '<span onclick="deletar(this)">❌</span>'

    lista.appendChild(item)

    window.document.getElementById('itaf').value = ''
}

function deletar(item){
    item.parentElement.remove()
}