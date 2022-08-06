// let mensajito = 'holita'
// import inputValu from './inputValu'
function editTask(element){
    const padre = element.parentElement.parentElement
    // console.log(abuelo)
    const hijoInput = padre.children[0].children[0]
    const hijoText = padre.children[0].children[1]
    hijoInput.style.display = 'block'
    hijoInput.focus()
    hijoInput.style.marginRight = '10px'
    hijoInput.style.paddingLeft = '15px'
    hijoText.style.display = 'none'
    hijoInput.value = hijoText.textContent

    const editSaveShow = padre.children[1].children[1]
    const editSaveDelete = padre.children[1].children[0]
    const editDisabled = padre.children[1].children[2]
    editDisabled.disabled = true
    editSaveDelete.style.display = 'none'
    editSaveShow.style.display = 'block'
}

function saveTask(element){
    const abueloID = element.parentElement.parentElement.parentElement.id
    // const abueloID = abuelo.id
    // console.log(abuelo)
    const padre = element.parentElement.parentElement.children[0].children[0]
    const span = element.parentElement.parentElement.children[0].children[1]
    const padreText = padre.value
    // const text = padre
    padre.style.display = 'none'
    span.style.display = 'block'
    span.innerHTML = padreText
    const deleteActive = element.parentElement.parentElement.children[1].children[2]
    const saveDisabled = element.parentElement.parentElement.children[1].children[1]
    const editTask = element.parentElement.parentElement.children[1].children[0]
    saveDisabled.style.display = 'none'
    editTask.style.display = 'block'
    deleteActive.disabled = false
    saveLocalHost(padreText, abueloID,'todo')
}

function deleteTask(element){
    const padre = element.parentElement.parentElement.children[0].children[1]
    const padreText = padre.value
    const abueloID = element.parentElement.parentElement.parentElement.id
    const padrexd = element.parentElement.parentElement.parentElement
    const hijos = padrexd.children[0].children[1]

    const hijo1 = hijos.children[0]
    const hijo2 = hijos.children[1]
    const hijo3 = hijos.children[2]
    
    hijo1.disabled = true
    hijo2.disabled = true
    hijo3.disabled = true
    padrexd.classList.add('delete')
    saveLocalHost(padreText,abueloID,'delete')
    // console.log(padrexd)
}
async function saveLocalHost (text, id, status){
    console.log(text)
    try{
        
        await fetch(`http://localhost:3000/editTask/${id}/${text}/${status}` , {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch(error){
        return error;
    }
}