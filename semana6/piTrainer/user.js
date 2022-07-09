class User {
    constructor(username){
        this.username = username
        this.games = []
    }
    gameover(){
        return new Date()
    }
}
const history_container = document.querySelector('#history')
//!arreglo de usuarios
let users = []
let userSearch = []
//!comprobar si 
// localStorage.setItem('pitrainer.users',JSON.stringify(users))
if(localStorage.getItem('pitrainer.users') !== null){
    users = JSON.parse(localStorage.getItem('pitrainer.users'))
}

function addUserToLocalStorage(user){
    users.push(user)
    localStorage.setItem('pitrainer.users', JSON.stringify(users))
    
}

function upDateUserDateLocalStorage (users){
    localStorage.removeItem('pitrainer.users')
    localStorage.setItem("pitrainer.users", JSON.stringify(users))
}

if(users.length !== 0){
    const div_history = document.querySelector('#history')
    div_history.style.display = 'block'
    createTableHistoric()
    btn_resetLeaderboard.disabled = false

}  
//console.log(users)

function createTableHistoric(){
    // const table_history = document.querySelector('#history > table')
    
    users.forEach(function(user){
        // const gameover_at = new Date(user.gameover_at)
        const h4 = document.createElement('h4')
        h4.innerHTML = user.username
        history_container.appendChild(h4)
        const table = document.createElement('table')
        const thead = document.createElement('thead')

        thead.innerHTML = `
           <tr>
             <th>Score</th>
             <th>Attempts</th>
             <th>✅ </th>
             <th>❌</th>
             <th>Game Over</th>
           </tr>
        
        `
        const tbody = document.createElement('tbody')
        user.games.forEach(game => {
            tbody.innerHTML += `
            <tr> 
                <td>${game.score.toFixed(2)}</td>
                <td>${game.attempts}</td>
                <td>${game.success_attempts}</td>
                <td>${game.failed_attempts}</td>
                <td>${new Date(game.gameover_at).toLocaleString("es-PE", {
                    weekday: "short",
                    year: "2-digit",
                    month: "short",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}</td>
            </tr>
            `
        })

        table.appendChild(thead)
        table.appendChild(tbody)
        history_container.append(table)
        // const row = document.createElement("tr")
        // row.innerHTML = `
        // <td>${user.username}</td>
        // <td>${user.score.toFixed(2)}</td>
        // <td>${user.success_attempts}</td>
        // <td>${gameover_at.toLocaleString()}</td>
        
        // `
        // table_history.appendChild(row)
    })
}
// in game over_at.toLocaleString() here we can use toLocalDateString() for more details about time data
