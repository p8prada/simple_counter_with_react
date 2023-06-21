//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Main from "./component/Main.jsx";
import { ContextExclusionPlugin } from "webpack";

var numberToShow = ['0','0','0','0','0','0'];
var intervalId;
var seconds = 0;
var countAlert = 0;
var flag = 1;

window.onload = startTimerUp();

var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var start = document.getElementById("start");

var alert = document.getElementById("alertAt");
var countdown = document.getElementById("countdown");

// Split the seconds adding '0' to the left to fix the six positions of the array
function digitsToArray(){
    numberToShow = Array.from(String(seconds).padStart(6,'0'));
    return numberToShow;
}

// Start the counter Up
function startTimerUp(){
        intervalId = setInterval(updateTimerUp, 1000)
        updateTimerUp();
    }

    // Start the counter Down
function startTimerDown(){
        intervalId = setInterval(updateTimerDown, 1000)
        updateTimerDown();
    }

//Stop the counter
function stopTimer(){
    clearInterval(intervalId);
}

// Update the counter +
function updateTimerUp(){
    checkForAlert();
    digitsToArray();
    ReactDOM.render(<Main/>, document.querySelector("#app"));
    seconds++;
}

// Update the counter -
function updateTimerDown(){
    countDownCheck();
    digitsToArray();
    ReactDOM.render(<Main/>, document.querySelector("#app"));
    seconds--;
}

function checkForAlert(){
    if(countAlert !== 0){
        if(seconds === countAlert){
            stopTimer();
            document.getElementById("alert").classList.add("alert-success");
            document.getElementById("alert").classList.toggle("d-none");
            start.classList.remove("d-none");
        }
    }
}

function countDownCheck(){
    if(seconds === 0){
        stopTimer();
        document.getElementById("alert").classList.add("alert-danger");
        document.getElementById("alert").classList.toggle("d-none");
        start.classList.remove("d-none");
    }
}

function alertDisplay(){
    if (!document.getElementById("alert").classList.contains("d-none")){
        document.getElementById("alert").classList.add("d-none");
    }
}

stop.addEventListener("click", function(){
    stopTimer();
});

reset.addEventListener("click", function(){
    seconds = 0;
    countdown.value = "";
    alert.value = "";
    updateTimerUp();
});

start.addEventListener("click", function(){
    stopTimer();
    console.log(seconds);
    if(seconds > 0){seconds--;};
    startTimerUp();
});

document.getElementById("startAlert").addEventListener("click", function(){
    stopTimer();
    seconds = 0;
    countAlert = parseInt(alert.value);
    alertDisplay();
    document.getElementById("start").classList.add("d-none");
    startTimerUp();
});

document.getElementById("startCountdown").addEventListener("click", function(){
    stopTimer();
    seconds = parseInt(countdown.value);
    alertDisplay();
    document.getElementById("start").classList.add("d-none");
    startTimerDown();
});

export{numberToShow};

