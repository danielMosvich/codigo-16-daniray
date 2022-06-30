const products = [
{
    name: "Laptop HP",
    price: 1300,
    brand: "HP",
},
{
    name: "Laptop Gamer",
    price: 2100,
    brand: "Lenovo",
},
{
    name: "Laptop Super Poderosa",
    price: 5300,
    brand: "Alien Ware",
},
{
    name: "Laptop/Tablet",
    price: 2400,
    brand: "ASUS",
},
];
// users.forEach(user)
// movies.forEach(movie)

// products.forEach((product, index) => {});

// * forEach

const productsIterForEach = products.forEach((product) => {
    // Recurden que product es cada elemento de mi array
    // console.log(product.name);
    return product.price - 100;
});

//* map
// queremos agregar un nuevo campo al array de objetos
// ese campo se llamara descuente que sera el precio - 100 soles

// En este caso estamos calculado el campo discount y lo estamos
// guardando en productsIterMap

// Los valores que esta capturando nuestro map los esta guardando en
// la varable productsIterMap y esto sera un arreglo de los
// resultados
const productsIterMap = products.map((product) => {
// 1200
// 2000
// 5200
// 2300
return product.price - 100;
});

// Resument: Siempre el map retorna un array de elementos

console.log("forEach", productsIterForEach);
console.log("map", productsIterMap);
  // Cuando decimos que forEach no retorna nada quiere decir que no se
  // puede guardar dentro de una variable

  
  
  // console.log(edadesAlCuadrado);
  
  
const edades = [20, 30, 40, 50, 60];
const nuevasEdades = []
edades.forEach(edad => {
    nuevasEdades.push(Math.pow(edad, 2));
})
console.log(nuevasEdades)

    //? esta es la forma rapida de hacerla con map ^^
    const edadesAlCuadrado = edades.map(edad => Math.pow(edad, 2));
    console.log(edadesAlCuadrado);


const clothes = [
    {
        brand: "Mango",
        type: "Shirt",
        price: 200,
        store: "Falabella",
        rating: 4.3,
        features: {
        color: "green",
        size: "small",
        },
    },
    {
        brand: "Zara",
        type: "Pants",
        price: 300,
        store: "Zara",
        rating: 3.9,
        features: {
        color: "black",
        size: 32,
        },
    },
    {
        brand: "Tommy",
        type: "T-shirt",
        price: 120,
        store: "Tommy",
        rating: 4.3,
        features: {
        color: "blue",
        size: "M",
        },
    },
];
//! pone un condicional para buscar un valor que lueg osera retornada
const filtro = clothes.filter(cloth => cloth.price > 150);
console.log(filtro);
//? filtro de dos condiciones

const filtro2 = clothes.filter(cloth => cloth.price > 150 && cloth.rating > 4);
console.log('filtro 2',filtro2);
//transformamos los valores del objeto a lowercase para buscar sin ser case sensitive
const filtroShirt = clothes.filter(cloth => cloth.type.toLocaleLowerCase().includes("shirt"));
console.log('productos shirts:',filtroShirt);

const number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const numerosMayores = number.filter(number => number > 30);
console.log("FILTER",numerosMayores);

//! find devuelve el primer numero que encuentre
const numerosMayoresFind = number.find(number => number > 30);
console.log('FIND',numerosMayoresFind);

const primeraRopa = clothes.find(cloth => cloth.brand.toLowerCase() === "zara");
console.log('FIND',primeraRopa);

const filtroIndice = clothes.findIndex(cloth => cloth.brand.toLowerCase() === "mango");
console.log('FIND INDEX',filtroIndice); 
