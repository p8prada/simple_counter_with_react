import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";
import * as numbers from "../index.js"

//create your first component
const Main = () => {
	return (
	<div className="container-fluid ">
            <div className="row d-flex justify-content-center">
                <div className="col-1 mx-3 p-0">
                        <i className="clock fa-regular fa-clock"></i>
                </div>
                <div className="col-1">
                        <h1 className="dots">:</h1>
                </div>
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
