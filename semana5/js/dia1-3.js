const alumnos = ['juan','pepe','Luis',' Maria'];


alumnos.forEach((value,index)=>{
    console.log(`index => ${index} value: ${value}`);
})

const carros = [
    {
        modelo:'nisan >n < ',
        precio:213
    },
    {
        modelo:'nisan uwu >n < ',
        precio:1123
    },
    {
        modelo:'nisan xdd >n < ',
        precio:10125
    },
    {
        modelo:'nisan nose >n < ',
        precio:103215
    }
]

carros.forEach((carro, index)=>{
    console.log(`${index}: ${carro.modelo}`);
})
