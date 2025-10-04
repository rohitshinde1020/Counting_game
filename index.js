let number = Math.floor(Math.random() * 100) + 1;

let prevguess = document.getElementById('prevguess');
let currans = document.getElementById('currans');
let hiorlow = document.getElementById('hiorlow');

let submitguess = document.getElementById('submitguess');
let userinput = document.getElementById('userinput');

let guesscount = 1;
let resetbutton = document.querySelector('.resetbutton');

resetbutton.style.display = 'none';

submitguess.addEventListener('click', body);

function body() {
    const userguess = Number(userinput.value);

    if (guesscount === 1) {
        prevguess.textContent = "Previous guesses:";
    }

    prevguess.textContent += " " + userguess;

    if (userguess === number) {
        currans.textContent = "✅ Right answer! You got it correct";
        currans.style.backgroundColor = "green";
        hiorlow.textContent = '';
        setGameOver();
    }

    else if (guesscount === 10) {
        currans.textContent = "❌ Game over";
        hiorlow.textContent = "";
        prevguess.textContent = " ";
        setGameOver();
    }

    else {
        currans.textContent = "Wrong!";
        currans.style.backgroundColor = "red";

        if (userguess > number) {
            hiorlow.textContent = "The number is too high";
        }

        else {
            hiorlow.textContent = "The number is too low";
        }
    }


    guesscount++;
    userinput.value = "";
    userinput.focus();
}

function setGameOver() {
    userinput.disabled = true;
    submitguess.disabled = true;
    resetbutton.style.display = 'inline';
}

function resetgame() {
    guesscount = 1;
    const random = Math.floor(Math.random() * 100) + 1;
    number = random;
    prevguess.textContent = "";
    currans.textContent = "";
    hiorlow.textContent = "";

    userinput.disabled = false;
    submitguess.disabled = false;

    userinput.value = '';
    userinput.focus();


}
resetbutton.addEventListener('click', resetgame);




