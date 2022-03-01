// players page
console.log("Hello Oa");

console.log("------------------------------");
console.log("--------------------------------");

const playersPageHeader = document.getElementById("players-page-header");

const playersFormDiv = document.getElementById("players-form-div");

const playerNameInput = document.getElementById("player-name-input");

const playerHometownInput = document.getElementById("player-hometown-input");

const playerBioInput = document.getElementById("player-bio-input");

const playerImgInput = document.getElementById("player-img-input");

const playerMsgDiv = document.getElementById("player-msg-div");

const playerListDiv = document.getElementById("player-list-div");

const playerList = document.getElementById("player-list");

const playerSubmitBtn = document.getElementById("player-submit-btn");

console.log("------------------------------");
console.log("-------------------------------");

let players = [];

let count = 0;

let data1 = localStorage.getItem("player-list");

let data2 = JSON.parse(data1);

let data3 = localStorage.getItem("player-count");

let data4 = JSON.parse(data3);

if (data2 != null) {
  players = data2;
  count = data4;
} else {
  players = [];
  count = 0;
}

console.log("-----------------------------");
console.log("------------------------------");

function displayPlayers() {
  players.array.forEach(cardPlayer => {});
}
