import {mockApi,moviesApi} from './apis.js'


export const promesaMovie = async function (){
    try{
        const response = await fetch(moviesApi)
        const {entries} = await response.json()
        return entries
    } catch(error){
        return error;
    }
}

export const promesaMovieMockApi = async function (){
    try{
        const response = await fetch(mockApi)
        const data = await response.json()
        return data
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
            images:{
                "Poster Art":{
                    url: movie.images["Poster Art"].url
                }
            }
        }
        const response = await fetch(mockApi, {
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