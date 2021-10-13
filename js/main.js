function editarPopup(){
    const imgPoster = document.querySelector('div.poster img')
    const btnAssistir = document.querySelector('div.envelope .btn')
    const logoStreaming = document.querySelector('div.logo-streaming img')
    const linkStreaming = document.querySelector('div.logo-streaming a')
    const nome = document.querySelector('div.envelope h2')
    const duracao = document.querySelector('div.infos div.duracao')
    const ano = document.querySelector('div.infos div.ano-lancamento')
    const idadeRecomendada = document.querySelector('div.infos div.idade-recomendada')
    const sinopse = document.querySelector('p.sinopse')
    const genero = document.querySelector('p.genero')
    const direcao = document.querySelector('p.direcao')

    imgPoster.setAttribute('src', 'images/poster-loki.jpg')
    nome.innerHTML = `Loki`
    sinopse.innerHTML = `<strong>Sinopse:<strong/> `
}

function openLink(){
    window.open('https://www.youtube.com/watch?v=L1FdEBTJXus')
}

function criarPopup(modalID){
    const modal = document.getElementById(modalID)

    modal.classList.add('mostrar')
    modal.addEventListener('click', function (e){
        if(e.target.id == modalID || e.target.className == 'btn-fechar-popup') {
            modal.classList.remove('mostrar')
        }
    })
}