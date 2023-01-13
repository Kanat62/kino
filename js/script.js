const API_KEY = '4eee73bd-acea-4c22-a6c3-f8c0375b74d0'
const API_URL_POPULAR = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1'
const API_URL_SEARCH = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword='

const contentFilms = document.querySelector('.content__films')
const contentText = document.querySelector('.content__text')

getMovies(API_URL_POPULAR)


async function getMovies(url) {
    const resp = await fetch(url , {
        method: 'GET',
        headers: {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json',
        }
    })
    const respData = await resp.json()

    showMovies(respData)

    if(respData.searchFilmsCountResult === 0){
        return contentText.innerText = `Не найдено по запросу: "${respData.keyword}"`
    }
}
// =============================================


// ======================================================================
function showMovies(data) {
    contentFilms.innerHTML = ''
    data.films.forEach(film =>{
        if(!film.nameRu) return
        const filmItem = `
            <div class="films__item" data-id="${film.filmId}">
                <div class="item__block-img">
                    <img class="item__img" src="${film.posterUrl}" alt="${film.nameRu}">
                    <div class="item__block-dark"></div>
                </div>
                <div class="item__info">
                    <div class="item__title">
                        ${film.nameRu}
                    </div>
                    <div class="item__year">
                        ${film.year}
                    </div>
                </div>
            </div>
         `
         contentFilms.insertAdjacentHTML('beforeend',filmItem)
    })
    clickCard(data)
}

const searchForm = document.querySelector('.search__form')
const searchMovie = document.querySelector('.search__movie')

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const apiSearchUrl = `${API_URL_SEARCH}${searchMovie.value}`;
    if (searchMovie.value) {
        getMovies(apiSearchUrl);
        contentText.innerText = `Фильмы по запросу: ${searchMovie.value}`
        searchMovie.value = "";
    }
});

function clickCard(data) {
    const filmsItem = document.querySelectorAll('.films__item')
    
    filmsItem.forEach(item => {
        item.onclick = function(event){
            data.films.forEach(film =>{
                if(film.filmId === +item.dataset.id){
                    sendData(film)
                }
            })
        }
    })
    
   
}
function sendData(filmData) {
    const data = JSON.stringify(filmData)
    localStorage.setItem('film', data)

    // Открытие страницы
    // document.location.href = `${document.location.protocol}//${document.location.host}/kino/film.html`
    document.location.href = `${document.location}/film.html`
}