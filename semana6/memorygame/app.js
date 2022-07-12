import { cardArray } from "./cards.js";


cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.src = './images/blank.png'
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        gridDisplay.appendChild(card)
    }

}


function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(cardsChosen.length > 2){
        alert('mas lento pendejo, de 1 en 1, ahora todo de nuevo! >:c')
        cardsChosen = []
        cardsChosenId = []
        for(let i = 0; i < cards.length; i++){
            cardsWon = []
            cards[i].setAttribute('src', './images/blank.png')
        }
        return
    }
    if (optionOneId === optionTwoId){
        cards[optionOneId].src = 'images/blank.png'
        cards[optionTwoId].src = 'images/blank.png'
        alert('no le des 2 veces a lo mismo, imbecil! me crees gil? ah?! dime pues, dime!!')
        // return
    } else if (cardsChosen[0] === cardsChosen[1]){
        alert('bien!')
        cards[optionOneId].src = './images/copa.jpg'
        cards[optionOneId].style.width = '100px'
        cards[optionTwoId].src = './images/copa.jpg'
        cards[optionTwoId].style.width = '100px'
        cards[optionOneId].removeEventListener('click', flipcard)
        cards[optionTwoId].removeEventListener('click', flipcard)
        cardsWon.push(cardsChosen)
    } else{
        cards[optionOneId].src = './images/blank.png'
        cards[optionTwoId].src = './images/blank.png'
        alert('intenta de nuevo xd')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'ganaste!'
        // window.location.href = "https://www.delftstack.com/howto/";
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