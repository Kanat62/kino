
window.onload = () =>{
    const dataFilm = localStorage.getItem('film')
    const out = document.querySelector('.films')
    const imgBlock = document.querySelector('.item__block')

    if(!dataFilm) return

    const data = JSON.parse(dataFilm)
    document.querySelector('.item__title').innerHTML = data.nameRu
    document.querySelector('.item__year').innerHTML = data.year
    document.querySelector('.item__country').innerHTML = data.countries.map(item => item.country)
    document.querySelector('.item__genres').innerHTML =  data.genres.map(item =>  ' ' + item.genre)
    document.querySelector('.item__time').innerHTML = data.filmLength
    document.querySelector('.item__rating').innerHTML = data.rating
    imgBlock.innerHTML =  `<img class="item__img" src="${data.posterUrl}" alt="${data.nameRu}">`

    // const API_KEY = '4eee73bd-acea-4c22-a6c3-f8c0375b74d0'
    // const API_URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${data.filmId}/videos`
    // const filmTrailer = document.querySelector('.film__trailer')
    
    // getURL(API_URL)

    // async function getURL(url) {
    //     const resp = await fetch(url , {
    //         method: 'GET',
    //         headers: {
    //             'X-API-KEY': API_KEY,
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //     const respData = await resp.json()
    //     showTrailer(respData)
    
    // }
    
    // function showTrailer(url) {
    //    console.log(url);
    //     // if(!url.items[0]) return
    //     // let data = url.items[0].url
    //     // let a = data.slice(data.search('v='))
    //     // let b = a.slice(2,a[a.length])
    //     // let sliceUrl = data.slice(0,data.search('watch')) + 'embed/' + b
    //     filmTrailer.innerHTML = `
    //     <video src="${url.items[0].url}"></video>
           
    //     `
    // }
}
