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
// function deleteLoader(){
//     arrayTask.forEach(task => {
        
//     })
// }
$(function () {

    if(arrayTask.length > 0){
        arrayTask.forEach(task => {
            createInputTask(task.id, task.text,task.status)
            if(task.status === 'delete'){
            sectionTask.children('#'+task.id).children('button').hide()
            }
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
    const div_task = $(element).closest('.row')
    const id = div_task.data('id')
    div_task.find('label').addClass('text-uppercase text-decoration-line-through')

    // const container = $(element).parent()
    // container.children('span').css({
    //     "text-decoration":"line-through",
    // })
    // container.children('button').hide()
    updateTask(id,'status','delete')
    console.log(div_task)
    // container.children('span').style.color = 'red'

}
//!edit task
function editTask(element){
    const div_task = $(element).closest('.row')
    const id = div_task.data('id')
    div_task.html(`
        <div class='col-6 col-sm-8 col-md-9'>

            <input class="form-control" type="text" placeholder="editar tarea..">

        </div>

        <div class='col-6 col-sm-4 col-md-3' >
            <button class="btn btn-dark" onclick="saveTask(this)">✅</button>
        </div>
    `)

    // const container = $(element).parent()
    // // container.focus()
    // const id = container.children("input").data("id")
    // container.children().hide()
    // container.append(`
    // <div class="container">
    // <input type="text" placeholder="editar tarea.."> <button onclick="saveTask(this,${id})">✅</button>
    // </div>
    // `)
    // //? focus al input creado
    // container.children().children("input").focus()
}

//!funtion save task
function saveTask(element){
    const div_task = $(element).closest('.row')
    const id = Number(div_task.attr('data-id'))
    const newText = div_task.find('input').val()
    updateTask(id,'text',newText)
    const task = arrayTask.find(task => task.id === id)
    div_task.html(`
    <div class='col-6 col-sm-8 col-md-9'>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="check_${id}">
                 <label class="form-check-label ${task.status}" for="check_${id}">
                 ${task.text}
                </label>
            </div>

        </div>

        <div class='col-6 col-sm-4 col-md-3' >
            <button class="btn btn-light" onclick="editTask(this)">✏️</button>
            <button class="btn btn-light">👁</button>
            <button class="btn btn-dark" onclick="deletetask(this)">❌</button>
        </div>
    `)

}
//!funcion de crear inputs
function createInputTask(id,text,status){
    $("<div class='row' data-id='"+id+"'>")
        // id,
        .html(
        `
        <div class='col-6 col-sm-8 col-md-9'>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="check_${id}">
                 <label class="form-check-label ${status}" for="check_${id}">
                 ${text}
                </label>
            </div>

        </div>

        <div class='col-6 col-sm-4 col-md-3' >
            <button class="btn btn-light" onclick="editTask(this)">✏️</button>
            <button class="btn btn-light">👁</button>
            <button class="btn btn-dark" onclick="deletetask(this)">❌</button>
        </div>
        `)
    
    .appendTo(sectionTask)
    // .hide()
    // .fadeIn(1000)
    // .class('row')

    // $("div").hover(
    //     function(){
    //     $(this).css("background-color", "#ddd")
    // },
    // function(){
    //     $(this).css("background-color", "transparent")
    // }
    // )
}
