const container = document.querySelector(".container")
const inputSearch = document.querySelector("#input-search")
const btnSearch = document.querySelector("#btn-search")
const btnClear = document.querySelector("#btn-clear")

function createCards(arrayData){
    container.innerHTML = ''
    if(arrayData.length == 0){
        container.innerHTML = "<h2>No se encontro resultados</h2>"
        return
    }

    arrayData.map(laptop => {
        container.innerHTML += `
        <div class="card">
            <h4 class="title">${laptop.nombre}</h4>
            <div class="container-photo">
                <img src=${laptop.imagen}
            </div>
            <div class="container-price">
                <p class="price-promotion">Precio:$${laptop.precioNormal}</p>
                <p class="sale-price">Oferta:$${laptop.precioOferta}</p>
            </div>
            <button class="btn-buy">Comprar</button>
        </div>
        `
    })
}

createCards(laptops)


btnSearch.onclick = function(){
    const textSearch = inputSearch.value
    
    if(textSearch === ''){
        alert('debe de escribir un texto para buscar algo')
        return
    }
    const filtro = laptops.filter(laptop =>
        laptop.nombre.toLowerCase().includes(textSearch.toLowerCase()) ||
        laptop.marca.toLowerCase().includes(textSearch.toLowerCase()) ||
        laptop.vendedor.toLowerCase().includes(textSearch.toLowerCase())
    );
    createCards(filtro)
}

btnClear.onclick = function(){
    inputSearch.value = ''
    createCards(laptops)
}

