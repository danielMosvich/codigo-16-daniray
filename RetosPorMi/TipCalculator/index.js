const billInput = document.querySelector('#bill-input')

const tip1 = document.querySelector('#tip1')
const tip2 = document.querySelector('#tip2')
const tip3 = document.querySelector('#tip3')
const tip4 = document.querySelector('#tip4')
const tip5 = document.querySelector('#tip5')

const customInput = document.querySelector('#custom-input')
//multiplicar el monto por el porcentaje y multiplicarlo por 100
const tip_amount = document.querySelector('#tip_amount')
const total_amount = document.querySelector('#total_amount')
const nop = document.querySelector('#nop')
const btnReset = document.querySelector('.display-btn')
// const reset = document.querySelector('#reset')
nop.onchange = function () {
    calcularTip(nop.value)
}

let tipPorcentaje = ''

tip1.onclick = function selectTip() {
    tip1.classList.toggle('active')
    if(tip1.classList == 'tip active') {
        tip2.classList.remove('active')
        tip3.classList.remove('active')
        tip4.classList.remove('active')
        tip5.classList.remove('active')
        customInput.value = ''
        tipPorcentaje = 5
    }
    else {
        tipPorcentaje = ''
    }
}
tip2.onclick = function selectTip() {
    tip2.classList.toggle('active')
    if(tip2.classList == 'tip active') {
        tip1.classList.remove('active')
        tip3.classList.remove('active')
        tip4.classList.remove('active')
        tip5.classList.remove('active')
        customInput.value = ''
        tipPorcentaje = 10
    }
    else {
        tipPorcentaje = ''
    }
}
tip3.onclick = function selectTip() {
    tip3.classList.toggle('active')
    if(tip3.classList == 'tip active') {
        tip1.classList.remove('active')
        tip2.classList.remove('active')
        tip4.classList.remove('active')
        tip5.classList.remove('active')
        customInput.value = ''

        tipPorcentaje = 15
    }
    else {
        tipPorcentaje = ''
    }
}
tip4.onclick = function selectTip() {
    tip4.classList.toggle('active')
    if(tip4.classList == 'tip active') {
        tip1.classList.remove('active')
        tip2.classList.remove('active')
        tip3.classList.remove('active')
        tip5.classList.remove('active')
        customInput.value = ''

        tipPorcentaje = 25
    }
    else {
        tipPorcentaje = ''
    }
}
tip5.onclick = function selectTip() {
    tip5.classList.toggle('active')
    if(tip5.classList == 'tip active') {
        tip1.classList.remove('active')
        tip2.classList.remove('active')
        tip3.classList.remove('active')
        tip4.classList.remove('active')
        customInput.value = ''

        tipPorcentaje = 50
    }
    else {
        tipPorcentaje = ''
    }
}
customInput.onchange = function selectTip() {
    // const custom = Number(customInput.value)
    console.log(Number(customInput.value))
    tipPorcentaje = ''
    tip1.classList.remove('active')
    tip2.classList.remove('active')
    tip3.classList.remove('active')
    tip4.classList.remove('active')
    tip5.classList.remove('active')
    tipPorcentaje =  Number(customInput.value)
}


function calcularTip(nop){
    if(nop == "" || nop == 0){
        alert('no pude pagar 0 personas')
        return
    }
    const bill = Number(billInput.value)
    if(bill == '' || bill == 0){
        alert('ingrese un monto')
        return
    }
    if(tipPorcentaje == 0 || tipPorcentaje == ''){
        alert('ingrese un porcentaje')
        return
    }
    const tip = Number(tipPorcentaje)
    imprimirTip(bill,tip,Number(nop))
}

function imprimirTip(bill,tip,nop){
    const tipAmount = ((bill*tip) /100) / nop
    const totalAmount = (bill / nop) + tipAmount

    const tipFixed = tipAmount.toFixed(2)
    const totalFixed = totalAmount.toFixed(2)
    tip_amount.innerHTML = `$${tipFixed}`
    total_amount.innerHTML = `$${totalFixed}`
    reset()
}

function reset(){
    if (tip_amount !== '' && tip_amount !== undefined){
        btnReset.classList.remove('inactive')
    }

    btnReset.onclick = function(){
        tip_amount.innerHTML = ''
        total_amount.innerHTML = ''
        billInput.value = ''
        customInput.value = ''
        nop.value = ''
        tip1.classList.remove('active')
        tip2.classList.remove('active')
        tip3.classList.remove('active')
        tip4.classList.remove('active')
        tip5.classList.remove('active')
        btnReset.classList.add('inactive')
    }
}
