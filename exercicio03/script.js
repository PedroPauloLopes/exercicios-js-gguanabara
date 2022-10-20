function count() {
    var start = document.getElementById("txti")
    var end = document.getElementById("txtf")
    var step = document.getElementById("txtp")
    var result = document.getElementById("result")

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        window.alert ("[ERRO] Faltam dados! Verifique os campos e tente novamente.")
        result.innerHTML = `[ERRO] Impossível contar! Verifique os campos e tente novamente.`
    } else {
        result.innerHTML = "Contando: <br>"
        let s = Number(start.value)
        let e = Number(end.value)
        let st = Number(step.value)
        if (st <= 0){
            window.alert("Passo inválido! Atribuindo o VALOR 1 para o passo.")
            st = 1
        }
        
        if (s <e){
            //contagem crescente //
            for(var c = s; c<=e; c+=st){
                result.innerHTML += ` ${c} \u{1F449}`
            } 

        } else {
            //contagem decrescente //
            for(let c = s; c >= e; c -= st)
            result.innerHTML += ` ${c} \u{1F449}`
        }
        result.innerHTML += `\u{1F3C1}`
    }
}