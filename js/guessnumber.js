console.log("Ich bin Guees number ")

const lblMessage = document.querySelector(".message")
console.log(lblMessage)
console.log(lblMessage.textContent)

const lblNumber = document.querySelector(".number")
console.log(lblNumber)
console.log(lblNumber.textContent)

const lblScore = document.querySelector(".score")
console.log(lblScore)
console.log(lblScore.textContent)

const lblHighScore = document.querySelector(".highscore")
console.log(lblHighScore)
console.log(lblHighScore.textContent)

const inpGuess  = document.querySelector(".guess")
console.log(inpGuess)

const pbAgain =document.querySelector(".again")
const pbCheck =document.querySelector(".check")

function createGuessThisNumber(min,max){
    return Math.floor(Math.random()*(max-min)+min)

}
let guess =Math.trunc(inpGuess)
let guessThisNumber= Math.trunc(createGuessThisNumber(1,20))
let howManyTries = 0
let bestHowManyTries= Infinity
function again(btn) {
    guessThisNumber = Math.trunc(createGuessThisNumber(1,20))
    //lblNumber.textContent= guessThisNumber
    console.log("guessThisNumber:" + guessThisNumber)

    lblMessage.textContent="Start guessing..."

    howManyTries=0
    lblScore.textContent= howManyTries
    console.log("tries: "+ howManyTries)
}
function newHighScore (){

    bestHowManyTries=howManyTries
    lblHighScore.textContent=bestHowManyTries



}
function youWon(){
    lblMessage.textContent= "Your Guess: "+inpGuess.value.toString()+". Was Correct"
    if (howManyTries < bestHowManyTries){    newHighScore() }

}
function start(btn){
    howManyTries++
    lblScore.textContent= howManyTries
    guess = inpGuess.value
    console.log(inpGuess.value +" ?" + guessThisNumber)

    if(guess == guessThisNumber){
       youWon()

    }
}
pbAgain.addEventListener("click",again)
pbCheck.addEventListener("click",start)
