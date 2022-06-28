function nombreFuntion (){
    const alumnos = ['pepe', 'maria', 'Juan', 'Luisa', 'Lex', 'Klark']
    for(let alumno of alumnos){
        console.log(alumno)
    }
}

// nombreFuntion()

function potenciaDeUnNumero (a, b){
    return Math.pow(a,b)
}

// console.log(potenciaDeUnNumero(5,2))

let num1 ='5'
let num2 = '5'
function suma (a, b) {
    const n1 = Number(a)
    const n2 = Number(b)

    if(isNaN(n1) || isNaN(n2)){
        return 'no se puede sumar';
    }
        return n1 + n2
}
// document.write(`${num1} + ${num2} = ${suma(num1, num2)}`)



//1.    Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla.

function promedio (a,b,c,d){
    return (a+b+c+d) / 4
}


//* funcion para un factorial 

function calcularFactorial (numero){
    if(isNaN(numero)) return 'solo numeros por favor'
    let resultado = 1
    for (let i = 1; i <= numero; i++){
        resultado *= i;
    }
    return resultado
}
// console.log(calcularFactorial(4));

function imprimirFactorial(){
    const valor = document.getElementById("input_numer").value;
    let resultado = calcularFactorial(valor);

    const container = document.querySelector(".container")
    container.innerHTML += `<p>Factorial de ${valor} es:${resultado}</p>`
}

// console.log(promedio(15,15,16,17))
// 2.    Registrar el ingreso de notas de 4 examenes y calcular el promedio de estos.

//* funcion de crear tablas de multiplicar;
function crearTabla(numero){
    const container = document.querySelector(".container2")
    container.innerHTML += `<h2>Tabla del: ${numero}</h2>`
    for(let i = 1; i <= 12; i++){
        container.innerHTML += `<p>${numero} x ${i} = ${numero * i}</p>`
    }
}

function llamarInput(){
    const valor = document.getElementById("tabla_input").value;
    if(isNaN(valor)){
        return alert('ingrese solo numeros')

    } else if (valor == 0){
        return alert('no puede multiplicar por 0')
    }
    crearTabla(valor)
}