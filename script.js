function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = 'Agora são ' + hora + ' horas.'
    if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = 'fotomanha.png'
    body.style.background = '#66759e'
    } else if (hora>=12 && hora<18) {
    //boa tarde
    img.src = 'fototarde.png'
    document.body.style.background = '#d48b58'
    } else {
    //boa noite 
    img.src = 'fotonoite.png'
    document.body.style.background = '#134975'
}

}
