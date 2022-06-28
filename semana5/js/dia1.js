const users = [
    {
    name: 'Daniel',
    lastName: 'Reyes',
    phoneNumber:'995949587',
    address: 'undefinded'
    },
    {
        name: 'XD',
        lastName: 'Reyes',
        phoneNumber:'995949587',
        address: 'undefinded'
    }
]

// console.log(user[0].name)
// for(user in users) {
//     console.log(users[user].name)
// }

for(let user of users){
    console.log(user.name)
}