class Task{
    constructor(texto){
        this.id = '_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        this.text = texto
        this.status = 'todo'
        this.createdAt = new Date()
        // this.id = '_' + Math.random().toString(36).slice(2)
        this.done_at = null
        this.delete_at = null
    }
    done(){
        this.status = 'done'
        this.done_at = new Date()
        document.querySelector(`#${this.id}`).classList.add('done')
    }
    delete(){
        this.status = 'delete'
        this.delete_at = new Date()
        document.querySelector(`#${this.id}`).classList.add('delete')
    }
    createElement(){
        const element = document.createElement('p')
        element.setAttribute('id',this.id)
        element.setAttribute('class','task')
        element.innerHTML = `
            <input type="checkbox" onchange="checkTask(this)">
            <span>${this.text}</span>
            <a onclick="deleteTask(this)">❌</a>
        `
        return element;
    }
}

const listTask = document.getElementById('list')
const inputTask = document.getElementById('input-text')
inputTask.focus()
const arrayTask = []

function addTask(){
    if (inputTask.value === ''){
        alert('Ingrese un texto')
        inputTask.focus()
        return
    }
    const task = new Task(inputTask.value)
    // console.log(task)
    arrayTask.push(task)
    document.querySelector('.form').after(task.createElement())
    inputTask.value = ''
    inputTask.focus()
}

function checkTask(checkbox){
    if (checkbox.checked){
        const task_id = checkbox.parentElement.id
        // console.log(task_id)
        const task = arrayTask.find(task => task.id === task_id)
        task.done()
        checkbox.setAttribute('disabled',true)
    }
}
function deleteTask(a){
    const task_id = a.parentElement.id
    const task = arrayTask.find(task => task.id === task_id)
    task.delete()
}

inputTask.addEventListener('keyup',(enter)=>{
    if (enter.keyCode === 13){
        addTask()
    }
})

