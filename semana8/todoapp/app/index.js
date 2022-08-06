const linkTasks = "http://localhost:3000/tasks"
const btn_get = document.getElementById("btn-get");
const btn_fetch = document.getElementById('btn-fetch');
const list_container = document.getElementById('list-container')
const input_task = document.getElementById('input-task')


export default input_task.value

async function traerApi(){
    try{
        let arraytasks = []
        const response = await fetch(linkTasks);
        const {tasks} = await response.json();
        // const ids = tasks.map(task => task.id)
        // console.log(ids)
        // console.log(tasks)
        tasks.forEach(task => {
            arraytasks.push(task)
        })
        console.log(arraytasks)
        imprimirLista(arraytasks)
    } catch(error){
        return error;
    }
}
btn_get.addEventListener('click', traerApi)


function imprimirLista (arrayTask){
    // traerApi()
    list_container.innerHTML = ''
    arrayTask.forEach(task => {
        
        console.log(task)
        function putDisabled(){
            if(task.status === 'delete'){
                return 'disabled'
            }
        }
        list_container.innerHTML += `
        <li class="list-group-item px-2 ${(task.status =='delete')? 'delete' : 'todo'}" id="${task.id}">
        <div class="d-flex">
            <div class="d-flex flex-grow-1 align-items-center">
                <input type="text" class="form-control" style="display:none;">
                <span class="px-3">${task.text}</span>
            </div>
            <div class="d-flex gap-2" >
                <button class="btn btn-outline-warning" onclick='editTask(this)' ${putDisabled()}>✏</button>
                <button class="btn btn-outline-warning" onclick='saveTask(this)' style="display:none;">📝</button>
                <button class="btn btn-outline-danger" onclick='deleteTask(this)' ${putDisabled()}>❌</button>
                </div>
            </div>
        </li>
        `
    })
    

}


//! funcion que ejecuta el fetch hacia el servidor
btn_fetch.addEventListener('click', async (e) => {
    try{
        await fetch('http://localhost:3000/fetch' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                task_text: input_task.value
            })
        })
        
        traerApi()
    } catch(error){
        return error;
    }
})



// function traerApi () {
//     (fetch('http://localhost:3000/tasks')

// }
// traerApi()


