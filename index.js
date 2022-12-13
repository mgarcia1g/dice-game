function rollDice(){
    let player1Roll = Math.floor(Math.random() * 6)+1;

    let player2Roll = Math.floor(Math.random() * 6)+1;
  

     document.querySelector(".player1Dice").src="./images/dice"+player1Roll+".png";
     document.querySelector(".player2Dice").src="./images/dice"+player2Roll+".png";
     document.querySelector("button").innerHTML="Try again!"
    
     let clearWinner = player1Roll > player2Roll ?  document.querySelector(".winner").innerHTML="Player 1 Wins!" : document.querySelector(".winner").innerHTML=" Player 2 Wins!";

     player1Roll === player2Roll ? document.querySelector(".winner").innerHTML="Its a tie!!!" : clearWinner;


}
