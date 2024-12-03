function criarLinkParaDestaques(event) {
    window.location = `./paginas/${event.target.id}/${event.target.id}.htm`
}

function enviarForm(event) {
    event.preventDefault()

    console.log('enviado')
}

function main() {
    const destaques = document.querySelectorAll('.destaque')

    destaques.forEach(destaque => {
        destaque.addEventListener('click', criarLinkParaDestaques)
    })
}

main()