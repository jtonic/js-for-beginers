
function forf() {
  console.log("for");
  for (let i = 0; i <= 5; i++) {
    console.log(i);
  }
}

function whilef() {
  console.log("while");
  let count = 1;
  while (count <= 5) {
    console.log(count);
    count++;
  }
}

function deckOfCards() {

  let values = [
    "Ace", "King", "Queen", "Jack",
    "Ten", "Nine", "Eight", "Seven",
    "Six", "Five", "Four", "Three", "Two", "One"
  ];

  let ranks = ["Spades", "Hearts", "Diamonds", "Clubs"];

  let cards = [];

  for (let vi = 0; vi < values.length; vi++) {
    for (let ri = 0; ri < ranks.length; ri++) {
      const value = `${values[vi]} of ${ranks[ri]}`;
      cards.push(value);
    }
  }

  for (const card of cards) {
    console.log(card);
  }
}

forf();
// whilef();
// deckOfCards();
