function getRandom(){
    return Math.floor(Math.random()*(1000-1));
}

function highOrLow(v1,v2){
    if(v1 > v2){
        return "your choice is HIGHER than the answer";
    }
    else {
        return "your choice is LOWER than the answer";
    }
}

var value=getRandom();
var count=0;
const submit = document.querySelector("#submit");
const guess = document.querySelector("#guessField");
const guesses = document.querySelector("#guesses");
const lh = document.querySelector("#lowOrHi");

guess.focus();
guess.addEventListener("keydown",(e) => {
    if(e.keyCode == 13 && count < 10 && guess.value <= 1000 && guess.value!="")
        gameChanger();
});
submit.addEventListener("click",() => {
    if(count < 10 && guess.value <= 1000)
        gameChanger();
});

function gameChanger(){
    count++;
    if(guess.value == value){
        guesses.textContent = `You Won! the number was ${value}`;
        results.style.backgroundColor = "green";
        guesses.style.color = "white";
        guesses.style.fontWeight = "800";
        lh.textContent = "";
        guess.value = "";
        endGame();
    }
    else if( count === 1){
        guesses.textContent = `guesses: ${guess.value}`;
        lh.textContent = highOrLow(guess.value, value);
        const temp = document.querySelector("#results");
        temp.style.border = "1px solid black";
        guess.value = "";

    }
    else if( count === 10){
        guesses.textContent = `You Lost! the number was ${value}`;
        results.style.backgroundColor = "red";
        guesses.style.color = "white";
        guesses.style.fontWeight = "800";
        lh.textContent="";
        guess.value="";
        endGame();
    }
    else{
        lh.textContent=highOrLow(guess.value,value);
        guesses.textContent += ` ,${guess.value}`;
        guess.value="";
    }

}

function endGame(){
    count = 10;
    const rerun=document.createElement("button");
    rerun.innerHTML="One More";
    const res= document.querySelector("#results");
    res.appendChild(rerun);
rerun.addEventListener("click",()=>{
    guess.textContent="";
    guesses.textContent="";
    value=getRandom();
    const border_rm= document.querySelector("#results");
    border_rm.style.border = "";
    results.style.backgroundColor = "#1f2937";
    guesses.style.color = "white";
    guesses.style.fontWeight = "none";
    count=0;
    guess.focus();
    res.removeChild(rerun);
});
}