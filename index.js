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
  initGameUI();
}

function initGameUI(){
  // Call functions that creates the Game UI
  initChests();
  initScoreBoard();
  initChestEventListeners();
}

function initChests() {
  chest1.setAttribute("src", "images/chest-closed.png");
  chest2.setAttribute("src", "images/chest-closed.png");
  chest3.setAttribute("src", "images/chest-closed.png");
  document.getElementById("chests").appendChild(chest1);
  document.getElementById("chests").appendChild(chest2);
  document.getElementById("chests").appendChild(chest3);
}

function initScoreBoard() {
}

function initRefreshButton() {

}

function initChestEventListeners() {
  chest1.addEventListener("click", chestClicked);
  chest2.addEventListener("click", chestClicked);
  chest3.addEventListener("click", chestClicked);
}

function placeTreasure() {
  let i = Math.floor(Math.random()*3)+1;
  treasureRow[i] = 1;
}

function chestClicked(e) {
  let event = e.target;
  let chest1Open = document.createElement("IMG");
  let chest2Open = document.createElement("IMG");
  let chest3Open = document.createElement("IMG");
  while(oneChest===false) {
    if(event===chest1) {
      chest1Open.setAttribute("src", "images/chest-open.png");
      event.replaceWith(chest1Open);
      oneChest = true;
    }
    else if(event===chest2) {
      chest2Open.setAttribute("src", "images/chest-open.png");
      event.replaceWith(chest2Open);
      oneChest = true;
    }
    else {
      chest3Open.setAttribute("src", "images/chest-open.png");
      event.replaceWith(chest3Open);
      oneChest = true;
    }
  }
  
}

function getImageFromPexels(){
  // make a request towards pexels API and get 1 Diamond image
}

function refresh() {
  initChests();
}

function removeChestEvents(){
}