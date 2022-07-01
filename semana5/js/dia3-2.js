//obtener la hora de nuestro navegador
let fecha = new Date();
console.log(fecha)

let dia = fecha.getDate()
console.log('dia',dia)

let mes = fecha.getMonth() + 1
console.log('mes',mes)

let anio = fecha.getFullYear()
console.log('Year',anio)

let hora = fecha.getHours()
console.log('Hora',hora)

let minutos = fecha.getMinutes()
console.log('Minutos',minutos)

let segundos = fecha.getSeconds()
console.log('Segundos',segundos)

let milisegundo = fecha.getMilliseconds()
console.log('Miliseconds',milisegundo)

let diaGlobal = fecha.getUTCDate()
console.log('dia Global',diaGlobal)


console.log('type', typeof fecha)
const fechaString = String(fecha)
console.log('type', typeof fechaString)
console.log('fecha:',fechaString)

console.log('fecha con string: ', fechaString.split(' ')[5])
const pais = fechaString.split(' ')[9]

console.log(pais.replace(")",''))






