function criarPopup(modalID){
    const modal = document.getElementById(modalID)

    modal.classList.add('mostrar')
    modal.addEventListener('click', function (e){
        if(e.target.id == modalID || e.target.className == 'btn-fechar-popup') {
            modal.classList.remove('mostrar')
        }
    })

    return false
}

function editarPopup(titulo){
    const imgPoster = document.querySelector('div.poster img')
    const btnAssistir = document.querySelector('div.envelope a.btn')
    const logoStreaming = document.querySelector('div.logo-streaming.centralizado img')
    const linkStreaming = document.querySelector('div.logo-streaming.centralizado a')
    const nome = document.querySelector('div.envelope h2')
    const duracao = document.querySelector('div.infos div.duracao')
    const ano = document.querySelector('div.infos div.ano-lancamento')
    const idadeRecomendada = document.querySelector('div.infos div.idade-recomendada')
    const sinopse = document.querySelector('p.sinopse')
    const genero = document.querySelector('p.genero')
    
    imgPoster.setAttribute('src', titulo.urlPoster)
    btnAssistir.setAttribute('href', titulo.linkAssistir)
    logoStreaming.setAttribute('src', titulo.urlLogoStreaming)
    linkStreaming.setAttribute('href', titulo.linkStreaming)
    nome.innerHTML = titulo.nome
    duracao.innerHTML = titulo.duracao
    ano.innerHTML = titulo.ano
    idadeRecomendada.innerHTML = `classificação: ${titulo.classificacao}`
    sinopse.innerHTML = `<strong>Sinopse:</strong> ${titulo.descricao}`
    genero.innerHTML = `<strong>Gênero:</strong> ${titulo.generos}`

    criarPopup('modal-titulo')
}

function openLink(){
    window.open('https://www.youtube.com/watch?v=L1FdEBTJXus')
}