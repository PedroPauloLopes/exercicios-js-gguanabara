function check (){
    var date = new Date()
    var year = date.getFullYear()
    var byear = window.document.getElementById("txtano")
     
    if (byear.value.length == 0 || byear.value.length < 4 || byear.value > year || byear.value < 1900) {
        window.alert ("[ERRO] Verifique o ano de nascimento e tente novamente.")
    } else {
        var sex = window.document.getElementsByName("radsex")
        var age = year - Number(byear.value)
        var gen = ""
        var img = window.document.createElement('img')
        img.setAttribute('id', "photo")
        if (sex[0].checked) {
            gen = "Mulher"
            if (age >= 0 && age <= 18) {
                img.setAttribute("src", "./imagens/mulher-crianca-p.webp") 
            } else if (age>18 && age<45) {
                img.setAttribute("src", "./imagens/mulher-jovem-p.jpeg") 

            } else if (age<60) {
                img.setAttribute("src", "./imagens/mulher-adulta-p.jpeg") 

            } else {
                img.setAttribute("src", "./imagens/mulher-idosa-p.jpeg") 

            }
        } else {
            gen = "Homem"
            if (age >= 0 && age <= 18) {
                img.setAttribute("src", "./imagens/homem-crianca-p.webp") 
            } else if (age>18 && age<45) {
                img.setAttribute("src", "./imagens/homem-jovem-p.jpeg") 

            } else if (age<60) {
                img.setAttribute("src", "./imagens/homem-adulto-p.jpeg") 

            } else {
                img.setAttribute("src", "./imagens/homem-idoso-p.jpeg") 

            }
        }

    }
    res.style.textAlign = "center"
    res.innerHTML = `Detectamos: ${gen} com ${age} anos de idade.`
    res.appendChild(img)

}