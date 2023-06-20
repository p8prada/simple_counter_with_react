//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Main from "./component/Main.jsx";
import { func } from "prop-types";
import { SecondsCounter } from "./component/SecondsCounter";

var numberToShow = ['0','0','0','0','0','0'];
var intervalId;
var seconds = 0;
var countAlert = 0;

window.onload = startTimer();

// Split the seconds adding '0' to the left to fix the six positions of the array
function digitsToArray(){
    numberToShow = Array.from(String(seconds).padStart(6,'0'));
    return numberToShow;
}

function startTimer(){
    intervalId = setInterval(updateTimer, 1000)
    updateTimer();
}

function stopTimer(){
    clearInterval(intervalId);
}

function updateTimer(){
    checkForAlert();
    digitsToArray();
    ReactDOM.render(<Main/>, document.querySelector("#app"));
    seconds++;
}

function checkForAlert(){
    if(countAlert !== 0){
        if(seconds === countAlert){
            console.log(seconds + " " + countAlert);
            stopTimer();
            document.getElementById("alert").style.display = "block";
        }
    }
}

var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var start = document.getElementById("start");

var alert = document.getElementById("alertAt");
var countdown = document.getElementById("countdown");

stop.addEventListener("click", function(){
    stopTimer();
});

reset.addEventListener("click", function(){
    seconds = 0;
    updateTimer();
});

start.addEventListener("click", function(){
    stopTimer();
    seconds--;
    startTimer();
});


document.getElementById("startAlert").addEventListener("click", function(){
    stopTimer();
    seconds = 0;
    console.log(parseInt(alert.textContent));
    countAlert = parseInt(alert.textContent);
    startTimer();
});



export{numberToShow};

