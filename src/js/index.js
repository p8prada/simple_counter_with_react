//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Main from "./component/Main.jsx";

var numberToShow = ['0','0','0','0','0','0'];
var intervalId;
var seconds = 0;

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

function updateTimer(){
    digitsToArray();
    //console.log(numberToShow);
    ReactDOM.render(<Main/>, document.querySelector("#app"));
    
    seconds++;
}

export{numberToShow};

