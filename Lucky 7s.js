<!DOCTYPE html>
<html lang="en">
<head>
    <title>Lucky 7's</title>
    <style>
    table, th, td {
      border: 1px solid black;
      border-collapse: collapse;
    }
    </style>
</head>
<body>
<h1>Lucky 7's</h1>
Starting bet: <input id="firstNumber" type="number"><br><br>
<br><br>
<button id="calculate" onClick="hatsOff()">Play</button>
<hr>
<table style="width:100%">
  <tr>
    <td>Starting Bet</td>
    <td><p id="startingBet"></p></td>
  </tr>
  <tr>
    <td>Total Rolls Before Going Broke</td>
    <td><p id="totalRoll"></p></td>
  </tr>
  <tr>
    <td>Highest Amount Won</td>
    <td><p id="highestWon"></p></td>
  </tr>
  <tr>
    <td>Roll Count at Highest Amount Won</td>
    <td><p id="rollCountHighestWon"></p></td>
  </tr>
</table>
</body>
</html>
<script type="text/javascript">
  function hatsOff(){
    let firstNum = parseInt(document.getElementById("firstNumber").value);
  //  document.getElementById("texts").innerHTML = "Here are the even numbers between "+ firstNum + " and " + secondNum+" by " + stepCounter;
document.getElementById("startingBet").innerHTML = firstNum;
  if(firstNum < 0 ){
    alert("Sorry, please try again.");
    return;
  }
let money = firstNum;
let totalRoll = 0;
let highestWon = 0;
let rollCountHighestWon = 0;
while(money >0) {
  let dice1 = rollDice();
  let dice2 = rollDice();
  if ((dice1+dice2) ===7){
    money = money+4;
  }else {
    money = money-1;
  }
if (highestWon < money ){
  highestWon = money;
  rollCountHighestWon = totalRoll +1;
}
  totalRoll++;
}
document.getElementById("totalRoll").innerHTML = totalRoll;
document.getElementById("highestWon").innerHTML = "$"+highestWon;
document.getElementById("rollCountHighestWon").innerHTML = rollCountHighestWon;
 }
 function rollDice(){
   return Math.floor(Math.random() * Math.floor(6))+1;
 }
</script>
