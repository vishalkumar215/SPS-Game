let userScore =0;
let compScore =0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = ()=>{
    console.log("Game was Draw.");
    msg.innerHTML ="Game Was Draw. Play Again";
    msg.style.backgroundColor ="#272838";


}

const showWinner = (userWin , userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerHTML = userScore;
        console.log("You Win");
        // msg.innerHTML ="You Win!";
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="#5FB129";
    }else{
        compScore++;
        compScorePara.innerHTML = compScore;
        console.log("You Lose");
        // msg.innerHTML="You Lose. Better luck next Time";
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor ="#ED3C20";

    }
}


const genCompChoices =() =>{
    const options =["rock", "paper" ,"scissor"];
    const randomIdx =   Math.floor(Math.random() * 3);
    return options[randomIdx];

}


const playGame =(userChoice) =>{
    console.log(`user Choice = ${userChoice}`)

    // generate computer choice

    const compChoice = genCompChoices();
    console.log(`computer Choice = ${compChoice}`)

    if(userChoice === compChoice){
        // Draw condition
        drawGame();
    }else {
         let userWin = true;
         if(userChoice === "rock"){
            // comp have choice paper & scissor
            userWin =compChoice ==="paper" ? false :true;
         }else if( userChoice === "paper"){
            // comp have choice rock and scissors
            userWin = compChoice === "scissor" ?false : true;
         }else{
            // rock , papers
            userWin = compChoice === "rock" ? false : true; 
         }
         showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice is clicked  ," , userChoice);
        playGame(userChoice);
    });
    
});