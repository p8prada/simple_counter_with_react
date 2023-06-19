import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";
import * as numbers from "../index.js"

//create your first component
const Main = () => {
	return (
		<div className="container-fluid ">
            <div className="row d-flex justify-content-center">

                <i class="clock fa-regular fa-clock"></i>

                    <SecondsCounter number={numbers.numberToShow[0]}></SecondsCounter>
                    <SecondsCounter number={numbers.numberToShow[1]}></SecondsCounter>
                    <SecondsCounter number={numbers.numberToShow[2]}></SecondsCounter>
                    <SecondsCounter number={numbers.numberToShow[3]}></SecondsCounter>
                    <SecondsCounter number={numbers.numberToShow[4]}></SecondsCounter>
                    <SecondsCounter number={numbers.numberToShow[5]}></SecondsCounter>
            </div>
        </div>
	);
};

export default Main;
