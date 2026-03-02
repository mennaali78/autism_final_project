
const emotions = [
"😀","😢","😠",
"😨","😮","🤢",
"😕","😐","😷"
];


const gameEmotions = [...emotions, ...emotions];

const board = document.getElementById("gameBoard");
const scoreDisplay = document.getElementById("score");
const resetBtn = document.getElementById("resetBtn");

let score = localStorage.getItem("emotionScore") 
? parseInt(localStorage.getItem("emotionScore")) 
: 0;

scoreDisplay.textContent = score;

let firstCard = null;
let lockBoard = false;
let matches = 0;


const matchSound = new Audio("https://www.soundjay.com/buttons/sounds/button-4.mp3");
const wrongSound = new Audio("https://www.soundjay.com/buttons/sounds/button-10.mp3");


function shuffle(array){
return array.sort(()=>Math.random()-0.5);
}

shuffle(gameEmotions);


function createBoard(){

board.innerHTML = "";
matches = 0;

gameEmotions.forEach(emoji=>{

let card = document.createElement("div");
card.classList.add("card");
card.dataset.value = emoji;
card.innerHTML = "?";

card.addEventListener("click",()=>{

if(lockBoard) return;
if(card.classList.contains("matched")) return;
if(card === firstCard) return;

card.innerHTML = emoji;
card.classList.add("flipped");

if(!firstCard){

firstCard = card;

}else{

if(firstCard.dataset.value === card.dataset.value){


matchSound.play();

card.classList.add("matched");
firstCard.classList.add("matched");

score++;
matches++;

scoreDisplay.textContent = score;
localStorage.setItem("emotionScore", score);

firstCard = null;


if(matches === emotions.length){
setTimeout(()=>{
alert("🎉 Congratulations! You completed the game!");
},300);
}

}else{


wrongSound.play();
lockBoard = true;

setTimeout(()=>{
card.innerHTML = "?";
firstCard.innerHTML = "?";

card.classList.remove("flipped");
firstCard.classList.remove("flipped");

firstCard = null;
lockBoard = false;

},800);

}

}

});

board.appendChild(card);
});

}

createBoard();


resetBtn.addEventListener("click",()=>{

score = 0;
matches = 0;

localStorage.removeItem("emotionScore");

scoreDisplay.textContent = score;

shuffle(gameEmotions);
createBoard();

});


document.getElementById("todayDate").textContent =
new Date().toDateString();


document.getElementById("logBtn").addEventListener("click",()=>{

const observation = {
date:new Date().toDateString(),
emotionRecognized:document.getElementById("emotionRecognized").value,
supportLevel:document.getElementById("supportLevel").value,
situation:document.getElementById("situation").value,
response:document.getElementById("response").value
};

localStorage.setItem("emotionObservation", JSON.stringify(observation));

alert("Observation saved successfully!");
});