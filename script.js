function contar() {
    var inicio = window.document.getElementById('txtinicio')
    var fim = window.document.getElementById ('txtfim')
    var passo = window.document.getElementById('txtpasso')
    var res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel Contar!'
       // window.alert('[ERRO] Faltam Dados!')

    } else{
        res.innerHTML = 'Contando:'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0) {
            window.alert('Passo invalido! Considerando PASSO 1')
            p =1 
        }
        if (i < f) {
            // Contagem Crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c}\u{1F449}`
            }
        } else {
            // Contagem Regressiva
            for (var c= i; c >= f; c-= p) {
                res.innerHTML += `\u{1F449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}