let heads = document.getElementById("heads");
let tails = document.getElementById("tails");
let displayDiv = document.getElementById("display");


heads.addEventListener("click", (e) => coinFlip(e.target.textContent));
tails.addEventListener("click", (e) => coinFlip(e.target.textContent));


function coinFlip(guessVal){
    
    let val = Math.round(Math.random());
    
    let flipVal = "";
    if(val === 0){
        flipVal = "Heads";
    } else{
        flipVal = "Tails";
    }
    
    let msg = "";
    if(flipVal === guessVal){
        msg = "Good";
    } else{
        msg = "Bad";
    }
    
    displayDiv.innerHTML = `
    <p>You guessed ${guessVal}.</p> 
    <p>The coin flips and comes up ${flipVal}!</p> 
    <p>${msg} Guess!</p>`;
}