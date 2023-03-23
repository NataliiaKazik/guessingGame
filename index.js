let typeGuessHere = document.querySelector("input");
let go = document.getElementById("button1");
let resetTheGame = document.getElementById("button2");
let needAHint = document.getElementById("button3");
let title = document.getElementById("title");
let subTitle = document.getElementById("line1");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");



// Step 1: generate random number+
// Step 2: save user's numbers+
// Step 3: compare user number and the random generated number and change h1 and h2 accordingly (if statement)
// Step 4: "=" = correct;
// Step 5: Reset the game

let generateRandomNumber = Math.floor(Math.random()* 100 +1);

let newArr = [];
let triesNumber = 0;

function saveNumbers() {
  if (newArr.includes(Number(typeGuessHere.value))) {
    title.textContent = "You've already guessed that!"
} else {
    newArr.push((Number(typeGuessHere.value))); 
    triesNumber ++

     if (triesNumber === 1 ){
        p1.textContent = (Number(typeGuessHere.value)); 
     }else if (triesNumber === 2) {
        p2.textContent = (Number(typeGuessHere.value));
     }else if (triesNumber === 3) {
        p3.textContent = (Number(typeGuessHere.value));
     }else if (triesNumber === 4) {
        p4.textContent = (Number(typeGuessHere.value));
     }else if (triesNumber === 5) {
        p5.textContent = (Number(typeGuessHere.value));
     }


     else if (triesNumber === 5) {title.textContent = "You lose!"}
    } 
     if ((Number(typeGuessHere.value))< generateRandomNumber) {title.textContent = "Your number is too low"} 
     else if ((Number(typeGuessHere.value))> generateRandomNumber) {title.textContent = "Your number is too high"} 
     else if ((Number(typeGuessHere.value)) === generateRandomNumber) {title.textContent = "Winner winner - chicken dinner!"} 
    else if (triesNumber === 5) {title.textContent = "You lose!"}
    } 

}

go.addEventListener("click", saveNumbers);





