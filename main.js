// Functionize Minecraft Fishing Start Code

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);
// Lets

// Fish count variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

function fishBtnClicked() {
  let character = document.getElementById("character-select").value;
  console.log(character);
  // Determine Selected Character
  if (character === "steve") {
    // Steve Fish Simulator
    let randNum = Math.random();
    if (randNum < 0.7) {
      console.log("Cod");
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      numCod++;
    } else if (randNum < 0.9) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      console.log("salmon");
      numSalmon++;
    } else if (randNum < 0.95) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      console.log("tropical");
      numTropical++;
    } else {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      console.log("puffer");
      numPuffer++;
    }
    document.getElementById("num-cod").innerHTML = numCod;
    document.getElementById("num-salmon").innerHTML = numSalmon;
    document.getElementById("num-tropical").innerHTML = numTropical;
    document.getElementById("num-puffer").innerHTML = numPuffer;
  } else if (character === "alex") {
    // Alex Simulator
    let randNum = Math.random();
    if (randNum < 0.1) {
      console.log("Cod");
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      numCod++;
    } else if (randNum < 0.2) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      console.log("salmon");
      numSalmon++;
    } else if (randNum < 0.5) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      console.log("tropical");
      numTropical++;
    } else {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      console.log("puffer");
      numPuffer++;
    }
    document.getElementById("num-cod").innerHTML = numCod;
    document.getElementById("num-salmon").innerHTML = numSalmon;
    document.getElementById("num-tropical").innerHTML = numTropical;
    document.getElementById("num-puffer").innerHTML = numPuffer;
  } else {
    // Villiager Simulator
    let randNum = Math.random();
    if (randNum < 0.25) {
      console.log("Cod");
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      numCod++;
    } else if (randNum < 0.5) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      console.log("salmon");
      numSalmon++;
    } else if (randNum < 0.75) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      console.log("tropical");
      numTropical++;
    } else {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      console.log("puffer");
      numPuffer++;
    }
    document.getElementById("num-cod").innerHTML = numCod;
    document.getElementById("num-salmon").innerHTML = numSalmon;
    document.getElementById("num-tropical").innerHTML = numTropical;
    document.getElementById("num-puffer").innerHTML = numPuffer;
  }
}
