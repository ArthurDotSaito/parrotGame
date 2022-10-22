let cards = [];
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


 function createCard(){
    const card = createCardElement('figure', 'classFigure');
    const faceFront = createCardElement('ul', 'face front');
    const faceFrontFigure = createCardElement('div', 'frontBoxFigure');
    const faceBack = createCardElement('ul', 'face back')
    const faceBackFigure = createCardElement('div', 'backBoxFigure');
    
    card.appendChild(faceFront);
    faceFront.appendChild(faceFrontFigure);
    card.appendChild(faceBack);
    faceBack.appendChild(faceBackFigure);
    cardField.appendChild(card);

    return card;
 }

//const teste = document.querySelector('.cardField');
//teste.innerHTML = `<ul>{}</ul>`;