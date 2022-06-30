const libros = [
    {
        titulo: "Haz una pregunta al Libro Mágico, Te responderá...",
        rate:'3.6',
        img:'https://m.media-amazon.com/images/I/71tq86Ny1BL._AC_UL320_.jpg',
        price:'9.90'
    },
    {
        titulo: "Mr Damon",
        rate:'4.3',
        img:'https://m.media-amazon.com/images/I/81nMh9hVzaS._AC_UL320_.jpg',
        price:'0.00'
    },
    {
        titulo: "El caso Alaska Sanders",
        rate:'5.0',
        img:'https://m.media-amazon.com/images/I/811d-3jV5mL._AC_UL320_.jpg',
        price:'10.44'
    },
    {
        titulo: "El invierno más largo (Best seller / Thriller)",
        rate:'3.4',
        img:'https://m.media-amazon.com/images/I/915dIfUpskL._AC_UL320_.jpg',
        price:'0.00'
    },
    {
        titulo: "Aquitania: Premio Planeta 2020 (Autores Españoles e...",
        rate:'4.0',
        img:'https://m.media-amazon.com/images/I/81A5LFzHYkL._AC_UL320_.jpg',
        price:'20.44'
    },
    {
        titulo: "La vida desnuda: Premio Azorín de Novela 2020 (Autores Españoles e...",
        rate:'4.0',
        img:'https://m.media-amazon.com/images/I/718Ja+niuNL._AC_UL320_.jpg',
        price:'19.47'
    },
]
const container = document.querySelector(".container")
libros.map(libro =>{
    container.innerHTML += `
    <div class="card">
                <div class="card-imagen">
                    <img src=${libro.img} alt="">
                </div>
                <div class="card-content">
                    <div class="card-title">
                        <p>${libro.titulo}</p>
                    </div>
                    <div class="card-rate">
                        <p>⭐ ${libro.rate}</p>
                    </div>
                    <div class="card-precios">
                        <p>$ ${libro.price}</p>
                    </div>
                </div>
            </div>
    `
})