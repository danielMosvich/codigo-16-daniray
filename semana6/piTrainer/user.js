class User {
    constructor(username){
        this.username = username
        this.created_at = new Date()

        this.attempts = 0
        this.success_attempts = 0
        this.failed_attempts = 0
        this.score = 0
        this.gameover_at = null
    }
    gameover(){
        this.gameover_at = new Date()
    }
}
//!arreglo de usuarios
let users = []
//!comprobar si 
// localStorage.setItem('pitrainer.users',JSON.stringify(users))
if(localStorage.getItem('pitrainer.users') !== null){
    users = JSON.parse(localStorage.getItem('pitrainer.users'))
}

function addUserToLocalStorage(user){
    users.push(user)
    localStorage.setItem('pitrainer.users', JSON.stringify(users))
    
}

if(users.length !== 0){
    const div_history = document.querySelector('#history')
    div_history.style.display = 'block'
    createTableHistoric()
    btn_resetLeaderboard.disabled = false

}  
//console.log(users)

function createTableHistoric(){
    const table_history = document.querySelector('#history > table')
    users.forEach(function(user){
        const gameover_at = new Date(user.gameover_at)
        const row = document.createElement("tr")
        row.innerHTML = `
        <td>${user.username}</td>
        <td>${user.score.toFixed(2)}</td>
        <td>${user.success_attempts}</td>
        <td>${gameover_at.toLocaleString()}</td>
        
        `
        table_history.appendChild(row)
    })
}
// in game over_at.toLocaleString() here we can use toLocalDateString() for more details about time data