let agregarBtn = document.querySelector('.btn-agregar')
const containerGlobal = document.querySelector('.container')

// agregarBtn.addEventListener('click',agregarPin)

let pines = []
let input_add = `<div class="create-card">
<input id="name-input" type="text" placeholder="Nombre de publicacion" maxlength="30">
<input id="autor-input" type="text" placeholder="Ingrese autor" maxlength="15">
<input id="url-input" type="text" placeholder="url de imagen">
<button onclick="agregarPin()" class="btn-agregar">Crear</button>
<button onclick="eliminarLocal()" class="btn-agregar">Eliminar todo</button>
</div>`
function agregarPin(){
    let name = document.querySelector('#name-input')
    let autor = document.querySelector('#autor-input')
    let url = document.querySelector('#url-input')
    let pinInsert = {
        "nombre": name.value,
        "autor": autor.value,
        "url": url.value
    }
    pines.unshift(pinInsert,)
    containerGlobal.innerHTML = input_add
    pines.map(pin => {
        containerGlobal.innerHTML += 
        `
        <div class="card">
                    <div class="card-main">
                        <img src="${pin.url}" alt="">
                    </div>
                    <div class="card-footer">
                        <p class="titulo">${pin.nombre}</p>
                        <h3 class="autor">by: ${pin.autor}</h3>
                    </div>
        </div>
        `
    })
    localStorage.setItem('pines obj',JSON.stringify(pines))
    // alert('complete')
}
if(localStorage !== undefined){
    let localPines = JSON.parse(localStorage.getItem('pines obj'))
    
    if(localPines !== null){
        pines = localPines
    localPines.map(pin => {
        containerGlobal.innerHTML += 
            `
            <div class="card">
                        <div class="card-main">
                            <img src="${pin.url}" alt="">
                        </div>
                        <div class="card-footer">
                            <p class="titulo">${pin.nombre}</p>
                            <h3 class="autor">by: ${pin.autor}</h3>
                        </div>
            </div>
            `
    })
    }
} 

function eliminarLocal(){
    containerGlobal.innerHTML = input_add 
    localStorage.clear()
    pines = []
}

