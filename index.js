var randomNumber1=Math.floor(Math.random()*6)+1;

var imageAddr1="./images/dice"+randomNumber1+".png";

document.querySelector(".img1").setAttribute("src",imageAddr1);

var randomNumber2=Math.floor(Math.random()*6)+1;

var imageAddr2="./images/dice"+randomNumber2+".png";

document.querySelector(".img2").setAttribute("src",imageAddr2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🚩 Player 1 wins";
}
else if(randomNumber1==randomNumber2){
    document.querySelector("h1").textContent="Draw";
}
else{
    document.querySelector("h1").textContent="Player 2 wins 🚩";
}