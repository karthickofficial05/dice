
var randomNumber1 = Math.floor(Math.random() * 6) +1 ;
var randomDiceImage= "dice" + randomNumber1 +".png";

var randomImgSource="images/"+ randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSource);


 var randomNumber2 = Math.floor(Math.random() * 6) +1 ;
 var randomImageSource2= "images/dice" + randomNumber2 +".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + (Math.floor(Math.random() * 6) +1 )+".png"); ippadi kuda use pannalam //

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML =" player 1 wins";
}else if( randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML =" player 2 wins";
}else   {
    document.querySelector("h1").innerHTML =" Draw the match";
}