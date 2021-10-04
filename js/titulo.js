class Titulo{
    constructor(nome, ano, descricao, generos, duracao, urlCapa, urlPoster){
        this.nome = nome
        this.ano = ano
        this.descricao = descricao
        this.generos = generos
        this.duracao = duracao
        this.urlCapa = urlCapa
        this.urlPoster = urlPoster
    }

    banner(){
        let meuCSS = `background: linear-gradient(90deg, rgba(0, 0, 0, 0.92)50%, rgba(0, 0, 0, 0.001))`
        const movie = document.querySelector('div.banner-principal')
        const tituloMovie = document.querySelector('div.titulo')
        const descricaoMovie = document.querySelector('div.descricao')
    
        movie.style.cssText = `${meuCSS}, url(${this.urlCapa})`
        tituloMovie.innerHTML = `<h2>${this.nome} (${this.ano})</h2>`
        descricaoMovie.innerHTML = `<p>${this.descricao}</p>`
    
        window.scrollTo(0, 0)
    }
}