
function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
        if (hora >= 5 && hora < 12) {
            //Bom dia!
            foto.src = 'img/manha.jpg'
    } else if (hora >= 12 && hora < 18) {
            //Boa tarde!
            foto.src = 'img/tarde.jpg'
            document.body.style.background = '#b9846f'
    } else if (hora >= 0 && hora <= 4) {
            //Boa madrugada!
            foto.src = 'img/madrugada.jpg'
            document.body.style.background = '#515154'
        } else {
            //Boa noite!
            foto.src = 'img/noite.jpg'
            document.body.style.background = '#0b1e3f'
    }
}