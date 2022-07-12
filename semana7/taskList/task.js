let arrayTask = JSON.parse(localStorage.getItem('task')) || []
function storeTask(text){
    const task = {
        id: arrayTask.length + 1,
        text,
        status: 'todo',
        created_at: new Date()
    }
    arrayTask.push(task)

    saveInLocalStorage()
    return task
}
function updateTask(id,key,value){
    const task = arrayTask.find(task => task.id === id)
    task[key] = value
    // console.log(arrayTask)
    saveInLocalStorage()
}

function saveInLocalStorage(){
    localStorage.setItem('task', JSON.stringify(arrayTask))
}

