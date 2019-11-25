var treasureRow = [0, 0, 0];
var points = 0;
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
}

function initChests() {
  let chest1 = document.createElement("IMG");
  let chest2 = document.createElement("IMG");
  let chest3 = document.createElement("IMG");
  chest1.setAttribute("src", "images/chest-closed.png");
  chest2.setAttribute("src", "images/chest-closed.png");
  chest3.setAttribute("src", "images/chest-closed.png");
  document.getElementById("chests").appendChild(chest1);
  document.getElementById("chests").appendChild(chest2);
  document.getElementById("chests").appendChild(chest3);
}

function initScoreBoard() {
  let text = document.querySelector("chests>div");
  text.innerHTML = "Score: 0";
}

function initRefreshButton() {

}

function initChestEventListeners() {
}

function placeTreasure() {
    let i = Math.floor(Math.random()*3)+1;
    treasureRow[i] = 1;
}

function chestClicked(e) {
    
}

function getImageFromPexels(){
  // make a request towards pexels API and get 1 Diamond image
}

function refresh() {
  initChests();
}

function removeChestEvents(){
}