// document.querySelector
// jquery

/* $('element')
Ejemplo
 h1
 $('h1')
 div
 $('div')
 id="container"
 $('#container')
 class="input-nombre"
 $('.input-nombre')
*/

//* Nota: Esta funcion que empieza con $(function) se
//* ejecuta cuando la pagina web inicia
//* Esto es solo en JQUERY
// $(function () {
//     // el acceder de esta forma a los elementos nos da acceso a las funciones de jquery
//     $("h1").css("color", "red");
//     // multiples estilos
//     $("h1").css({
//       "background-color": "blue",
//       "font-size": "100px",
//       "font-family": "Helvetica",
//     });
//   });
  
  //* En JS puro IIFE

  // (function () {
      //   // hacemos algo
      // })();

//
//!variables
const inputTask = $("#input-task");
const btnTask = $("#btn-task");
const sectionTask = $("#section-task");
//!esto se ejecuta al cargar la pagina
$(function () {

    if(arrayTask.length > 0){
        arrayTask.forEach(task => {
            createInputTask(task.id, task.text,task.status)
        });
    }
})
//!al dar click s ejecuta la funcion
btnTask.click(function () {
    const text = inputTask.val();
    const task = storeTask(text);
    inputTask.val('')
    inputTask.focus()
    createInputTask(task.id,task.text,task.status)
})
//!funcion de borrar task
function deletetask(element){
    const container = $(element).parent()

    container.children('span').css({
        "text-decoration":"line-through",
    })
    const id = container.children("input").data("id")
    updateTask(id,'status','delete')
    // container.children('span').style.color = 'red'

}
//!edit task
function editTask(element){
    const container = $(element).parent()
    const id = container.children("input").data("id")
    container.children().hide()
    container.append(`
    <div>
    <input type="text" placeholder="editar tarea.."> <button onclick="saveTask(this,${id})">✅</button>
    </div>
    `)
}

//!funtion save task
function saveTask(element,id){
    const container = $(element).parent()
    const containerFather = $(element).parent().parent()
    const newText = container.children("input").val()
    updateTask(id,'text',newText)
    container.children().hide()
    containerFather.children().show()
    containerFather.children('span').text(newText)

}
//!funcion de crear inputs
function createInputTask(id,text,status){
    $("<div>",{
        id,
        html:
        `
            <input data-id="${id}" type="checkbox"><span class="${status}">${text}</span>
            <button onclick="editTask(this)">✏️</button>
            <button>👁</button>
            <button onclick="deletetask(this)">❌</button>
        `
    })
    .appendTo(sectionTask)
    .hide()
    .fadeIn(1000)

    $("div").hover(
        function(){
        $(this).css("background-color", "#ddd")
    },
    function(){
        $(this).css("background-color", "transparent")
    }
    )
}
