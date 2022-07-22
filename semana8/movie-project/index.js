//dom logic

import { getMovies, storeMovieMockApi,getMoviesFromMockApi } from './service/index.js';
// console.log(getMovies());

const btnGetMovies = document.getElementById('btnGetMovies');
const containerMovies = document.querySelector('#container-movies')
const btnSaveApi = document.getElementById('btn-save-api');
const btnGetMoviesMockApi = document.getElementById('btn-get-movies-mock-api');

let moviesWithImages = []

// btnGetMoviesMockApi.onclick = async function (){
    
// }

btnGetMovies.onclick = async function (){
    const movies = await getMovies();
    containerMovies.innerHTML = ''
    movies.sort(()=> 0.5 - Math.random())
    .forEach(async (movie) =>{
        const imageUrl = movie.images["Poster Art"].url
        const response = await fetch(imageUrl);

        if(response.ok){
            renderMovies(movie)
        }

    })
}

btnSaveApi.onclick = function (){
    // console.log(moviesWithImages)
    moviesWithImages.forEach( async (movie) => {
        // alert('xd')
        // console.log(movie)
        await storeMovieMockApi(movie)
    })
    console.log('listo!')
}

function renderMovies(movie){
    const movies = document.querySelectorAll('#container-movies .col')
    if(movies.length >= 20){
        // console.log(movies.length)
        return
    }
    moviesWithImages.push(movie)

    containerMovies.innerHTML += `
    <div class="col">
        <div class="card my-5" >
            <span class=" rounded-0 rounded-top badge ${(movie.     programType === 'series') ? 'bg-success' :'bg-warning'}" style="position:absolute; width:100%; height:25px;">${movie.programType}</span>
            <img
            src="${movie.images["Poster Art"].url}"
            class="card-img-top"
            alt=""
            onerror="this.src='https://via.placeholder.com/300x450'"
        / style='margin-top:20px;'>
        <div class="card-body">
            <div class="card-title">${movie.title}</div>
            <p class="card-text">
            ${movie.description}
            </p>
        </div>
        </div>
    </div>
    `
}