const inputPassword = document.querySelector('#input-password')
const checkBoxShowPassword = document.querySelector('#checkbox-show')
const inputPasswordConfirm = document.querySelector('#input-password-confirm')
const textError = document.querySelector('#text-error')
const inputPhoneNumber = document.querySelector('#input-phone-number')
const inputEmail = document.querySelector('#input-email')
const emailError = document.querySelector('#email-error')

checkBoxShowPassword.onchange = function(){
    inputPassword.type = this.checked ? 'text' : 'password'
}

inputPasswordConfirm.onkeyup = function(){
    const password = inputPassword.value
    const confirmPassword = this.value
    if(inputPassword.value === ''){
        alert('debe de compretar el primer password')
        this.value = ''
        inputPassword.focus()
        return
    }
    if(password !== confirmPassword){
        textError.style.display = 'block'
    } else{
        textError.style.display = 'none'
    }
}
inputPhoneNumber.onkeyup = function(){
    const valor = this.value
    const caracteres = valor.split('')
    console.log(caracteres)
    let newValue = ''
    caracteres.forEach(caracter => {
        if(!isNaN(Number(caracter))){
            newValue += caracter
        }
    })
    this.value = newValue
}

inputEmail.onkeyup = function(){
    const value = this.value
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
    console.log(regex.test(value))
    regex.test(value) 
        ? emailError.style.display = 'none'
        : emailError.style.display = 'block'
    // if(regex.test(value)){
    //     console.log('im true')
    //     emailError.style.display = 'none'
    // } else {
    //     console.log('im false')
    //     emailError.style.display = 'block'
    // }
}