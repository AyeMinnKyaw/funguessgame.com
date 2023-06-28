let randomNumber = Math.floor(Math.random()*101);
let aliveNumber = 5;

const guess = () => {
    guessNumber = document.querySelector('input').value;
    checkInvalidNum();
    reduceAliveNum();
    checkUserNum();
    checkUserNum1();
    if (aliveNumber == 0){
        alert ("Game Over");
        document.location = 'play.html';
    }

}

const reduceAliveNum = () => {
    aliveNumber -= 1;
    document.getElementById('showAlive').innerHTML ="Heart = " +aliveNumber+"/5";
}

const checkInvalidNum = () => {
    if(guessNumber > 100) {
        alert ("Can't access over 100");
    } else if (guessNumber < 0) {
        alert ("Can't access under 0");
    }
}  

const checkUserNum = () => {
    if (guessNumber > randomNumber && guessNumber < 100) {
        document.getElementById('showHint').innerHTML = "Greater than generated number";
    } else if(guessNumber < randomNumber && guessNumber > 0) {
        document.getElementById('showHint').innerHTML = "Less than generated number";
    } else if(guessNumber == randomNumber) {
        alert ("Congratulation");
        document.location = 'play.html';
    } else if (guessNumber == 0) {
        alert ("Please enter number");
    }
}

const checkUserNum1 = () => {
    if (guessNumber > randomNumber && guessNumber < 100) {
        document.getElementById('showHint').innerHTML = "";
    } else if(guessNumber < randomNumber && guessNumber > 0) {
        document.getElementById('showHint').innerHTML = "";
    } else if(guessNumber == randomNumber) {
        alert ("Congratulation");
        document.location = 'play.html';
    } else if (guessNumber == 0) {
        alert ("Please enter number");
    }
}
const show_answer = () => {
    document.getElementById('showAnswer').innerHTML = randomNumber;
}

const reLoad = () => {
    alert ("You clicked Surrender. Therefore, Game Over");
    document.location = 'index1.html';
}

// check-box demo start here....
const checkBoxx = document.querySelector('hint')

checkBoxx.addEventListener("change", () => {
    if (checkBoxx.checked) {
        checkUserNum().disable;
    } else {
        checkUserNum1();
    }
});