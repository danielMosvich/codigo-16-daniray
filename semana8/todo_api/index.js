//importar express
import express from 'express';

const app = express();

//creamos una ruta 
//youtube.com < = si no tiene nada es por que la ruta es "/" la raiz
//facebook.com/home < = en este caso la raiz es home

//* request (req) => es la informacion que vamos a recibir de quien haga la peticion
//* response (res) => es la informacion que vamos a enviar a quien haga la peticion

//! creamos un arreglo que contenga las tareas

//de esta forma hacemos que node reconozca lo que el cliente envia
app.use(express.json());

const todoListArray = []

app.get("/", (req, res) =>{
//respondemos cuando el usuario entre a la raiz esta de como respuesta un json

    res.json({
        total: todoListArray.length,
        tasks: todoListArray,
    })
})
app.post("/create-task",(req, res) =>{
    console.log(req.body)
    const task = req.body;
    task.createrd_at = new Date();
    task.id = todoListArray.length + 1;

    todoListArray.push(task)
    // req.body.text;
    res.json({
        task,
    })
})
app.put("/update-task/:id", (req, res) =>{
    const id = req.params.id;
    const data = req.body;
    let taskIndex = todoListArray.findIndex(todoTask => todoTask.id === Number(id));
    todoListArray[taskIndex] = {
        ...todoListArray[taskIndex],
        ...data,
    };
    return res .json({
        tarea: todoListArray[taskIndex],
    })
})
app.listen(6001,()=>{
    console.log("servidor corriendo en el puerto 6002")
})