function mtable () {
    var number = document.getElementById("txtn")
    var table = document.getElementById("seltab")

    if (number.value.length == 0) {
        window.alert("Por favor, digite um número válido!") 
    } else {
        var n = Number(number.value)

        var c = 1
        table.innerHTML = ""
        while (c <= 10) {
            let item = document.createElement("option")
            item.text = ` ${n} X ${c} = ${n * c} `
            table.appendChild(item)
            c++
        }

    }

}