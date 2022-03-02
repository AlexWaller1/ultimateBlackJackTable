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

let playerListDiv = document.getElementById("player-list-div");

const playerList = document.getElementById("player-list");

const playerSubmitBtn = document.getElementById("player-submit-btn");

const singlePlayerDiv = document.getElementById("single-player-div");

const editSubmitDiv = document.getElementById("edit-submit-div");

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
  players.forEach(cardPlayer => {
    const playerLi = document.createElement("li");
    // li which will appended to ul
    playerLi.className = "player-li-class";
    // className for playerLi
    playerLi.display = "inline";
    const playerDiv = document.createElement("div");
    // div which will be appended to div
    const playerHeader = document.createElement("button");
    // h3 which will be added to div
    playerHeader.innerHTML = cardPlayer.name;
    // playerHeader's innerHTML will be name property of cardPlayer object
    playerHeader.id = "player-header";
    // id for playerHeader

    playerDiv.append(playerHeader);
    // appending playerHeader to playerDiv
    const playerImg = document.createElement("img");
    // img which will be appended to div
    playerImg.src = cardPlayer.img;
    // playerImg's src will be img property of cardPlayer object
    playerImg.className = "player-img";
    // playerImg className is "player-img"
    playerImg.width = 250;
    // playerImg width is 500
    playerImg.height = 250;
    // playerImg height is 500
    playerDiv.append(playerImg);
    // appending playerImg to playerDiv

    playerLi.append(playerDiv);
    // appending playerDiv to playerLi
    playerList.append(playerLi);
    // appending playerLi to playerList

    //-----------------------------------------
    //-----------------------------------------
    // eventListener for playerHeader
    playerHeader.addEventListener("click", () => {
      const indPlayerHeader = document.createElement("h1");
      // creating header for show page
      indPlayerHeader.className = "ind-player-header";
      // className for indPlayerHeader
      indPlayerHeader.innerHTML = cardPlayer.name;
      // innerHTML for header
      const indPlayerHometown = document.createElement("h3");
      // header for cardPlayer's homeTown
      indPlayerHometown.className = "ind-player-hometown";
      // className for indPlayerHometown
      indPlayerHometown.innerHTML = cardPlayer.homeTown;
      // innerHTML for indPlayerHometown
      const indPlayerImg = document.createElement("img");
      // creating image for show page
      indPlayerImg.className = "ind-player-img";
      // className for indPlayerImg
      indPlayerImg.src = cardPlayer.img;
      // source for indPlayerImg
      indPlayerImg.width = 600;
      // width for playerImg
      indPlayerImg.heigth = 600;
      // height for playerImg
      const indPlayerBio = document.createElement("h4");
      //   // making header for the bio
      indPlayerBio.className = "ind-player-bio";
      //   // making a class for the player bio
      indPlayerBio.innerHTML = cardPlayer.bio;
      //   // adding innerHTML for player bio
      playerListDiv.innerHTML = "";
      // clearing out the playersListDiv
      singlePlayerDiv.append(indPlayerHeader);
      // appending name header to div
      singlePlayerDiv.append(indPlayerHometown);
      // appending hometown header to div
      singlePlayerDiv.append(indPlayerImg);
      // appending player image to div
      singlePlayerDiv.append(indPlayerBio);
      // appending player bio to div
      const editPlayerBtn = document.createElement("button");
      // creating edit player button
      editPlayerBtn.innerHTML = "Edit";
      // innerHTML for edit button
      editPlayerBtn.className = "edit-player-btn";
      // edit player button className is "edit-player-btn"
      const deletePlayerBtn = document.createElement("button");
      // creating a delete player button;
      deletePlayerBtn.innerHTML = "Delete";
      // innerHTML for delete button
      deletePlayerBtn.className = "delete-player-btn";
      // className for deletePlayerBtn
      singlePlayerDiv.append(editPlayerBtn);
      // appending editPlayerBtn to div
      singlePlayerDiv.append(deletePlayerBtn);
      // appending deletePlayerBtn to div

      //----------------------------------------
      //---------------------------------------

      // eventListener for editPlayerBtn
      editPlayerBtn.addEventListener("click", () => {
        playerNameInput.value = cardPlayer.name;
        playerHometownInput.value = cardPlayer.homeTown;
        playerImgInput.value = cardPlayer.img;
        playerBioInput.value = cardPlayer.bio;
        // input fields filled with object property information
        const editSubmitBtn = document.createElement("button");
        // creating new button to submit
        editSubmitBtn.innerHTML = "Submit Edited Info";
        // innHTML for editPlayerBtn
        editSubmitBtn.className = "edit-submit-btn";
        // className for editSubmitBtn
        editSubmitDiv.append(editSubmitBtn);
        // appending editSubmitBtn to div

        editSubmitBtn.addEventListener("click", () => {
          // extracting array from localStorage
          let data5 = localStorage.getItem("player-list");
          let data6 = JSON.parse(data5);
          let index = cardPlayer.id;
          // modifying info
          data6[index].name = playerNameInput.value;
          data6[index].homeTown = playerHometownInput.value;
          data6[index].img = playerImgInput.value;
          data6[index].bio = playerBioInput.value;
          // modifying localStorage
          let data7 = JSON.stringify(data6);
          localStorage.setItem("player-list", data7);
          // changing info on page
          indPlayerHeader.innerHTML = playerNameInput.value;
          indPlayerHometown.innerHTML = playerHometownInput.value;
          indPlayerImg.src = playerImgInput.value;
          indPlayerBio.innerHTML = playerBioInput.value;
          // clear input fields and editSubmitDiv
          playerNameInput.value = "";
          playerHometownInput.value = "";
          playerImgInput.value = "";
          playerBioInput.value = "";
          editSubmitDiv.innerHTML = "";
        });
      });
      //---------------------------------------------------
      //---------------------------------------------------
      // adding eventListener for delete button
      deletePlayerBtn.addEventListener("click", () => {
        let data21 = localStorage.getItem("player-list");
        players = JSON.parse(data21);
        // converting localStorage JSON array to a JavaScript array
        let target = cardPlayer.id;
        // getting id/array index of the current player
        players.splice(target, 1);
        // deleting that player from the array;
        for (let i = 0; i < players.length; i++) {
          if (players[i].id > target) {
            players[i].id = players[i].id - 1;
          }
        }
        console.log(players);

        localStorage.removeItem("player-count");
        count = players.length;
        let jsonCount2 = JSON.stringify(count);
        localStorage.setItem("player-count", jsonCount2);

        localStorage.removeItem("player-list");
        let newJSON = JSON.stringify(players);
        localStorage.setItem("player-list", newJSON);
        singlePlayerDiv.innerHTML = "";
        displayPlayers();
      });
    });
  });
}

displayPlayers();

console.log("---------------------------------");
console.log("-------------------------------");

let onSubmit = e => {
  if (playerNameInput.value.trim() == "") {
    e.preventDefault();
    playerMsgDiv.innerHTML = "Please Enter Player Name and Image";
  } else {
    e.preventDefault();
    playerMsgDiv.innerHTML = "Thank You For Entering New Player Information";
    let newPlayer = {
      id: count,
      name: playerNameInput.value,
      homeTown: playerHometownInput.value,
      img: playerImgInput.value,
      bio: playerBioInput.value
    };
    players.push(newPlayer);
    count++;
    let playersJSON = JSON.stringify(players);
    let countJSON = JSON.stringify(count);
    localStorage.setItem("player-list", playersJSON);
    localStorage.setItem("player-count", countJSON);
    console.log(localStorage);
    playerList.innerHTML = "";
    displayPlayers();
    playerNameInput.value = "";
    playerHometownInput.value = "";
    playerImgInput.value = "";
    playerBioInput.value = "";
  }
};

playerSubmitBtn.addEventListener("click", onSubmit);
