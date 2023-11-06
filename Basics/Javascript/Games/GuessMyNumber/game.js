"use strict";

// Math.round : Bu metot yuvarlama işlemini normal matematikteki gibi yapar. 0.499'u 0'a, 0.6'yı ise 1'e yuvarlar.
// Math.floor : ise her zaman tabana yuavaralama işlemini gerçekleştirir.
// Math.trunc : ise her zaman ondalık kısmı atar bir nevi int'e cast eder.
// XMLHttpRequest nesnesi oluştur
let currentDiv;
let ulElement;
let kontrol = false;
let input;
let state = 0;
let numberGuess =  Math.trunc(Math.random() * 100 + 1);
let messageLabel = document.querySelector(".message");
let score = 20;
let scoreLabel = document.querySelector(".score");
let numberLabel = document.querySelector(".number");
const highscoreLabel = document.querySelector(".highscore");
const pageBody = document.body;
const aiElement = document.querySelector(".ai");

const checkProximity = function (input) {
  return numberGuess < input;
};
const setHighScore = function (score) {
  if (score > Number(highscoreLabel.textContent)) {
    highscoreLabel.textContent = score;
    localStorage.setItem("HighScore", score);
  } else if (score === localStorage.getItem("HighScore")) {
    highscoreLabel.textContent = localStorage.getItem("HighScore");
  }
};
const displayMessage = function (message) {
  messageLabel.textContent = message;
};
const setScoreLabel = function (score) {
  scoreLabel.textContent = score;
};

const check = function () {
  input = Number(document.querySelector(".guess").value);
  if (!input){
    messageLabel.textContent = "⛔ Sayı Girilmedi!";
  }
  else if (input === numberGuess) {
    displayMessage("🥳 Doğru sayı!");
    setHighScore(score);
    numberLabel.textContent = input;
    pageBody.style.backgroundColor = "#60b347";
    numberLabel.style.width = "30rem";
  }
  else {

    // if (score > 1) {
    //   score--;
    //   setScoreLabel(score);
    //   displayMessage(checkProximity(input) ? "Daha küçük" : "Daha yüksek");
    // }
    if (score > 1) {
      score--;
      setScoreLabel(score);
      if (checkProximity(input)) {
        state = 2;
        displayMessage("Daha küçük");
      } else {
        state = 1;
        displayMessage("Daha büyük");
      }
    }
    else
      {
        setScoreLabel(0);
        console.log(numberGuess);
        displayMessage("☠️ Oyunu kaybettin!");
      }
  }
}


// async function fetchNumberJSON(){
//   const endPoint = `http://localhost:5180/api/Rooter/AI2/${state}/${Number(document.querySelector(".guess").textContent)}`;
//   let data1;
//   debugger;
//   await fetch(endPoint)
//       .then( response => response.json())
//       .then(data => {
//         data1 = data;
//       })
//   debugger;
//   return data1;
// }
async function fetchNumberJSON() {
  // Define the endpoint URL
  debugger;
  const endPoint = `http://localhost:5180/api/Rooter/AI2/${state}/${Number(document.querySelector(".guess").value)}`;

  // Fetch the JSON data
  const response = await fetch(endPoint);
  const jsonData = await response.json();

  // Return the list of tuples
  return jsonData;
}

// const AICheck  = function (){
//   input = Number(document.querySelector(".guess").value);
//   if (!input){
//     state = 0;
//     messageLabel.textContent = "⛔ Sayı Girilmedi!";
//   }else if (input === numberGuess) {
//     displayMessage("🥳 Doğru sayı!");
//     setHighScore(score);
//     numberLabel.textContent = input;
//     pageBody.style.backgroundColor = "#60b347";
//     numberLabel.style.width = "30rem";
//     state = 3;
//     fetchNumberJSON();
//
//   }else {
//
//     if (score > 1) {
//       score--;
//       setScoreLabel(score);
//       if (checkProximity(input)){
//         state = 2;
//         aiElement.dispatchEvent(new Event("click"));
//         displayMessage("Daha küçük");
//       }
//       else{
//         state = 1;
//         aiElement.dispatchEvent(new Event("click"));
//         displayMessage("Daha büyük");
//       }
//     } else {
//       setScoreLabel(0);
//       state = 3;
//       fetchNumberJSON();
//       console.log(numberGuess);
//       displayMessage("☠️ Oyunu kaybettin!");
//     }
//   }
// }

function CreateDynamicLiElements(countElement,data) {
 debugger;

  if (document.querySelector(".AI-Table").childElementCount > 0){
    let count =document.querySelector(".list").childElementCount;
    for (let i = 0; count > i;i++){
      document.querySelector(".list").firstChild.remove();
    }
  }else{
    currentDiv = document.querySelector(".AI-Table");
    ulElement = document.createElement("ul");
  }
    currentDiv.appendChild(ulElement);
    ulElement.classList.add("list");
    if(countElement > 10) countElement = 10;
    for (let i = 0; i < countElement; i++) {
      const liElement = document.createElement('li');
      let {Item1, Item2} = data[i];
      liElement.textContent = `Sayı :${Item1} => ${Item2}`;
      ulElement.appendChild(liElement);
    }


}

console.log(document.querySelector(".message").textContent);
setHighScore(localStorage.getItem("HighScore"));

async function Get() {
  let datas;
  await fetchNumberJSON().then(async data => datas = data);
  console.log(datas);
  return datas;
}
document.querySelector(".check").addEventListener("click", async function (){
  check();
  let datas =  await Get();
  CreateDynamicLiElements(datas.length,datas);
});
document.querySelector(".ai").addEventListener("click", async function (){
  let datas =  await Get();
  CreateDynamicLiElements(datas.length,datas);
});
document.querySelector(".again").addEventListener("click", function () {
  state = 3;
  fetchNumberJSON();
  location.reload();
});