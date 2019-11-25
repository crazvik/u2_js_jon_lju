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
  this.placeTreasure();
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
  let i = Math.floor(Math.random()*3);
  treasureRow[i] = 1;
  console.log(treasureRow);
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
      correctChest(chest1);
    }
    else if(event===chest2) {
      chest2Open.setAttribute("src", "images/chest-open.png");
      event.replaceWith(chest2Open);
      oneChest = true;
      correctChest(chest2);
    }
    else {
      chest3Open.setAttribute("src", "images/chest-open.png");
      event.replaceWith(chest3Open);
      oneChest = true;
      correctChest(chest3);
    }
  }
}

function correctChest(clickedChest) {
  if(clickedChest===chest1 && treasureRow[0]===1) {
    console.log("test1");
  }
  else if(clickedChest===chest2 && treasureRow[1]===1) {
    console.log("test2");
  }
  else if(clickedChest===chest3 && treasureRow[2]===1) {
    console.log("test3");
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