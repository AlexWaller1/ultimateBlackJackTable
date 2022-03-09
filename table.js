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
    name: "Ace",
    value: 11,
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
    name: "Ace",
    value: 11,
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
    name: "Ace",
    value: 11,
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
    name: "Ace",
    value: 11,
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

let gameDeck = [];

// elements and variables in gamePlayHeadersDiv

const gamePlayHeadersDiv = document.getElementById("game-play-headers-div");

// elements and variables in dealerDiv

const dealerDiv = document.getElementById("dealer-div");

const dealerHandDiv = document.getElementById("dealer-hand-div");

const dealerImgList = document.getElementById("dealer-img-list");

const dealerCountHeader = document.createElement("h3");
dealerCountHeader.id = "dealer-count-header";

const dealerHandHeader = document.createElement("h3");
dealerHandHeader.id = "dealer-hand-header";
dealerHandHeader.innerHTML = "Dealer Hand:";

let dealerCount = 0;

let dealerFirstCard = 0;

let dealerTurn = 0;

let dealerCards = [];

// elements and variables in playerDiv

const playerDiv = document.getElementById("player-div");

const playerHandDiv = document.getElementById("player-hand-div");

const playerImgList = document.getElementById("player-img-list");

const playerHandHeader = document.createElement("h3");
playerHandHeader.id = "player-hand-header";
playerHandHeader.innerHTML = "Player Hand:";

let playerFirstCard = 0;

let playerTurn = 0;

let playerCards = [];

let playerValues = [];

// elements and variables in playerCountDiv

const playerCountDiv = document.getElementById("player-count-div");

const playerCountHeader = document.createElement("h3");
playerCountHeader.id = "player-count-header";

let playerCount = 0;

// elements and variables in hitHoldDiv

const hitHoldDiv = document.getElementById("hit-hold-div");

const hitHoldHeader = document.createElement("h3");
hitHoldHeader.id = "hit-hold-header";
hitHoldHeader.innerHTML = "HIT or HOLD";

const hitBtn = document.createElement("button");
hitBtn.id = "hit-btn";
hitBtn.className = "btn btn-dark";
hitBtn.innerHTML = "HIT";

const holdBtn = document.createElement("button");
holdBtn.id = "hold-btn";
holdBtn.className = "btn btn-dark";
holdBtn.innerHTML = "HOLD";

// elements and variables to deal with the ace
//-----------------------------------------------

const aceDiv = document.getElementById("ace-div");

const aceHeader = document.createElement("h2");
aceHeader.id = "ace-header";
aceHeader.innerHTML = "Do You Want Your First Ace to Equal 1 or 11?";

const oneBtn = document.createElement("button");
oneBtn.id = "one-btn";
oneBtn.className = "btn btn-dark";
oneBtn.innerHTML = "1";

const elevenBtn = document.createElement("button");
elevenBtn.id = "eleven-btn";
elevenBtn.className = "btn btn-dark";
elevenBtn.innerHTML = "11";

const aceHeader2 = document.createElement("h2");
aceHeader2.id = "ace-header-2";
aceHeader2.innerHTML = "Do You Want Your Second Ace to Equal 1 or 11?";

const oneBtn2 = document.createElement("button");
oneBtn2.id = "one-btn-2";
oneBtn2.className = "btn btn-dark";
oneBtn2.innerHTML = "1";

const elevenBtn2 = document.createElement("button");
elevenBtn2.id = "eleven-btn-2";
elevenBtn2.className = "btn btn-dark";
elevenBtn2.innerHTML = "11";

const aceHeader3 = document.createElement("h2");
aceHeader3.id = "ace-header-3";
aceHeader3.innerHTML = "Do You Want Your Third Ace to Equal 1 or 11?";

const oneBtn3 = document.createElement("button");
oneBtn3.id = "one-btn-3";
oneBtn3.className = "btn btn-dark";
oneBtn3.innerHTML = "1";

const elevenBtn3 = document.createElement("button");
elevenBtn3.id = "eleven-btn-3";
elevenBtn3.className = "btn btn-dark";
elevenBtn3.innerHTML = "11";

const aceHeader4 = document.createElement("h2");
aceHeader4.id = "ace-header-4";
aceHeader4.innerHTML = "Do You Want Your Fourth Ace to Equal 1 or 11?";

const oneBtn4 = document.createElement("button");
oneBtn4.id = "one-btn-4";
oneBtn4.className = "btn btn-dark";
oneBtn4.innerHTML = "1";

const elevenBtn4 = document.createElement("button");
elevenBtn4.id = "eleven-btn-4";
elevenBtn4.className = "btn btn-dark";
elevenBtn4.innerHTML = "11";

let aceValue = 0;

let firstAceIndex = 0;

let secondAceIndex = 0;

let thirdAceIndex = 0;

let fourthAceIndex = 0;

let aceCount = 0;

let aceArray = ["first", "second", "third", "fourth"];

//----------------------------------------------------

// elements and variables for winning hands

const winningDiv = document.getElementById("winning-div");

const winningDivHeader1 = document.createElement("h3");
winningDivHeader1.id = "winning-div-header-1";

const winningDivHeader2 = document.createElement("h3");
winningDivHeader2.id = "winning-div-header-2";

// elements and variables for losing hands

const losingDiv = document.getElementById("losing-div");

const losingDivHeader = document.createElement("h3");

// elements and variables for a draw

const drawDiv = document.getElementById("draw-div");

const drawDivHeader = document.createElement("h3");

// elements and variables for finishing games

const finishGameBtn = document.createElement("button");
finishGameBtn.id = "finish-game-btn";
finishGameBtn.className = "btn btn-dark";
finishGameBtn.innerHTML = "Finish Game";

//.............................................................
//.......................................................

// eventListener for startGameBtn
startGameBtn.addEventListener("click", () => {
  // remove elements from welcomeDiv
  welcomeDiv.removeChild(welcomeDivHeader);
  welcomeDiv.removeChild(startGameBtn);
  // append elements to bettingDiv
  bettingDiv.appendChild(moneyBetHeader);
  bettingDiv.appendChild(moneyBetMsg);
  bettingDiv.appendChild(moneyBetLabel);
  bettingDiv.appendChild(moneyBetInput);
  bettingDiv.appendChild(moneyBetBtn);
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
    bettingDiv.removeChild(moneyBetHeader);
    bettingDiv.removeChild(moneyBetMsg);
    bettingDiv.removeChild(moneyBetLabel);
    bettingDiv.removeChild(moneyBetInput);
    bettingDiv.removeChild(moneyBetBtn);
    //---------------------------------------
    gamePlayHeadersDiv.appendChild(gamePlayHeader);
    gamePlayHeadersDiv.appendChild(gamePlayBetHeader);
    gamePlayBetHeader.innerHTML = `Money Bet: ${moneyBet}`;
    gamePlayHeadersDiv.appendChild(gamePlayBtn);
  }
  //------------------------------------------

  //-------------------------------------
  moneyBetInput.value = "";
});

//-----------------------------------------------
//-------------------------------------------------

// eventListener
gamePlayBtn.addEventListener("click", () => {
  console.log("button clicked");

  gameDeck = shuffleDeck(fullDeck);

  let i = 0;

  for (; i < 4; i++) {
    if (i % 2 == 0) {
      playerHandDiv.appendChild(playerHandHeader);
      let playerCardHeader = document.createElement("h3");
      playerCardHeader.className = "player-card-header";
      playerCardHeader.innerHTML = `${gameDeck[i].name}`;
      playerImgList.appendChild(playerCardHeader);
      playerCount = playerCount + gameDeck[i].value;
      playerCards.push(gameDeck[i].name);
      playerValues.push(gameDeck[i].value);
      gameDeck.splice(i, 1);
    }
    if (i == 1) {
      dealerHandDiv.appendChild(dealerHandHeader);
      let dealerCardHeader1 = document.createElement("h3");
      dealerCardHeader1.className = "dealer-card-header";
      dealerCardHeader1.innerHTML = `${gameDeck[i].name}`;
      dealerImgList.appendChild(dealerCardHeader1);
      dealerCount = dealerCount + gameDeck[i].value;
      dealerCards.push(gameDeck[i].name);
      gameDeck.splice(i, 1);
    }
    if (i == 3) {
      let dealerCardHeader2 = document.createElement("h3");
      dealerCardHeader2.className = "dealer-card-header";
      dealerCardHeader2.innerHTML = `${gameDeck[i].name}`;
      dealerImgList.appendChild(dealerCardHeader2);
      dealerCount = dealerCount + gameDeck[i].value;
      dealerCards.push(gameDeck[i].name);
      gameDeck.splice(i, 1);
    }
  }

  gamePlayHeadersDiv.removeChild(gamePlayBtn);

  playerCountDiv.appendChild(playerCountHeader);
  playerCountHeader.innerHTML = `Player Count: ${playerCount}`;

  hitHoldDiv.appendChild(hitHoldHeader);
  hitHoldDiv.appendChild(hitBtn);
  hitHoldDiv.appendChild(holdBtn);

  if (playerCount == 21) {
    moneyBet = moneyBet * 1.5;
    winningDivHeader1.innerHTML = `Congratulations! You Win $${moneyBet}!`;
    winningDiv.appendChild(winningDivHeader1);
    winningDiv.appendChild(finishGameBtn);
    hitHoldDiv.removeChild(hitHoldHeader);
    hitHoldDiv.removeChild(hitBtn);
    hitHoldDiv.removeChild(holdBtn);
  }

  console.log(gameDeck.length);
});

// eventListener for hitBtn

hitBtn.addEventListener("click", () => {
  // if(playerCards.includes("Ace")){}

  //--------------------------------------------
  let newCard2 = gameDeck[0];
  playerCount = playerCount + newCard2.value;
  playerCountHeader.innerHTML = `Player Count: ${playerCount}`;
  playerCards.push(newCard2.name);
  playerValues.push(newCard2.value);
  gameDeck.splice(0, 1);
  //------------------------------------
  let newCardHeader = document.createElement("h3");
  newCardHeader.innerHTML = `${newCard2.name}`;
  playerImgList.appendChild(newCardHeader);
  //-----------------------------------------------------

  //-----------------------------------------------------
  if (playerCount == 21) {
    winningDiv.appendChild(winningDivHeader1);
    moneyBet = moneyBet * 2;
    winningDivHeader1.innerHTML = `Congratulations! You Win $${moneyBet}!`;
    winningDiv.appendChild(winningDivHeader1);
    hitHoldDiv.removeChild(hitHoldHeader);
    hitHoldDiv.removeChild(hitBtn);
    hitHoldDiv.removeChild(holdBtn);
    winningDiv.appendChild(finishGameBtn);
  }
  if (playerCount > 21 && !playerCards.includes("Ace")) {
    losingDivHeader.innerHTML = `The House Wins $${moneyBet}`;
    losingDiv.appendChild(losingDivHeader);
    hitHoldDiv.removeChild(hitHoldHeader);
    hitHoldDiv.removeChild(hitBtn);
    hitHoldDiv.removeChild(holdBtn);
    losingDiv.appendChild(finishGameBtn);
  }
  //=============================================
  //==============================================
  //============================================
  //===============================================
  if (playerCards.includes("Ace") && playerCount != 21) {
    //----------------------------------
    hitHoldDiv.removeChild(hitHoldHeader);
    hitHoldDiv.removeChild(hitBtn);
    hitHoldDiv.removeChild(holdBtn);
    //----------------------------------
    let j = 0;
    aceCount = 0;
    firstAceIndex = 0;
    secondAceIndex = 0;
    thirdAceIndex = 0;
    fourthAceIndex = 0;
    //-------------------------
    let firstArr = [];
    let secondArr = [];
    let thirdArr = [];
    let fourthArr = [];

    for (; j < playerCards.length; j++) {
      if (playerCards[j] == "Ace") {
        aceCount++;
      }
      if (aceCount == 1) {
        aceDiv.appendChild(aceHeader);
        aceDiv.appendChild(oneBtn);
        aceDiv.appendChild(elevenBtn);
        firstArr.push(j);
      }
      if (aceCount == 2) {
        aceDiv.appendChild(aceHeader2);
        aceDiv.appendChild(oneBtn2);
        aceDiv.appendChild(elevenBtn2);
        secondArr.push(j);
      }
      if (aceCount == 3) {
        aceDiv.appendChild(aceHeader3);
        aceDiv.appendChild(oneBtn3);
        aceDiv.appendChild(elevenBtn3);
        thirdArr.push(j);
      }
      if (aceCount == 4) {
        aceDiv.appendChild(aceHeader4);
        aceDiv.appendChild(oneBtn4);
        aceDiv.appendChild(elevenBtn4);
        fourthArr.push(i);
      }
    }
    firstAceIndex = firstArr[0];
    if (firstAceIndex == undefined) {
      firstAceIndex = 0;
    }
    //.................................
    secondAceIndex = secondArr[0];
    if (secondAceIndex == undefined) {
      secondAceIndex = 0;
    }
    //-----------------------------------
    thirdAceIndex = thirdArr[0];
    if (thirdAceIndex == undefined) {
      thirdAceIndex = 0;
    }
    //-------------------------------------
    fourthAceIndex = fourthArr[0];
    if (fourthAceIndex == undefined) {
      fourthAceIndex = 0;
    }
  }
});

// eventListener for holdBtn

holdBtn.addEventListener("click", () => {
  let i = 0;
  for (; dealerCount < 17; i++) {
    dealerCount = dealerCount + gameDeck[i].value;
    let newDealerCard = document.createElement("h3");
    newDealerCard.innerHTML = `${gameDeck[i].name}`;
    dealerImgList.appendChild(newDealerCard);
    dealerCards.push(gameDeck[i].name);
  }
  if (dealerCount > playerCount && dealerCount <= 21) {
    losingDivHeader.innerHTML = `The House Wins ${moneyBet}`;
    losingDiv.appendChild(losingDivHeader);
  }
  if (dealerCount > 21 || dealerCount < playerCount) {
    winningDiv.appendChild(winningDivHeader1);
    moneyBet = moneyBet * 2;
    winningDivHeader1.innerHTML = `Congratulations! You Win $${moneyBet}!`;
  }
  if (dealerCount >= 17 && dealerCount == playerCount) {
    drawDiv.appendChild(drawDivHeader);
    drawDiv.innerHTML = `Game Is A Draw, The Player Keeps $${moneyBet}.`;
  }
  hitHoldDiv.removeChild(hitHoldHeader);
  hitHoldDiv.removeChild(hitBtn);
  hitHoldDiv.removeChild(holdBtn);
  winningDiv.appendChild(finishGameBtn);
});

//-------------------------------------------
//---------------------------------------------

// eventListener for oneBtn
oneBtn.addEventListener("click", () => {
  console.log("oneBtn clicked");

  playerValues[firstAceIndex] = 1;
  console.log(playerValues);

  console.log(`old playerCount: ${playerCount}`);

  playerCount = 0;
  let i = 0;

  for (; i < playerValues.length; i++) {
    playerCount = playerCount + playerValues[i];
  }

  console.log(`new playerCount: ${playerCount}`);

  let newCount = playerCount;

  playerCountHeader.innerHTML = `Player Count: ${playerCount}`;

  if (playerCount == 21 && firstAceIndex >= secondAceIndex) {
    winningDiv.appendChild(winningDivHeader1);
    moneyBet = moneyBet * 2;
    winningDivHeader1.innerHTML = `Congratulations! You Win &${moneyBet}`;
    winningDiv.appendChild(finishGameBtn);
    aceDiv.removeChild(aceHeader);
    aceDiv.removeChild(oneBtn);
    aceDiv.removeChild(elevenBtn);
  }
  if (newCount < 21) {
    aceDiv.removeChild(aceHeader);
    aceDiv.removeChild(oneBtn);
    aceDiv.removeChild(elevenBtn);
    hitHoldDiv.appendChild(hitHoldHeader);
    hitHoldDiv.appendChild(hitBtn);
    hitHoldDiv.appendChild(holdBtn);
  }
  if (playerCount > 21 && firstAceIndex >= secondAceIndex) {
    losingDivHeader.innerHTML = `The House Wins $${moneyBet}`;
    losingDiv.appendChild(losingDivHeader);
    losingDiv.appendChild(finishGameBtn);
    aceDiv.removeChild(aceHeader);
    aceDiv.removeChild(oneBtn);
    aceDiv.removeChild(elevenBtn);
  }
});

// eventListener for elevenBtn
elevenBtn.addEventListener("click", () => {
  console.log("elevenBtn clicked");

  playerValues[firstAceIndex] = 11;
  console.log(playerValues);

  console.log(`old playerCount: ${playerCount}`);

  playerCount = 0;
  let i = 0;

  for (; i < playerValues.length; i++) {
    playerCount = playerCount + playerValues[i];
  }

  console.log(`new playerCount: ${playerCount}`);

  playerCountHeader.innerHTML = `Player Count: ${playerCount}`;

  if (playerCount == 21 && firstAceIndex >= secondAceIndex) {
    winningDiv.appendChild(winningDivHeader1);
    moneyBet = moneyBet * 2;
    winningDivHeader1.innerHTML = `Congratulations! You Win &${moneyBet}`;
    winningDiv.appendChild(finishGameBtn);
    aceDiv.removeChild(aceHeader);
    aceDiv.removeChild(oneBtn);
    aceDiv.removeChild(elevenBtn);
  }
  if (playerCount < 21) {
    aceDiv.removeChild(aceHeader);
    aceDiv.removeChild(oneBtn);
    aceDiv.removeChild(elevenBtn);
    hitHoldDiv.appendChild(hitHoldHeader);
    hitHoldDiv.appendChild(hitBtn);
    hitHoldDiv.appendChild(holdBtn);
  }
  if (playerCount > 21 && firstAceIndex >= secondAceIndex) {
    losingDivHeader.innerHTML = `The House Wins $${moneyBet}`;
    losingDiv.appendChild(losingDivHeader);
    losingDiv.appendChild(finishGameBtn);
    aceDiv.removeChild(aceHeader);
    aceDiv.removeChild(oneBtn);
    aceDiv.removeChild(elevenBtn);
  }
});

//---------------------------------------------
//-------------------------------------------

// eventListener for oneBtn2
oneBtn2.addEventListener("click", () => {
  console.log("oneBtn2 clicked");

  playerValues[secondAceIndex] = 1;
  console.log(playerValues);

  console.log(`old playerCount: ${playerCount}`);

  playerCount = 0;
  let i = 0;

  for (; i < playerValues.length; i++) {
    playerCount = playerCount + playerValues[i];
  }

  console.log(`new playerCount: ${playerCount}`);

  let newCount = playerCount;

  playerCountHeader.innerHTML = `Player Count: ${playerCount}`;

  if (playerCount == 21 && secondAceIndex >= thirdAceIndex) {
    winningDiv.appendChild(winningDivHeader1);
    moneyBet = moneyBet * 2;
    winningDivHeader1.innerHTML = `Congratulations! You Win $${moneyBet}!`;
    winningDiv.appendChild(finishGameBtn);
    aceDiv.removeChild(aceHeader2);
    aceDiv.removeChild(oneBtn2);
    aceDiv.removeChild(elevenBtn2);
  }
  if (newCount < 21) {
    aceDiv.removeChild(aceHeader2);
    aceDiv.removeChild(oneBtn2);
    aceDiv.removeChild(elevenBtn2);
    hitHoldDiv.appendChild(hitHoldHeader);
    hitHoldDiv.appendChild(hitBtn);
    hitHoldDiv.appendChild(holdBtn);
  }
  if (playerCount > 21 && secondAceIndex >= thirdAceIndex) {
    losingDivHeader.innerHTML = `The House Wins $${moneyBet}`;
    losingDiv.appendChild(losingDivHeader);
    losingDiv.appendChild(finishGameBtn);
    aceDiv.removeChild(aceHeader2);
    aceDiv.removeChild(oneBtn2);
    aceDiv.removeChild(elevenBtn2);
  }
});

// eventListener for elevenBtn2
elevenBtn2.addEventListener("click", () => {
  console.log("elevenBtn2 clicked");

  playerValues[secondAceIndex] = 11;
  console.log(playerValues);

  console.log(`old playerCount: ${playerCount}`);

  playerCount = 0;
  let i = 0;

  for (; i < playerValues.length; i++) {
    playerCount = playerCount + playerValues[i];
  }

  console.log(`new playerCount: ${playerCount}`);

  playerCountHeader.innerHTML = `Player Count: ${playerCount}`;

  if (playerCount == 21 && secondAceIndex >= thirdAceIndex) {
    winningDiv.appendChild(winningDivHeader1);
    moneyBet = moneyBet * 2;
    winningDivHeader1.innerHTML = `Congratulations! You Win $${moneyBet}`;
    winningDiv.appendChild(finishGameBtn);
    aceDiv.removeChild(aceHeader2);
    aceDiv.removeChild(oneBtn2);
    aceDiv.removeChild(elevenBtn2);
  }

  if (playerCount < 21) {
    aceDiv.removeChild(aceHeader2);
    aceDiv.removeChild(oneBtn2);
    aceDiv.removeChild(elevenBtn2);
    hitHoldDiv.appendChild(hitHoldHeader);
    hitHoldDiv.appendChild(hitBtn);
    hitHoldDiv.appendChild(holdBtn);
  }

  if (playerCount > 21 && secondAceIndex >= thirdAceIndex) {
    losingDivHeader.innerHTML = `The House Wins $${moneyBet}`;
    losingDiv.appendChild(losingDivHeader);
    losingDiv.appendChild(finishGameBtn);
    aceDiv.removeChild(aceHeader2);
    aceDiv.removeChild(oneBtn2);
    aceDiv.removeChild(elevenBtn2);
  }
});

//----------------------------------------------
//--------------------------------------------

// eventListener for oneBtn3
oneBtn3.addEventListener("click", () => {
  console.log("oneBtn3 clicked");

  playerValues[thirdAceIndex] = 1;
  console.log(playerValues);

  console.log(`old playerCount: ${playerCount}`);

  playerCount = 0;
  let i = 0;

  for (; i < playerValues.length; i++) {
    playerCount = playerCount + playerValues[i];
  }

  console.log(`new playerCount: ${playerCount}`);

  let newCount = playerCount;

  playerCountHeader.innerHTML = `Player Count: ${playerCount}`;

  if (playerCount == 21 && thirdAceIndex >= fourthAceIndex) {
    winningDiv.appendChild(winningDivHeader1);
    moneyBet = moneyBet * 2;
    winningDivHeader1.innerHTML = `Congratulations! You Win $${moneyBet}!`;
    winningDiv.appendChild(finishGameBtn);
    aceDiv.removeChild(aceHeader3);
    aceDiv.removeChild(oneBtn3);
    aceDiv.removeChild(elevenBtn3);
  }

  if (newCount < 21) {
    aceDiv.removeChild(aceHeader3);
    aceDiv.removeChild(oneBtn3);
    aceDiv.removeChild(elevenBtn3);
    hitHoldDiv.appendChild(hitHoldHeader);
    hitHoldDiv.appendChild(hitBtn);
    hitHoldDiv.appendChild(holdBtn);
  }

  if (playerCount > 21 && thirdAceIndex >= fourthAceIndex) {
    losingDivHeader.innerHTML = `The House Wins $${moneyBet}`;
    losingDiv.appendChild(losingDivHeader);
    losingDiv.appendChild(finishGameBtn);
    aceDiv.removeChild(aceHeader3);
    aceDiv.removeChild(oneBtn3);
    aceDiv.removeChild(elevenBtn3);
  }
});

// eventListener for elevenBtn3
elevenBtn3.addEventListener("click", () => {
  console.log("elevenBtn3 clicked");

  playerValues[thirdAceIndex] = 11;
  console.log(playerValues);

  console.log(`old playerCount: ${playerCount}`);

  playerCount = 0;
  let i = 0;

  for (; i < playerValues.length; i++) {
    playerCount = playerCount + playerValues[i];
  }

  console.log(`new playerCount: ${playerCount}`);

  if (playerCount == 21 && thirdAceIndex >= fourthAceIndex) {
    winningDiv.appendChild(winningDivHeader1);
    moneyBet = moneyBet * 2;
    winningDivHeader1.innerHTML = `Congratulations! You Win $${moneyBet}`;
    winningDiv.appendChild(finishGameBtn);
    aceDiv.removeChild(aceHeader3);
    aceDiv.removeChild(oneBtn3);
    aceDiv.removeChild(elevenBtn3);
  }

  if (playerCount < 21) {
    aceDiv.removeChild(aceHeader3);
    aceDiv.removeChild(oneBtn3);
    aceDiv.removeChild(elevenBtn3);
    hitHoldDiv.appendChild(hitHoldHeader);
    hitHoldDiv.appendChild(hitBtn);
    hitHoldDiv.appendChild(holdBtn);
  }

  if (playerCount > 21 && thirdAceIndex >= fourthAceIndex) {
    losingDivHeader.innerHTML = `The House Wins $${moneyBet}`;
    losingDiv.appendChild(losingDivHeader);
    losingDiv.appendChild(finishGameBtn);
    aceDiv.removeChild(aceHeader3);
    aceDiv.removeChild(oneBtn3);
    aceDiv.removeChild(elevenBtn3);
  }
});

//----------------------------------------------
//---------------------------------------------

// eventListener for oneBtn4
oneBtn4.addEventListener("click", () => {
  console.log("oneBtn4 clicked");

  playerValues[fourthAceIndex] = 1;
  console.log(playerValues);

  console.log(`old playerCount: ${playerCount}`);

  playerCount = 0;
  let i = 0;

  for (; i < playerValues.length; i++) {
    playerCount = playerCount + playerValues[i];
  }

  console.log(`new playerCount: ${playerCount}`);

  let newCount = playerCount;

  playerCountHeader.innerHTML = `Player Count: ${playerCount}`;

  if (playerCount == 21) {
    winningDiv.appendChild(winningDivHeader1);
    moneyBet = moneyBet * 2;
    winningDivHeader1.innerHTML = `Congratulations! You Win $${moneyBet}!`;
    winningDiv.appendChild(finishGameBtn);
    aceDiv.removeChild(aceHeader4);
    aceDiv.removeChild(oneBtn4);
    aceDiv.removeChild(elevenBtn4);
  }

  if (newCount < 21) {
    aceDiv.removeChild(aceHeader4);
    aceDiv.removeChild(oneBtn4);
    aceDiv.removeChild(elevenBtn4);
    hitHoldDiv.appendChild(hitHoldHeader);
    hitHoldDiv.appendChild(hitBtn);
    hitHoldDiv.appendChild(holdBtn);
  }

  if (playerCount > 21) {
    losingDivHeader.innerHTML = `The House Wins $${moneyBet}`;
    losingDiv.appendChild(losingDivHeader);
    losingDiv.appendChild(finishGameBtn);
    aceDiv.removeChild(aceHeader4);
    aceDiv.removeChild(oneBtn4);
    aceDiv.removeChild(elevenBtn4);
  }
});

// eventListener for elevenBtn4
elevenBtn4.addEventListener("click", () => {
  console.log("elevenBtn4 clicked");

  playerValues[fourthAceIndex] = 11;
  console.log(playerValues);

  console.log(`old playerCount: ${playerCount}`);

  playerCount = 0;
  let i = 0;

  for (; i < playerValues.length; i++) {
    playerCount = playerCount + playerValues[i];
  }

  console.log(`new playerCount: ${playerCount}`);

  if (playerCount == 21) {
    winningDiv.appendChild(winningDivHeader1);
    moneyBet = moneyBet * 2;
    winningDivHeader1.innerHTML = `Congratulations! You Win $${moneyBet}`;
    winningDiv.appendChild(finishGameBtn);
    aceDiv.removeChild(aceHeader4);
    aceDiv.removeChild(oneBtn4);
    aceDiv.removeChild(elevenBtn4);
  }

  if (playerCount < 21) {
    aceDiv.removeChild(aceHeader4);
    aceDiv.removeChild(oneBtn4);
    aceDiv.removeChild(elevenBtn4);
    hitHoldDiv.appendChild(hitHoldHeader);
    hitHoldDiv.appendChild(hitBtn);
    hitHoldDiv.appendChild(holdBtn);
  }

  if (playerCount > 21) {
    losingDivHeader.innerHTML = `The House Wins $${moneyBet}`;
    losingDiv.appendChild(losingDivHeader);
    losingDiv.appendChild(finishGameBtn);
    aceDiv.removeChild(aceHeader4);
    aceDiv.removeChild(oneBtn4);
    aceDiv.removeChild(elevenBtn4);
  }
});

//-------------------------------------------
//-----------------------------------------

// eventListener for finishGameBtn

finishGameBtn.addEventListener("click", () => {});
