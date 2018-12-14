let card = {
    suit: "Hearts",
    value: "Queen"
};


console.log(typeof (card));
console.log(card.value, card.suit);

function changeCard(card) {
    card.suite = "Clubs";
}
changeCard(card);
console.log(card.value, card.suit);

let cards = [
    {
        suit: "Clubs",
        value: "King"
    },
    {
        suit: "Hearts",
        value: "Queen"
    }
];

console.log(cards[0].suit);
// console.log(cards[2].suit);  // TypeError: Cannot read property 'suit' of undefined

console.log(Number.isNaN(0/0));
console.log(Number.isNaN(1/2));
console.log(Number.isFinite(1/2));
console.log(Number.isFinite(1/0));
console.log(Number.isFinite(-1/0));

let name = "Jtonic";
console.log(name.toUpperCase());
console.log(name.toLowerCase());

let now = new Date();
console.log(now);
console.log(now.toDateString());


function randomCardIndex() {
    return Math.trunc(Math.random() * 52);
}
console.log(randomCardIndex());
console.log(randomCardIndex());
