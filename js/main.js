let meuCSS = `background: linear-gradient(90deg, rgba(0, 0, 0, 0.92)50%, rgba(0, 0, 0, 0.001))`

function trocaBanner(urlImage, titulo, ano, descricao){
    const movie = document.querySelector('div.banner-principal')
    const tituloMovie = document.querySelector('div.titulo')
    const descricaoMovie = document.querySelector('div.descricao')

    movie.style.cssText = `${meuCSS}, url(${urlImage})`
    tituloMovie.innerHTML = `<h2>${titulo} (${ano})</h2>`
    descricaoMovie.innerHTML = `<p>${descricao}</p>`

    window.scrollTo(0, 0)
}