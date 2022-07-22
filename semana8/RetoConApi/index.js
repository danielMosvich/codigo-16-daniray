const containerALlMovies = document.querySelector('#container-all-movies')
const btnTraerPeliculas = document.querySelector('#btn-traer-peliculas')
const inputMoviesRange = document.querySelector('#input-movies-number')
const btnExportMovies = document.querySelector('#btn-export-api')
const btnImportMovies = document.querySelector('#btn-import-api')

import {promesaMovie, storeMovieMockApi,promesaMovieMockApi} from './services/config.js'
const arrayMovies = []

btnImportMovies.onclick = async function (){
    const movies = await promesaMovieMockApi()
    containerALlMovies.innerHTML = ''
    inputMoviesRange.value = movies.length
    movies.forEach( async (element) => {
        renderMovie(element)
    })
}

btnExportMovies.onclick = async function (){
    arrayMovies.forEach( async (element)=>{
        await storeMovieMockApi(element)
    })
    // console.log('listo!')
    alert('listo!')
}


btnTraerPeliculas.onclick = async function (){
    const movies = await promesaMovie()
    containerALlMovies.innerHTML = ''
    movies.sort(()=> 0.5 - Math.random())
    const valueRange = inputMoviesRange.value
    if(valueRange === '' || valueRange === 0){
        alert('Ingrese un numero')
        return
    }

    
    movies.forEach( async (element) => {
        
        const url = element.images["Poster Art"].url
        const response = await fetch(url)
        if(response.ok){
            renderMovie(element)
        }
    });
}

function renderMovie (element){
    const movies = document.querySelectorAll('#container-all-movies .card')
    // console.log(movies.length)
    if(movies.length >= inputMoviesRange.value){
        // console.log(element)
        return
    }
    arrayMovies.push(element)
    // console.log(containerALlMovies.length)
    const movie = document.createElement('div')
    movie.innerHTML += `
    <div class="card col-1 my-3" style="width: 18rem;">
        <span class=" rounded-0 rounded-top badge ${(element.programType === 'series') ? 'bg-success' :'bg-warning'}" style="position:absolute; width:100%; height:25px;">${element.programType}</span>
            <img src="${element.images['Poster Art'].url}"          class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.description}</a>
        </div>
    </div>
    `
    containerALlMovies.appendChild(movie)
    // console.log(arrayMovies)
}