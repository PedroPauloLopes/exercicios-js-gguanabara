function load () {
    var msg = window.document.getElementById('msg')
    var image = window.document.getElementById('image')
    var date = new Date()
    var hour = date.getHours ()
    var minutes = date.getMinutes ()

    msg.innerHTML = `Agora são: ${hour} horas e ${minutes} minutos.`
    if (hour >= 0 && hour <12) {
        image.src = 'manha-pr.png'
        document.body.style.background = '#6AD9D9'
    } else if (hour>= 12 && hour <18) {
        image.src = 'tarde-pr.png'
        document.body.style.background = "#F2A413"
    } else {
        image.src = 'noite-pr.png'
        document.body.style.background = "#013440"
    }
}


