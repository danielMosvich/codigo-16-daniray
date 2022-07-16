// const barChart = document.getElementById('bar-chart').getContext('2d');
// const myChart = new Chart(barChart,{
//     type: 'doughnut',
//     data:{
//         // labels:['Enero', 'Febrero', 'Marzo', 'Abril'],
//         labels:['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
//         datasets:[
//             {
//             label:'Meses del anio',
//             data:[10,12,5,11,2,4,12,5,6,7,12,5],
//             backgroundColor:['#ff6420', '#20ffa0', '#009eff', '#de25ff'],
//             // borderColor:"#000",
//             borderColor:"#ddd",
//             borderWidth: 3
//             }
//         ],
//     },

// })
//!variables para el chart

const selectChart = document.querySelector('#select-chart')
const chartTaskReport = document.querySelector('#task-chart-report').getContext('2d');
let myChart = generateChart()
// selectChart.onclick = function(e){
//     alert('xd')
// }
//!genera el chart
function generateChart(type = 'doughnut'){
    return new Chart(chartTaskReport, {
        type,
        data:{
            labels:["todo","done","delete"],
            datasets:[
                {
                    label:"estado de tareas",
                    backgroundColor:['#009eff', '#60E99B', '#ff6674'],
                }
        ]
    }
})
}
//!se activa al hacer un cambio en el select el cual destruye el anterior y crea otro con el nuevo value.

selectChart.onchange = function(e){
    // updateCalcChart(e.target.value)
    myChart.destroy()
    // console.log(selectChart.target)
    myChart = generateChart(e.target.value)
    updateCalcChart()
}
//!actualiza los datos del chart, que por defecto lleva doughnut.
function updateCalcChart(type = "doughnut"){
    const countTODO = getCountTask('todo')
    const countDONE = getCountTask('done')
    const countDELETE = getCountTask('delete')
    myChart.type = type
    myChart.data.datasets[0].data = [countTODO, countDONE, countDELETE]
    myChart.update()
}

//! obtiene el numero de tareas para ponerlo en el chart
function getCountTask(status){
    const tasks = arrayTask.filter(task => task.status == status)
    return tasks.length
}
const btnExportChart = document.querySelector('#btn-export-chart')

//!al darle click al boton exporta grafico
btnExportChart.onclick = function(){
    const imgBase64 = myChart.toBase64Image()
    const a = document.createElement('a');
    a.href = imgBase64;
    a.download = `chart_${new Date().toLocaleString()}`
    document.body.appendChild(a);
    a.click()
    document.body.removeChild(a);

}

