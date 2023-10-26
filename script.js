function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pulando = document.getElementById('txtp')
    let res =document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pulando.value.length == 0){
        res.innerHTML = 'Impossivel Contar!'
        alert('[Erro]: Faltam Dados !!!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pulando.value)
        if (p <= 0){
            alert('Invalido')
        }
        if(i < f){
            //Contagem Crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
         
        }else{
            //Contagem Regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{2716}`
        
    } 
}