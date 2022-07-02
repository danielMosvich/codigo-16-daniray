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
    changeStatus(status) {
        this.status = status;
    
        status === "delete"
            ? (this.deleted_at = new Date())
            : (this.done_at = new Date());
    
        const element = document.querySelector("#" + this.id);
        element.classList.add(status);
        element.classList.remove("todo");
    }
    
        done() {
        this.changeStatus("done");
    }
    
        delete() {
        this.changeStatus("delete");
    }
        update(newValue){
            // console.log(newValue);
            const element = document.querySelector(`#${this.id}`)
            // console.log(element)
            // console.log(newValue)
            element.children[0].children[1].textContent = newValue;
            

    }
    //?revisar -_ - 
    // done(){
    //     this.status = 'done'
    //     this.done_at = new Date()
    //     const element = document.querySelector(`#${this.id}`)
    //     element.classList.add('done')
    //     element.classList.remove('todo')
        
    // }
    // delete(){
    //     this.status = 'delete'
    //     this.delete_at = new Date()
    //     const element = document.querySelector(`#${this.id}`)
    //     element.classList.add('delete')
    //     element.classList.remove('todo')
    // }
    createElement(){
        const element = document.createElement('p')
        element.setAttribute('id',this.id)
        element.setAttribute('class','task todo')
        element.innerHTML = `
        <div>
            <input type="checkbox" onchange="checkTask(this)">
            <span>${this.text}</span>
        </div>
        <div>
            <a onclick="updateTask(this)">✏️</a>
            <a onclick="deleteTask(this)">❌</a>
        </div>
        `
        return element;
    }
}