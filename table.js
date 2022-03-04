// game play
console.log("Hello Oa");
// testing js file's connection to HTML page
console.log("-------------------------------------------------");
console.log("----------------------------------------------");

// making deck of cards array

const diamonds = [
  {
    name: "2 of Diamonds",
    value: 2,
    frontImg: "",
    backImg: ""
  },
  {
    name: "3 of Diamonds",
    value: 3,
    frontImg: "",
    backImg: ""
  },
  {
    name: "4 of Diamonds",
    value: 4,
    frontImg: "",
    backImg: ""
  },
  {
    name: "5 of Diamonds",
    value: 5,
    frontImg: "",
    backImg: ""
  },
  {
    name: "6 of Diamonds",
    value: 6,
    frontImg: "",
    backImg: ""
  },
  {
    name: "7 of Diamonds",
    value: 7,
    frontImg: "",
    backImg: ""
  },
  {
    name: "8 of Diamonds",
    value: 8,
    frontImg: "",
    backImg: ""
  },
  {
    name: "9 of Diamonds",
    value: 9,
    frontImg: "",
    backImg: ""
  },
  {
    name: "10 of Diamonds",
    value: 10,
    frontImg: "",
    backImg: ""
  },
  {
    name: "Jack of Diamonds",
    value: 10,
    frontImg: "",
    backImg: ""
  },
  {
    name: "Queen of Diamonds",
    value: 10,
    frontImg: "",
    backImg: ""
  },
  {
    name: "King of Diamonds",
    value: 10,
    frontImg: "",
    backImg: ""
  },
  {
    name: "Ace of Diamonds",
    value: "",
    frontImg: "",
    backImg: ""
  }
];

const clubs = [
  {
    name: "2 of Clubs",
    value: 2,
    frontImg: "",
    backImg: ""
  },
  {
    name: "3 of Clubs",
    value: 3,
    frontImg: "",
    backImg: ""
  },
  {
    name: "4 of Clubs",
    value: 4,
    frontImg: "",
    backImg: ""
  },
  {
    name: "5 of Clubs",
    value: 5,
    frontImg: "",
    backImg: ""
  },
  {
    name: "6 of Clubs",
    value: 6,
    frontImg: "",
    backImg: ""
  },
  {
    name: "7 of Clubs",
    value: 7,
    frontImg: "",
    backImg: ""
  },
  {
    name: "8 of Clubs",
    value: 8,
    frontImg: "",
    backImg: ""
  },
  {
    name: "9 of Clubs",
    value: 9,
    frontImg: "",
    backImg: ""
  },
  {
    name: "10 of Clubs",
    value: 10,
    frontImg: "",
    backImg: ""
  },
  {
    name: "Jack of Clubs",
    value: 10,
    frontImg: "",
    backImg: ""
  },
  {
    name: "Queen of Clubs",
    value: 10,
    frontImg: "",
    backImg: ""
  },
  {
    name: "King of Clubs",
    value: 10,
    frontImg: "",
    backImg: ""
  },
  {
    name: "Ace of Clubs",
    value: "",
    frontImg: "",
    backImg: ""
  }
];

const hearts = [
  {
    name: "2 of Hearts",
    value: 2,
    frontImg: "",
    backImg: ""
  },
  {
    name: "3 of Hearts",
    value: 3,
    frontImg: "",
    backImg: ""
  },
  {
    name: "4 of Hearts",
    value: 4,
    frontImg: "",
    backImg: ""
  },
  {
    name: "5 of Hearts",
    value: 5,
    frontImg: "",
    backImg: ""
  },
  {
    name: "6 of Hearts",
    value: 6,
    frontImg: "",
    backImg: ""
  },
  {
    name: "7 of Hearts",
    value: 7,
    frontImg: "",
    backImg: ""
  },
  {
    name: "8 of Hearts",
    value: 8,
    frontImg: "",
    backImg: ""
  },
  {
    name: "9 of Hearts",
    value: 9,
    frontImg: "",
    backImg: ""
  },
  {
    name: "10 of Hearts",
    value: 10,
    fromtImg: "",
    backImg: ""
  },
  {
    name: "Jack of Hearts",
    value: 10,
    frontImg: "",
    backImg: ""
  },
  {
    name: "Queen of Hearts",
    value: 10,
    frontImg: "",
    backImg: ""
  },
  {
    name: "King of Hearts",
    value: 10,
    frontImg: "",
    backImg: ""
  },
  {
    name: "Ace of Hearts",
    value: "",
    frontImg: "",
    backImg: ""
  }
];

const spades = [
  {
    name: "2 of Spades",
    value: 2,
    frontImg: "",
    backImg: ""
  },
  {
    name: "3 of Spades",
    value: 3,
    frontImg: "",
    backImg: ""
  },
  {
    name: "4 of Spades",
    value: 4,
    frontImg: "",
    backImg: ""
  },
  {
    name: "5 of Spades",
    value: 5,
    frontImg: "",
    backImg: ""
  },
  {
    name: "6 of Spades",
    value: 6,
    frontImg: "",
    backImg: ""
  },
  {
    name: "7 of Spades",
    value: 7,
    frontImg: "",
    backImg: ""
  },
  {
    name: "8 of Spades",
    value: 8,
    frontImg: "",
    backImg: ""
  },
  {
    name: "9 of Spades",
    value: 9,
    frontImg: "",
    backImg: ""
  },
  {
    name: "10 of Spades",
    value: 10,
    frontImg: "",
    backImg: ""
  },
  {
    name: "Jack of Spades",
    value: 10,
    frontImg: "",
    backImg: ""
  },
  {
    name: "Queen of Spades",
    value: 10,
    frontImg: "",
    backImg: ""
  },
  {
    name: "King of Spades",
    value: 10,
    frontImg: "",
    backImg: ""
  },
  {
    name: "Ace of Spades",
    value: 10,
    frontImg: "",
    backImg: ""
  }
];

const fullDeck = [...diamonds, ...clubs, ...hearts, ...spades];

console.log(fullDeck);

// Function to Shuffle Deck

let shuffleDeck = array => {
  let temp = 0;
  let i = 0;
  let j = 0;

  for (; i < array.length; i++) {
    j = Math.floor(Math.random() * array.length);
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

let shuffledDeck2 = shuffleDeck(fullDeck);

console.log(shuffledDeck2);

console.log("---------------------------------------------------");
console.log("------------------------------------------------");

// Grabbing and Creating HTML Elements

// elements and variables in welcome div
const welcomeDiv = document.getElementById("welcome-div");

const welcomeDivHeader = document.getElementById("welcome-div-header");

const startGameBtn = document.getElementById("start-game-btn");

// elements and variables in betting div
const bettingDiv = document.getElementById("betting-div");

const moneyBetHeader = document.createElement("h2");
moneyBetHeader.id = "money-bet-header";
moneyBetHeader.innerHTML = "How Much Do You Want To Bet?";

const moneyBetMsg = document.createElement("div");
moneyBetMsg.className = "msg";
moneyBetMsg.id = "money-bet-msg";

const moneyBetLabel = document.createElement("label");
moneyBetLabel.id = "money-bet-label";
moneyBetLabel.innerHTML = "Money Bet:";

const moneyBetInput = document.createElement("input");
moneyBetInput.id = "money-bet-input";
moneyBetInput.placeholder = "Money Bet...";

const moneyBetBtn = document.createElement("button");
moneyBetBtn.id = "money-bet-btn";
moneyBetBtn.innerHTML = "Submit Your Bet";
moneyBetBtn.className = "btn btn-dark";

let moneyBet = 0;

// elements and variables in gameplay div
const gamePlayDiv = document.getElementById("game-play-div");

const gamePlayHeader = document.createElement("h2");
gamePlayHeader.id = "game-play-header";
gamePlayHeader.innerHTML = "Let's Play Blackjack!";

const gamePlayBetHeader = document.createElement("h3");
gamePlayBetHeader.id = "game-play-bet-header";

const gamePlayBtn = document.createElement("button");
gamePlayBtn.id = "game-play-btn";
gamePlayBtn.innerHTML = "Start Playing";
gamePlayBtn.className = "btn btn-dark";

const dealerDiv = document.getElementById("dealer-div");

const dealerImgList = document.getElementById("dealer-img-list");

let dealerCount = 0;

let dealerFirstCard = 0;

let dealerTurn = 0;

let dealerCards = [];

const playerDiv = document.getElementById("player-div");

const playerImgList = document.getElementById("player-img-list");

let playerCount = 0;

let playerFirstCard = 0;

let playerTurn = 0;

let playerCards = [];

//.............................................................
//.......................................................

// eventListener for startGameBtn
startGameBtn.addEventListener("click", () => {
  // remove elements from welcomeDiv
  welcomeDiv.remove(welcomeDivHeader);
  welcomeDiv.remove(startGameBtn);
  // append elements to bettingDiv
  bettingDiv.append(moneyBetHeader);
  bettingDiv.append(moneyBetMsg);
  bettingDiv.append(moneyBetLabel);
  bettingDiv.append(moneyBetInput);
  bettingDiv.append(moneyBetBtn);
});

// eventListener for moneyBetBtn
moneyBetBtn.addEventListener("click", e => {
  e.preventDefault();
  console.log("button clicked");
  if (moneyBetInput.value.trim() == "") {
    moneyBetMsg.innerHTML = "Please Enter Amount";
  }
  if (isNaN(moneyBetInput.value) == true) {
    moneyBetMsg.innerHTML = "Input Must Be A  Number";
  } else {
    moneyBet = parseFloat(moneyBetInput.value);
    bettingDiv.remove(moneyBetHeader);
    bettingDiv.remove(moneyBetMsg);
    bettingDiv.remove(moneyBetLabel);
    bettingDiv.remove(moneyBetInput);
    bettingDiv.remove(moneyBetBtn);
    //---------------------------------------
    gamePlayDiv.append(gamePlayHeader);
    gamePlayDiv.append(gamePlayBetHeader);
    gamePlayBetHeader.innerHTML = `Money Bet: ${moneyBet}`;
    gamePlayDiv.append(gamePlayBtn);
  }
  //------------------------------------------

  //-------------------------------------
  moneyBetInput.value = "";
});

// eventListener
gamePlayBtn.addEventListener("click", () => {
  console.log("button clicked");
});
