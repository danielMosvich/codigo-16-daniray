import express from 'express';
import cors from 'cors';
// import input_task from './app/index.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded());

const arrayTask = []

app.get('/tasks', (req, res) => {
    res.json({
        total: arrayTask.length,
        tasks: arrayTask,
    });
})

app.post('/task',(req,res)=>{
    console.log(req.body.task_text)
    const task = {
        id: arrayTask.length + 1,
        text: req.body.task_text,
        status: 'todo',
        created_at: new Date(),
    }
    arrayTask.push(task)
    
    res.json({
        message:'finaly'
    })
    console.log(arrayTask)
    
})
app.get('/fetch',(req,res)=>{
    res.json({
        message:'fetch'
    })
})
app.post('/fetch', (req,res) =>{
    const task = {
        id: arrayTask.length + 1,
        text: req.body.task_text,
        status: 'todo',
        created_at: new Date(),
    }
    arrayTask.push(task)
    res.json({
        message:'finaly'
    })
    console.log(arrayTask)
})

app.put('/editTask/:id/:textValue/:status',(req,res)=>{
    const id = req.params.id;
    const status = req.params.status;
    const textValue = req.params.textValue;
    let taskIndex = arrayTask.findIndex(todoTask => todoTask.id === Number(id));

    arrayTask[taskIndex] = {
        ...arrayTask[taskIndex],
        status: status,
        text: textValue,
    };

    res.json({
        total: arrayTask.length,
        tasks: arrayTask, 
    })
    console.log(arrayTask)
})

// app.post()

//!correr el servidor
app.listen(3000,()=>{
    console.log('servidor corriendo en el puerto 3000')
})