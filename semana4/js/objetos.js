const div_container = document.querySelector('.entrada_container');

class Carro{
    constructor(_color,_velocidad){
        this.color = _color
        this.velocidad = _velocidad
    }
    presentacion(){
        const texto = `soy carro de color:${this.color} y tengo una velocidad de ${this.velocidad}km/h`
        return texto
    }
}

function imprimirCarros(x,y){
    for(let i = 1; i <= x; i++) {
        const carro_1 = new Carro(y,i *parseInt(Math.random()*50))
        div_container.innerHTML += `<p><b>Carro N${i}</b> - ${carro_1.presentacion()}</p>`
        // document.write(carro_1.presentacion())
    }
    
}
imprimirCarros(8,'Rojo')
// alert(parseInt(Math.random()*100))

//set = modificar
//get = leer

class cuadrado{
    constructor(_lado){
        this.lado = _lado
    }
    area(){
        return `${this.lado * this.lado} m2`
    }

    getLado(){
        return this.lado;
    }
}

const c1 = new cuadrado(4)

alert(c1.area())