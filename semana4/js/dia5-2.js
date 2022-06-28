// const dividir = (n1, n2) => {
// return validarSiEsNumero(n1)  validarSiEsNumero(n2)
//     ? "Erro numero no valido"
//     : n1 / n2;

// if (validarSiEsNumero(n1)  validarSiEsNumero(n2)) {
//   return "Erro numero no valido";
// } else {
//   return n1 / n2;
// }
// };

//* Esto no excluye a que podamos combiar funcion

// Recordemos que isNaN retornar un boolena por ende esta
// funcion retora true o false
function validarSiEsNumero(numero) {
return !isNaN(numero);
}

//? reto de crear lista de alumnos;


const alumnos = []

function imprimirAlumnos(){
    const inputNombre = document.querySelector("#input_name")
    const nombre = inputNombre.value;

    alumnos.push(nombre)
    inputNombre.value = ''
    const resultado = document.querySelector(".resultado");
    
    console.log(resultado)
    resultado.innerHTML = ''
    for(let alumno of alumnos){
        resultado.innerHTML += `<p>${alumno}</p>`
    }
}


function varificarPromedio(){
    const inp1 = Number(document.querySelector("#input_name1").value)
    const inp2 = Number(document.querySelector("#input_name2").value)
    const inp4 = Number(document.querySelector("#input_name4").value)
    const inp3 = Number(document.querySelector("#input_name3").value)
    // inputNombre1(dividir())
    if (isNaN(inp1)) {return alert('solo numeros')}
    if (isNaN(inp2)) {return alert('solo numeros')}
    if (isNaN(inp3)) {return alert('solo numeros')}
    if (isNaN(inp4)) {return alert('solo numeros')}
    dividir(inp1,inp2,inp3,inp4);
}
const inprimirPromedio = (numero)=>{
    const resultado2 = document.querySelector(".resultado2");
    resultado2.innerHTML = `<p>El promedio es de: ${numero}</p>`

}
const dividir = (a,b,c,d)=>{
    let operacion = (a+b+c+d)/4
    inprimirPromedio(operacion)
    // alert(operacion)
}