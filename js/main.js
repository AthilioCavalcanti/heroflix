let meuCSS = `background: linear-gradient(90deg, rgba(0, 0, 0, 0.92)50%, rgba(0, 0, 0, 0.001))`

function trocaBanner(titulo){
    const movie = document.querySelector('div.banner-principal')
    const tituloMovie = document.querySelector('div.titulo')
    const descricaoMovie = document.querySelector('div.descricao')

    movie.style.cssText = `${meuCSS}, url(${titulo.urlCapa})`
    tituloMovie.innerHTML = `<h2>${titulo.nome} (${titulo.ano})</h2>`
    descricaoMovie.innerHTML = `<p>${titulo.descricao}</p>`

    //window.scrollTo(0, 0)
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