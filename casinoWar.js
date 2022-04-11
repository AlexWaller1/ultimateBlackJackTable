console.log("Ultimate Casino War!");
// Ultimate Casino War!

console.log("---------------------------------");

// making deck of cards array

const diamonds = [
  {
    name: "2 of Diamonds",
    value: 2,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/154/484/large/alex-waller-2-of-diamonds.jpg?1646893207",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "3 of Diamonds",
    value: 3,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/154/505/large/alex-waller-3-of-diamonds.jpg?1646893293",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "4 of Diamonds",
    value: 4,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/154/548/large/alex-waller-4-of-diamonds.jpg?1646893399",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "5 of Diamonds",
    value: 5,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/154/719/large/alex-waller-5-of-diamonds.jpg?1646893906",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "6 of Diamonds",
    value: 6,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/154/775/large/alex-waller-6-of-diamonds.jpg?1646894158",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "7 of Diamonds",
    value: 7,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/034/large/alex-waller-7-of-diamonds.jpg?1646895029",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "8 of Diamonds",
    value: 8,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/155/079/large/alex-waller-8-of-diamonds.jpg?1646895297",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "9 of Diamonds",
    value: 9,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/155/121/large/alex-waller-9-of-diamonds.jpg?1646895409",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "10 of Diamonds",
    value: 10,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/142/large/alex-waller-10-of-diamonds.jpg?1646895474",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "Jack of Diamonds",
    value: 11,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/353/333/large/alex-waller-jackofdiamonds2.jpg?1647385084",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "Queen of Diamonds",
    value: 12,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/353/363/large/alex-waller-queenofdiamonds2.jpg?1647385132",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "King of Diamonds",
    value: 13,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/353/376/large/alex-waller-kingofdiamonds2.jpg?1647385182",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "Ace",
    value: 14,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/155/157/large/alex-waller-ace-of-diamonds.jpg?1646895544",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  }
];

const clubs = [
  {
    name: "2 of Clubs",
    value: 2,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/155/173/large/alex-waller-2-of-clubs.jpg?1646895652",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "3 of Clubs",
    value: 3,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/155/183/large/alex-waller-3-of-clubs.jpg?1646895714",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "4 of Clubs",
    value: 4,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/155/201/large/alex-waller-4-of-clubs.jpg?1646895773",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "5 of Clubs",
    value: 5,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/216/large/alex-waller-5-of-clubs.jpg?1646895825",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "6 of Clubs",
    value: 6,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/242/large/alex-waller-6-of-clubs.jpg?1646895870",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "7 of Clubs",
    value: 7,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/155/291/large/alex-waller-7-of-clubs.jpg?1646896010",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "8 of Clubs",
    value: 8,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/308/large/alex-waller-8-of-clubs.jpg?1646896052",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "9 of Clubs",
    value: 9,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/155/343/large/alex-waller-9-of-clubs.jpg?1646896130",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "10 of Clubs",
    value: 10,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/654/large/alex-waller-10-of-clubs.jpg?1646897253",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "Jack of Clubs",
    value: 11,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/353/254/large/alex-waller-jackofclubs2.jpg?1647384938",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "Queen of Clubs",
    value: 12,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/353/276/large/alex-waller-queenofclubs2.jpg?1647384984",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "King of Clubs",
    value: 13,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/353/290/large/alex-waller-kingofclubs2.jpg?1647385027",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "Ace",
    value: 14,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/662/large/alex-waller-ace-of-clubs.jpg?1646897292",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  }
];

const hearts = [
  {
    name: "2 of Hearts",
    value: 2,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/155/679/large/alex-waller-2-of-hearts.jpg?1646897367",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "3 of Hearts",
    value: 3,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/688/large/alex-waller-3-of-hearts.jpg?1646897410",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "4 of Hearts",
    value: 4,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/155/695/large/alex-waller-4-of-hearts.jpg?1646897448",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "5 of Hearts",
    value: 5,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/698/large/alex-waller-5-of-hearts.jpg?1646897501",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "6 of Hearts",
    value: 6,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/710/large/alex-waller-6-of-hearts.jpg?1646897546",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "7 of Hearts",
    value: 7,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/754/large/alex-waller-7-of-hearts.jpg?1646897756",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "8 of Hearts",
    value: 8,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/766/large/alex-waller-8-of-hearts.jpg?1646897792",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "9 of Hearts",
    value: 9,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/155/774/large/alex-waller-9-of-hearts.jpg?1646897828",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "10 of Hearts",
    value: 10,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/155/829/large/alex-waller-10-of-hearts.jpg?1646897953",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "Jack of Hearts",
    value: 11,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/353/511/large/alex-waller-jackofhearts2.jpg?1647385544",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "Queen of Hearts",
    value: 12,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/353/528/large/alex-waller-queenofhearts2.jpg?1647385600",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "King of Hearts",
    value: 13,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/353/537/large/alex-waller-kingofhearts2.jpg?1647385644",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "Ace",
    value: 14,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/155/847/large/alex-waller-ace-of-hearts.jpg?1646897987",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  }
];

const spades = [
  {
    name: "2 of Spades",
    value: 2,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/154/013/large/alex-waller-2-of-spades.jpg?1646891490",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "3 of Spades",
    value: 3,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/154/075/large/alex-waller-3-of-spades.jpg?1646891699",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "4 of Spades",
    value: 4,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/154/094/large/alex-waller-4-of-spades.jpg?1646891746",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "5 of Spades",
    value: 5,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/154/108/large/alex-waller-5-of-spades.jpg?1646891837",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "6 of Spades",
    value: 6,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/154/131/large/alex-waller-6-of-spades.jpg?1646891950",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "7 of Spades",
    value: 7,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/154/149/large/alex-waller-7-of-spades.jpg?1646892024",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "8 of Spades",
    value: 8,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/154/177/large/alex-waller-8-of-spades.jpg?1646892180",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "9 of Spades",
    value: 9,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/154/188/large/alex-waller-9-of-spades.jpg?1646892216",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "10 of Spades",
    value: 10,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/154/221/large/alex-waller-10-of-spades.jpg?1646892325",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "Jack of Spades",
    value: 11,
    frontImg:
      "https://cdna.artstation.com/p/assets/images/images/047/353/406/large/alex-waller-jackofspades2.jpg?1647385268",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "Queen of Spades",
    value: 12,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/353/457/large/alex-waller-queenofspades2.jpg?1647385424",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "King of Spades",
    value: 13,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/353/479/large/alex-waller-kingofspades2.jpg?1647385480",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  },
  {
    name: "Ace",
    value: 14,
    frontImg:
      "https://cdnb.artstation.com/p/assets/images/images/047/154/379/large/alex-waller-ace-of-spades.jpg?1646892835",
    backImg:
      "https://cdna.artstation.com/p/assets/images/images/047/152/782/large/alex-waller-cardback.jpg?1646886651"
  }
];

console.log("Deck of Cards");

console.log("---------------------------------");
console.log("----------------------------");

console.log("6 decks of cards");

const fullDeck1 = [...diamonds, ...clubs, ...hearts, ...spades];

console.log("fullDeck", fullDeck1);

const fullDeck2 = fullDeck1;

const fullDeck3 = fullDeck1;

const fullDeck4 = fullDeck1;

const fullDeck5 = fullDeck1;

const fullDeck6 = fullDeck1;

const wholeDeck = [
  ...fullDeck1,
  ...fullDeck2,
  ...fullDeck3,
  ...fullDeck4,
  ...fullDeck5,
  ...fullDeck6
];

console.log(52 * 6);
// 312
console.log(wholeDeck.length);
// 312
console.log("wholeDeck", wholeDeck);

console.log("-----------------------------");
console.log("------------------------------");

console.log("shuffling deck");

function shuffleWarDeck(array) {
  let temp = 0;
  let j = 0;
  let i = 0;

  for (; i < array.length; i++) {
    let j = Math.floor(Math.random() * array.length);
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const warGameDeck = shuffleWarDeck(wholeDeck);

console.log(warGameDeck);

console.log("---------------------------------");
console.log("-------------------------------");

console.log("organizing HTML elements");

// cwStartDiv elements

const cwStartDiv = document.getElementById("casino-war-start-div");

// Header for cwStartDiv
const cwStartHeader = document.createElement("h1");
cwStartHeader.id = "cw-start-header";
cwStartHeader.innerHTML = "Want to Play a Game of Casino War";

// Button for cwStartDiv
const cwStartBtn = document.createElement("button");
cwStartBtn.className = "btn btn-dark";
cwStartBtn.id = "cw-start-btn";
cwStartBtn.innerHTML = "Get Started";

//----------------------------------------------

// cwMoneyBetDiv elements

const cwMoneyBetDiv = document.getElementById("casino-war-money-bet-div");

let cwMoneyBet = 0;

// Header for cwMoneyBetDiv
const cwMoneyBetHeader = document.createElement("h1");
cwMoneyBetHeader.id = "cw-money-bet-header";
cwMoneyBetHeader.innerHTML = "How Much Money Would You Like to Bet?";

// MSG Div for cwMoneyBetDiv
const cwMoneyBetMsg = document.createElement("div");
cwMoneyBetMsg.className = "msg";
cwMoneyBetMsg.id = "cw-money-bet-msg";

// form for cwMoneyBetDiv
const cwMoneyBetForm = document.createElement("form");
cwMoneyBetForm.id = "cw-money-bet-form";

// label for cwMoneyBetForm
const cwMoneyBetFormLabel = document.createElement("label");
cwMoneyBetFormLabel.id = "cw-money-bet-form-label";
cwMoneyBetFormLabel.innerHTML = "Money Bet:";

// input for cwMoneyBetForm
const cwMoneyBetFormInput = document.createElement("input");
cwMoneyBetFormInput.id = "cw-money-bet-form-input";
cwMoneyBetFormInput.placeholder = "Money Bet...";

// button for cwMoneyBetForm
const cwMoneyBetFormBtn = document.createElement("button");
cwMoneyBetFormBtn.className = "btn btn-dark";
cwMoneyBetFormBtn.id = "cw-money-bet-form-btn";
cwMoneyBetFormBtn.innerHTML = "Place Your Bet";

// appending elements to cwMoneyBetForm

cwMoneyBetForm.appendChild(cwMoneyBetFormLabel);
cwMoneyBetForm.appendChild(cwMoneyBetFormInput);
cwMoneyBetForm.appendChild(cwMoneyBetFormBtn);

//-----------------------------------------------------

// cwStartGameDiv elements
const cwStartGameDiv = document.getElementById("casino-war-start-game-div");

const cwStartGameHeader = document.createElement("h1");
cwStartGameHeader.id = "cw-start-game-header";
cwStartGameHeader.innerHTML = "Ready to Start the Game?";

const cwStartGameBtn = document.createElement("button");
cwStartGameBtn.className = "btn btn-dark";
cwStartGameBtn.id = "cw-start-game-btn";
cwStartGameBtn.innerHTML = "start game";

const cwStartGameHeader2 = document.createElement("h1");
cwStartGameHeader2.id = "cw-start-game-header-2";
cwStartGameHeader2.innerHTML = "Let's Play Casino War!";

const cwStartGameHeader3 = document.createElement("h1");
cwStartGameHeader3.id = "cw-start-game-header-3";

//------------------------------------------------------

// cwDealerDiv elements

const cwDealerDiv = document.getElementById("casino-war-dealer-div");

const cwDealerImg = document.createElement("img");
cwDealerImg.className = "casino-war-img";

// cwDealerDiv2 elements

const cwDealerDiv2 = document.getElementById("casino-war-dealer-div-2");

const cwDealerImg2 = document.createElement("casino-war-img");
cwDealerImg.className = "casino-war-img";

// cwGamePlayDiv elements

const cwGamePlayDiv = document.getElementById("casino-war-gameplay-div");

// cwResultDiv elements

const cwResultDiv = document.getElementById("casino-war-result-div");

const cwResultHeader = document.createElement("h2");
cwResultHeader.id = "cw-result-header";

// cwPlayerDiv elements

const cwPlayerDiv = document.getElementById("casino-war-player-div");

const cwPlayerImg = document.createElement("img");
cwPlayerImg.className = "casino-war-img";

// cwPlayerDiv2 elements

const cwPlayerDiv2 = document.getElementById("casino-war-player-div-2");

const cwPlayImg2 = document.createElement("img");

cwPlayImg2.className = "casino-war-img";

//---------------------------------------------------------------

console.log("------------------------------------");
console.log("-------------------------------------");

// Gameplay functionality

// appending elements to cwStartDiv

cwStartDiv.appendChild(cwStartHeader);
cwStartDiv.appendChild(cwStartBtn);

cwStartBtn.addEventListener("click", () => {
  console.log("start button clicked");

  cwStartDiv.removeChild(cwStartHeader);
  cwStartDiv.removeChild(cwStartBtn);

  cwMoneyBetDiv.appendChild(cwMoneyBetHeader);
  cwMoneyBetDiv.appendChild(cwMoneyBetMsg);
  cwMoneyBetDiv.appendChild(cwMoneyBetForm);
});

//----------------------------------------------

// Functionality for Placing Bets

// eventListener for cwMoneyBetFormBtn
cwMoneyBetFormBtn.addEventListener("click", e => {
  e.preventDefault();

  if (
    cwMoneyBetFormInput.value.trim() === "" ||
    isNaN(parseFloat(cwMoneyBetFormInput.value))
  ) {
    console.log("Please Enter An Amount");
    cwMoneyBetMsg.innerHTML = "Please Enter a Proper Amount";
    cwMoneyBetFormInput.value = "";
  } else {
    cwMoneyBet = parseFloat(cwMoneyBetFormInput.value);
    console.log(`Money Bet $${cwMoneyBet}`);
    cwMoneyBetFormInput.value = "";
    cwMoneyBetDiv.removeChild(cwMoneyBetHeader);
    cwMoneyBetDiv.removeChild(cwMoneyBetMsg);
    cwMoneyBetDiv.removeChild(cwMoneyBetForm);

    cwStartGameDiv.appendChild(cwStartGameHeader);
    cwStartGameDiv.appendChild(cwStartGameBtn);
  }
});

// eventListener for cwStartGameBtn
cwStartGameBtn.addEventListener("click", () => {
  console.log("game started!");

  cwStartGameDiv.removeChild(cwStartGameHeader);
  cwStartGameDiv.removeChild(cwStartGameBtn);

  cwStartGameDiv.appendChild(cwStartGameHeader2);
  cwStartGameDiv.appendChild(cwStartGameHeader3);
  cwStartGameHeader3.innerHTML = `Money Bet: $${cwMoneyBet}`;
});
