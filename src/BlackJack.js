
function createDeck() {
    let values = [
        "Ace", "King", "Queen", "Jack",
        "Ten", "Nine", "Eight", "Seven",
        "Six", "Five", "Four", "Three", "Two", "One"
    ];

    let ranks = ["Spades", "Hearts", "Diamonds", "Clubs"];

    let cards = [];

    for (let vi = 0; vi < values.length; vi++) {
        for (let ri = 0; ri < ranks.length; ri++) {
            const card = {
                suit: ranks[ri],
                value: values[ri]
            };
            cards.push(card);
        }
    }
    return cards;
}

function cardToString(card) {
    return `${card.value} of ${card.suit}`;
}

function getNextCard(deck) {
    return deck.shift();
}

let cards = createDeck();
let playerCards = [getNextCard(cards), getNextCard(cards)];

console.log("Deck cards");
console.log("==========");
for (const card of cards) {
    console.log(cardToString(card));
}

console.log("=============");
console.log("Players cards");
console.log("=============");
for (const playerCard of playerCards) {
    console.log(cardToString(playerCard));
}
