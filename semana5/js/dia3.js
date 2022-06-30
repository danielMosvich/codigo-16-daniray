//every and some son funciones de arreglos.
//every: recibe una funcion y una condicion, si todos los elementos cumplen la condicion, devuelve true, sino false.

const edades = [10, 20, 30, 40, 50, 60,]

const analitic = edades.every(edad => edad > 50)
const analitic2 = edades.every((edad)=>{return edad !== ''})
console.log(analitic)
console.log(analitic2)

const alumnos = [
    {
        nombre: 'Juan',
        edad: 20
    },
    {
        nombre: 'pepito',
        edad: 18
    },
    {
        nombre: 'zandra',
        edad: 19
    },
]

const alumnoVerification = alumnos.every(alumno => alumno.edad >= 18)
console.log(alumnoVerification)

console.log('===============SOME=================')

const precios = [10, 20, 30, 40, 50, 60,]

const precioVerification = precios.some(precio => precio % 2 === 0)
console.log(precioVerification)