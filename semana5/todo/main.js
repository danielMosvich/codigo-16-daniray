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
    arrayTask.push(task)
    document.querySelector('.form').after(task.createElement())
    inputTask.value = ''
    inputTask.focus()
}
// function checkTask(checkbox) {
// if (checkbox.checked) {
    //     parentTask(checkbox).done();
    //     checkbox.setAttribute("disabled", true);
    //     }
    // }
    // function deleteTask(a) {
// parentTask(a).delete();
// }
// function parentTask(element) {
// return arrayTasks.find((task) => task.id == element.parentElement.id);
// }
function checkTask(checkbox){
    if (checkbox.checked){
        const task_id = checkbox.parentElement.parentElement.id
        const task = arrayTask.find(task => task.id === task_id)
        task.done()
        checkbox.setAttribute('disabled',true)
    }
}

function deleteTask(a){
    const task_id = a.parentElement.parentElement.id
    const task = arrayTask.find(task => task.id === task_id)
    task.delete()
}
function updateTask(a){
    const newText = prompt('ingrese nuevo valor')
    const task_id = a.parentElement.parentElement.id
    const task = arrayTask.find(task => task.id === task_id)
    task.update(newText)
}

const chxTaskDone = document.querySelector('#chx_task_done')
const chxTaskDelete = document.querySelector('#chx_task_delete')
const chxTaskTodo = document.querySelector('#chx_task_todo')

chxTaskDone.onchange = function(){
    showOrHideElement(this.checked,'.todo','.delete')
}
chxTaskDelete.onchange = function(){
    showOrHideElement(this.checked,'.todo','.done')
}
chxTaskTodo.onchange = function(){
    showOrHideElement(this.checked,'.delete','.done')
}

function showOrHideElement(checked,typeOne,typeTwo){
    const elementOne = document.querySelectorAll(typeOne);
    const elementTwo = document.querySelectorAll(typeTwo);
    if(checked){
        elementOne.forEach((todo) => (todo.style.display = "none"))
        elementTwo.forEach((task) => (task.style.display = "none"))
    } else{
        elementOne.forEach((todo) => (todo.style.display = "flex"))
        elementTwo.forEach((task) => (task.style.display = "flex"))
    }
} 
