window.addEventListener("DOMContentLoaded",()=>{

    function getRandom(){
        return Math.floor(Math.random()*(100-1));
    }

    function highOrLow(v1,v2){
        if(v1 > v2){
            return "your answer is Higher";
        }
        else {
            return "your answer is Lower";
        }
    }
    
    var value=getRandom();
    var count=0;
    const submit = document.querySelector("#submit");
    const guess = document.querySelector("#guessField");
    const guesses = document.querySelector("#guesses");
    const lh = document.querySelector("#lowOrHi");

    submit.addEventListener("click",gameManager);
    guess.addEventListener("keydown",(e)=>{
        if(e.keyCode == 13 || e.which == 13){
            gameManager();
        }
    });
    function gameManager(){
        if(guess.value == value){
            guesses.textContent = `You Won the number was ${value}`;
            lh.textContent="";
            guess.value="";
            endGame();
        }
        else if( ++count === 1){
            guesses.textContent = `guesses: ${guess.value}`;
            lh.textContent=highOrLow(guess.value,value);
            const temp= document.querySelector("#results");
            temp.style.border="1px solid black";
            guess.value="";

        }
        else if( ++count === 10){
            guesses.textContent = `You Lost the number was ${value}`;
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
        count=0;
        res.removeChild(rerun);
    });
    }
});