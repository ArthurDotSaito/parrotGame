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
    const faceFrontFigure = createCardElement('div', 'frontBoxFigure');
    const faceBack = createCardElement('ul', 'face back')
    const faceBackFigure = createCardElement('div', 'backBoxFigure');
    
    faceFrontFigure.style.backgroundImage = `url('./bib/${parrotImage}.gif')`

    card.appendChild(faceFront);
    faceFront.appendChild(faceFrontFigure);
    card.appendChild(faceBack);
    faceBack.appendChild(faceBackFigure);
    cardField.appendChild(card);

    return card;
}

function loadGame(){
    selectedCards.sort(shuffle);
    selectedCards.forEach((parrotImage) => {
        const card = createCard(parrotImage);
        cardField.appendChild(card);
    });
}

loadGame();