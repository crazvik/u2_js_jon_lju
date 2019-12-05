/**
 * @param treasureRow skapar en array som ska hålla vilken kista som är rätt.
 * @param points är poängen.
 * @param chest1-3 skapar ett bildobject på sidan utan att ge dem en bildkälla.
 * @param oneChest används för att förhindra att mer än en kista kan klickas på.
 */
var treasureRow = [0, 0, 0];
var points = 0;
var chest1 = document.createElement("IMG");
var chest2 = document.createElement("IMG");
var chest3 = document.createElement("IMG");
var oneChest = false;

/**
 * @description lägger till en eventlistener för knapped try again och kör
 * funktoner för att initiera "spelet". initScoreBoard kör i denna för att
 * undvika att texten score skrivs ut igen.
 */
window.onload = function init() {
  document.getElementById("refresh-button").addEventListener('click', refresh);
  initGameUI();
  initScoreBoard();
}

/**
 * @description kör funktioner för att placera ut kistor på sidan och även
 * vilken kista som innehåller skatten.
 */
function initGameUI() {
  // Call functions that creates the Game UI
  initChests();
  initChestEventListeners();
  placeTreasure();
}

/**
 * @description sätter chest1-3 till chest-closed och lägger till dem i diven
 * med id't chests. Kistorna får även en lite marginal för att få lite extra
 * synlighet.
 */
function initChests() {
  chest1.setAttribute("src", "images/chest-closed.png");
  chest2.setAttribute("src", "images/chest-closed.png");
  chest3.setAttribute("src", "images/chest-closed.png");
  document.getElementById("chests").appendChild(chest1);
  document.getElementById("chests").appendChild(chest2);
  document.getElementById("chests").appendChild(chest3);
  document.getElementById("chests").children[1].style.margin = ("0px 20px");
}

/**
 * @description ger alla kistor en eventlistener som kör funktionen chestClicked
 * om man klickar på en kista.
 */
function initChestEventListeners() {
  chest1.addEventListener("click", chestClicked);
  chest2.addEventListener("click", chestClicked);
  chest3.addEventListener("click", chestClicked);
}

/**
 * @description placerar en skatt i en kista genom att slumpa ett tal mellan 0-2
 * och sätter detta indexet till 1.
 * @param int i är det slumpade indexet.
 */
function placeTreasure() {
  let i = Math.floor(Math.random()*3);
  treasureRow[i] = 1;
}

/**
 * @description lägger till en scoreboard på sidan och ger den även en liten
 * styling i form av textfärg, placering och typsnitt.
 */
function initScoreBoard() {
  document.getElementById("game-wrapper").append("Score: ");
  document.getElementById("game-wrapper").append(points);
  document.getElementById("game-wrapper").style.color = ("white");
  document.getElementById("game-wrapper").style.textAlign = ("center");
  document.getElementById("game-wrapper").style.fontFamily = ("Verdana, Geneva, Tahoma, sans-serif");
}

/**
 * @description ökar points med 5 och ersätter det sista elementet i
 * game-wrapper med detta. Eftersom points är det sista som lagts till kan man
 * säga att points ersätts med points.
 */
function updateScoreBoard() {
  points += 5;
  document.getElementById("game-wrapper").lastChild.replaceWith(points);
}

/**
 * @description kontrollerar vilken kista som klickats på och ersätter bilden
 * med en öppen kista, sätter oneChest till true och kör funktionen
 * correctChest. 
 * @param e är eventet som skickat in i funktionen, vilket i detta fallet är klickningen.
 */
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

/**
 * @description kollar om det givna indexet är 1 och kollar även att det är den
 * specifika kistan. Om det stämmer körs updateScoreBoard för att ändra poängen
 * medan den klickade kistan ändras till en ny bild.
 * @param clickedChest är kistan som klickats på.
 */
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

/**
 * @description skickar en begäran till pexels API. Denna returnerar en JSON
 * text. Texten sparas i en variabel som sedan ändrar bildkällan till
 * selectedChest med hjälp av respektive JSON-objekt.
 * @param selectedChest är kistan som klickats på.
 */
function getImageFromPexels(selectedChest) {
  // make a request towards pexels API and get 1 Diamond image
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.pexels.com/v1/search?query=diamond+query&per_page=79&page=1", true);
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

/**
 * @description återställer oneChest till false och treasureRow till 0. Rensar
 * även diven från kistor och kör sedan funktionen som placerar ut alla kistor
 * samt skatten.
 */
function refresh() {
  oneChest = false;
  while(document.getElementById("chests").firstChild) {
    document.getElementById("chests").firstChild.remove();
  }
  treasureRow = [0, 0, 0];
  initGameUI();
}