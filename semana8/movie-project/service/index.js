//metodos para obtener o modificar los datos:
/*
    obtener => GET
    crear => POST
    actualizar => PUT
    eliminar => DELETE
*/
import {urlMovies, mockApiUrl} from './config.js';

//funcion que retorna las 100 peliculas

export const getMovies = async () => {
    try{
        const response = await fetch(urlMovies);
        const { entries } = await response.json();
        return entries;
    } catch(error){
        return error;
    }
}
export const getMoviesFromMockApi = async () => {
    try{
        const response = await fetch(mockApiUrl);
        const data = await response.json();
        return data;
    } catch(error){
        return error;
    }
}
export const storeMovieMockApi = async (movie) =>{
    try{
        //!el objeto que se enviara para mockApi
        const object = {
            title: movie.title,
            programType: movie.programType,
            releaseYear: movie.releaseYear,
            imageUrl: movie.images["Poster Art"].url,
        }
        // console.log('poawgopkag',movie)
        const response = await fetch(mockApiUrl, {
            method: 'POST',
            body: JSON.stringify(object),
            headers:{
                'Content-Type': 'application/json',
            },

            
        })
        return response
    } catch(error){
        return error;
    }
}
