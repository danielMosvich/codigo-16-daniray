const cardArray = [
    {
        name: 'fries',
        img:'./images/fries.png'
    },
    {
        name: 'cheeseburger',
        img:'./images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img:'./images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img:'./images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img:'./images/milkshake.png'
    },
    {
        name: 'pizza',
        img:'./images/pizza.png'
    },
    //double
    {
        name: 'fries',
        img:'./images/fries.png'
    },
    {
        name: 'cheeseburger',
        img:'./images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img:'./images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img:'./images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img:'./images/milkshake.png'
    },
    {
        name: 'pizza',
        img:'./images/pizza.png'
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let carsWon = []

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', './images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        gridDisplay.appendChild(card)
    }

}


function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (optionOneId === optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('no le des 2 veces a lo mismo, imbecil!')
        // return
    } else if (cardsChosen[0] === cardsChosen[1]){
        alert('chatch')
        cards[optionOneId].setAttribute('src', './images/white.png')
        cards[optionTwoId].setAttribute('src', './images/white.png')
        cards[optionOneId].removeEventListener('click', flipcard)
        cards[optionTwoId].removeEventListener('click', flipcard)
        carsWon.push(cardsChosen)
    } else{
        cards[optionOneId].setAttribute('src', './images/blank.png')
        cards[optionTwoId].setAttribute('src', './images/blank.png')
        alert('intenta de nuevo xd')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = carsWon.length
    if(carsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'ganaste!'
    }
    
}
function flipcard(){
    let cardId = this.getAttribute('data-id')
    this.setAttribute('src', cardArray[cardId].img)
    
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    
    if(cardsChosen.length === 2){
        setTimeout(checkMatch,500);
    }
}
createBoard()