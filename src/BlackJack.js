
// BlackJack variables

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'],
    values = ['Ace', 'King', 'Queen', 'Jack',
        'Ten', 'Nine', 'Eight', 'Seven', 'Six',
        'Five', 'Four', 'Three', 'Two'];

console.log(myName);
let myName = "jtonic";

let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

// BlackJack Dom elements
let textArea = document.getElementById("text-area");
let divInfo = document.getElementById('div-info');
let newGameButton = document.getElementById("new-game-button");
let hitButton = document.getElementById("hit-button");
let stayButton = document.getElementById("stay-button");
hitButton.style.display = 'none';
stayButton.style.display = 'none';

// dom events
newGameButton.addEventListener('click', function () {
    textArea.innerText = 'Game started';
    hitButton.style.display = 'block';
    stayButton.style.display = 'block';
    newGameButton.style.display = 'none';
    deck = createDeck();
    shuffleDeck(deck);
    let info = "";
    for (const card of deck) {
        info += `${getCardString(card)}\n`
    }
    divInfo.innerText = info;
});

hitButton.addEventListener('click', function () {
    throw('Not implemented!!!');
});

stayButton.addEventListener('click', function () {
    throw('Not implemented!!!');
});

/**
 * Create the deck of cards
 */
function createDeck() {
    let cards = [];
    for (let vIdx = 0; vIdx < values.length; vIdx++) {
        for (let sIdx = 0; sIdx < suits.length; sIdx++) {
            let card = {
                suit: suits[sIdx],
                value: values[vIdx]
            };
            cards.push(card);
        }
    }
    return cards;
}

function shuffleDeck(deck) {
    for (let cIdx = 0; cIdx < deck.length; cIdx++) {
        let tmp = deck[cIdx];
        let sIdx = Math.trunc(Math.random() * deck.length);
        deck[cIdx] = deck[sIdx];
        deck[sIdx] = tmp;
    }
}

/**
 * Human readable form a a card
 * @param card
 * @returns {string}
 */
function getCardString(card) {
    return `${card.value} of ${card.suit}`;
}

function getNextCard() {
    throw('Not implemented!!!');
}

function getCardNumericValue(card) {
    throw('Not implemented!!!');
}

function getScore(cardArray) {
    throw('Not implemented!!!');
}

function updateScores() {
    throw('Not implemented!!!');
}

function checkForEndOfGame() {
    throw('Not implemented!!!');
}

function showStatus() {
    throw('Not implemented!!!');
}
