const btn = document.querySelector('#btn');
const h1button = document.querySelector('#h1');
// let uwu = ''
btn.onclick = () => console.log('le diste click al boton');
h1button.onclick = () => {
    console.log('le diste click al h1')
    h1button.innerText = 'uwu'
}

//crearemos un array de objetos con datos del formulario

const users = []
const form = document.querySelector('#form-store-user')

form.onsubmit = (event) => {
    
    event.preventDefault();
    const formData = new FormData(event.target)
    //*lo hare como el profe
    const user = {}
    for(let dato of formData.entries()){
        // console.log(dato[0],dato[1])
        user[dato[0]] = dato[1]
    }


    // for(let [key,value] of formData.entries()){
    //     // user[dato[0]] = [key]
    //     console.log(key,value)
    //     user[key] = value
    // }
    users.push(user);
    console.log(users)
    console.log('uwu:'+ users[0].nombre)
}
