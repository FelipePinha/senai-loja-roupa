function enviarMensagemZap(event) {
    event.preventDefault()

    const nome = document.querySelector('#nome').value
    const email = document.querySelector('#email').value
    const mensagem = document.querySelector('#mensagem').value

    const url = `https://wa.me/5511981428501?text=Nome%3A%20${nome}%0A%0Aemail%3A%20${email}%0A%0A${mensagem}`

    window.open(url, '__blank')
}

document.querySelector('form').addEventListener('submit', enviarMensagemZap)