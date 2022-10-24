let cards = [
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot',
];
let selectedCards = [];
let firstCard = '';
let secondCard = '';
let NumberOfMoves = 0;

const cardField = document.querySelector('.cardField');
let cardQuantity = Number(prompt("Digite o número de cartas do jogo:"));

while(cardQuantity%2 !== 0 || (cardQuantity < 4)||(cardQuantity > 14)){
    cardQuantity = Number(prompt("Digite o número de cartas do jogo:"));  
}

function createCardElement(tag, className){
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

function shuffle(){
    return Math.random() - 0.5;
}

const shuffledCards = cards.sort(shuffle);

function shuffleParrotDeck(cardQuantity){
    for(let i = 0; i < cardQuantity/2; i++){
        selectedCards.push(shuffledCards[i]);
        selectedCards.push(shuffledCards[i]);
    }
    return selectedCards;
}

shuffleParrotDeck(cardQuantity);

function createCard(parrotImage){

    const card = createCardElement('figure', 'classFigure');
    const faceFront = createCardElement('ul', 'face front');
    const faceBack = createCardElement('ul', 'face back')
    
    faceFront.style.backgroundImage = `url('./bib/${parrotImage}.gif')`

    card.appendChild(faceFront);
    card.appendChild(faceBack);
    cardField.appendChild(card);

    card.addEventListener('click', flipCard);
    card.setAttribute('data-parrotGif', parrotImage)

    return card;
}

function endGame(){
    let flippedCards = document.querySelectorAll('.flipCard');
    if(flippedCards.length == cardQuantity){
        alert(`Você ganhou com ${NumberOfMoves} jogadas!`);
    }
}

function isEqual(){
    let firstParrot = firstCard.getAttribute('data-parrotGif');
    let secondParrot = secondCard.getAttribute('data-parrotGif');

    if(firstParrot == secondParrot){
        firstCard = '';
        secondCard = '';
        setTimeout(endGame, 1200);
    }else{
        setTimeout(() => {
            firstCard.classList.remove('flipCard');
            secondCard.classList.remove('flipCard');
            firstCard = '';
            secondCard = '';
        }, 1000);
    }
}

function flipCard({target}){
    if(target.parentNode.className.includes('flipCard')){
        return;
    }
    if(firstCard == ''){
        target.parentNode.classList.add('flipCard');
        firstCard = target.parentNode;
        NumberOfMoves++;
    }else if(secondCard == ''){
        target.parentNode.classList.add('flipCard');
        secondCard = target.parentNode;
        NumberOfMoves++;
    }
    isEqual();
}


function loadGame(){
    selectedCards.sort(shuffle);
    selectedCards.forEach((parrotImage) => {
        const card = createCard(parrotImage);
        cardField.appendChild(card);
    });
}

loadGame();