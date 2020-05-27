
let game = document.getElementById('display');
let status = document.getElementById('status');
let randomNumber = 0 
let score = 0
let roll = document.getElementById("btn-roll");
let reset= document.getElementById("reset");
let scoreRead = document.getElementById("score");
let result = document.getElementById("result");







function getRandom(){
    randomNumber = Math.floor(Math.random() * 6) + 1;
    score = score + randomNumber;
    result.textContent = score;
    if(randomNumber == 1) {game.innerHTML = '<img src="img/dice1.png"/>';
        roll.style.visibility = "hidden";
        result.textContent = "You loose";
}
    else if(randomNumber == 2)  {game.innerHTML = '<img src="img/dice2.png"/>';}
    else if(randomNumber == 3)  {game.innerHTML = '<img src="img/dice3.png"/>';}
    else if(randomNumber == 4)  {game.innerHTML = '<img src="img/dice4.png"/>';}
    else if(randomNumber == 5)  {game.innerHTML = '<img src="img/dice5.png"/>';}
    else   {game.innerHTML = '<img src="img/dice6.png"/>';}
}


roll.addEventListener("click",()=>{
getRandom();
if (score >=20) {
    // console.log("you win");
    click.style.visibility = "hidden";
    result.textContent = "You win";
}else if (score == 1) {
    console.log("you loose");

    
}
})


reset.addEventListener("click",()=>{
location.reload(true);
})
