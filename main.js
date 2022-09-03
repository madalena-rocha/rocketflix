import {
    API_KEY, BASE_URL,
    IMG_URL,
    language,
} from './api.js'

const changeMovie = document.querySelector('#change-movie')
changeMovie.addEventListener('click', getMovie)


function getMovie() {
    const id = Math.floor(Math.random() *1000) + 1
    
    // const url = "https://api.themoviedb.org/3/movie/550?api_key=e411cf39b23ffdd2f1a59049bcdf5505"
    const url = `${BASE_URL}${id}?${API_KEY}&${language}`

    axios.get(url)
    .then(response => {
        const data = response.data

        film.innerHTML = `
        <div>
            <img class="film-poster" src="${IMG_URL + data.poster_path}" alt="Poster do filme.">
            <p class="film-popularity">Nota: ${data.vote_average}</p>
        </div>
        <div>
            <h2 class="film-title">${data.title}</h2>
            <p class="film-description">${data.overview}</p>
        </div>
        `
    })
    .catch(error => {
        film.innerHTML = `
        <img class="film-poster" src="./assets/poster.png" alt="Computador exibindo código na tela em uma mesa com um livro aberto.">
        <div id="error-message">
            <h2 class="film-title">Ops, hoje não é dia de assistir filme. Bora codar! 🚀</h2>
        </div>
        `
    })
}