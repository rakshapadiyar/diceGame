var randomNumber=Math.random();
randomNumber=randomNumber*6;
var ans=Math.floor(randomNumber)+1;
var randomDice= "images/dice"+ans+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDice);


var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
var ans2=Math.floor(randomNumber2)+1;
var randomDice2= "images/dice"+ans2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDice2);

if(ans>ans2)
{
document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(ans2>ans)
{
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else
{
    document.querySelector("h1").innerHTML="🚩 It's a draw! 🚩 ";
}