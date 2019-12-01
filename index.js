var treasureRow = [0, 0, 0];
var points = 0;
var chest1 = document.createElement("IMG");
var chest2 = document.createElement("IMG");
var chest3 = document.createElement("IMG");
var oneChest = false;
/*
* Function that initiates the whole Game application.
*/
window.onload = function init() {
  document.getElementById("refresh-button").addEventListener('click', refresh);
  initGameUI();
  initScoreBoard();
}

function initGameUI() {
  // Call functions that creates the Game UI
  initChests();
  initChestEventListeners();
  placeTreasure();
}

function initChests() {
  chest1.setAttribute("src", "images/chest-closed.png");
  chest2.setAttribute("src", "images/chest-closed.png");
  chest3.setAttribute("src", "images/chest-closed.png");
  document.getElementById("chests").appendChild(chest1);
  document.getElementById("chests").appendChild(chest2);
  document.getElementById("chests").appendChild(chest3);
  document.getElementById("chests").children[1].style.margin = ("0px 20px");
}

function initChestEventListeners() {
  chest1.addEventListener("click", chestClicked);
  chest2.addEventListener("click", chestClicked);
  chest3.addEventListener("click", chestClicked);
}

function placeTreasure() {
  let i = Math.floor(Math.random()*3);
  treasureRow[i] = 1;
  console.log(treasureRow); //debug help
}

function initScoreBoard() {
  document.getElementById("game-wrapper").append("Score: ");
  document.getElementById("game-wrapper").append(points);
  document.getElementById("game-wrapper").style.color = ("white");
  document.getElementById("game-wrapper").style.textAlign = ("center");
  document.getElementById("game-wrapper").style.fontFamily = ("Verdana, Geneva, Tahoma, sans-serif");
}

function updateScoreBoard() {
  points += 5;
  document.getElementById("game-wrapper").lastChild.replaceWith(points);
}

function chestClicked(e) {
  let event = e.target;
  while(oneChest===false) {
    if(event===chest1) {
      chest1.setAttribute("src", "images/chest-open.png");
      oneChest = true;
      correctChest(chest1);
    }
    else if(event===chest2) {
      chest2.setAttribute("src", "images/chest-open.png");
      oneChest = true;
      correctChest(chest2);
    }
    else {
      chest3.setAttribute("src", "images/chest-open.png");
      oneChest = true;
      correctChest(chest3);
    }
  }
}

function correctChest(clickedChest) {
  if(clickedChest===chest1 && treasureRow[0]===1) {
    chest1 = getImageFromPexels(chest1);
    updateScoreBoard();
  }
  else if(clickedChest===chest2 && treasureRow[1]===1) {
    chest2 = getImageFromPexels(chest2);
    updateScoreBoard();
  }
  else if(clickedChest===chest3 && treasureRow[2]===1) {
    chest3 = getImageFromPexels(chest3);
    updateScoreBoard();
  }
}

function getImageFromPexels(selectedChest) {
  // make a request towards pexels API and get 1 Diamond image
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.pexels.com/v1/search?query=diamond+query&per_page=15&page=1", true);
  xhr.setRequestHeader('Authorization', '563492ad6f91700001000001f767263948934f83bd0515459cb31716');
  xhr.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
      var container = JSON.parse(xhr.responseText);
      selectedChest.src = container["photos"][Math.round(Math.random()*15)]["src"]["medium"];
    }
};
  xhr.send();
  return selectedChest;
}

function refresh() {
  oneChest = false;
  while(document.getElementById("chests").firstChild) {
    if(document.getElementById("chests").firstChild.remove());
  }
  treasureRow = [0, 0, 0];
  initGameUI();
}