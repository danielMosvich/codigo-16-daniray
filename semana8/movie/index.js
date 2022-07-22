const url = "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json"
const containerMovies = document.querySelector('#container-movies')

  // fetch(url)
  //   .then(response => response.json())
  //   .then(data => renderCards(data.entries))
    // .catch(error => console.log(error))
async function getJson(){
  const response = await fetch(url)
  const { entries:data} = await response.json()
  // console.log(data)
  renderCards(data)
}
getJson()


function renderCards(movies){
    containerMovies.innerHTML = ""
    mov = movies.sort(()=> Math.random() - 0.5)
    mov.forEach((movie,i) => {
      if(i < 10){
        const { title:titulo, programType:tipo, images:img} = movie;
        // const image_url = img["Poster Art"].url
        //try catch de error de imagen
        containerMovies.innerHTML += `
        <div class="col">
          <div class="card my-3" >
          <span class=" rounded-0 rounded-top badge ${(movie.programType === 'series') ? 'bg-success' :'bg-warning'}" style="position:absolute; width:100%; height:25px;">${tipo}</span>
            <img
  
              src="${img["Poster Art"].url}"
              class="card-img-top"
              alt=""
              onerror="this.src='https://via.placeholder.com/300x450'"
            / style='margin-top:20px;'>
            <div class="card-body">
              <div class="card-title">${titulo}</div>
              <p class="card-text">
               ${movie.description}
              </p>
            </div>
          </div>
        </div>
        `
      }
    });
  }


let data = null
function xd (dat){
    data = dat
    console.log(data)
}
