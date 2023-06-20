import React from "react";
import {CounterContainer, SecondsCounter} from "./SecondsCounter.jsx";
import * as numbers from "../index.js"
import Alert from "./Alert.jsx";
import Options from "./Options.jsx";

//create your first component
const Main = () => {
return (
	<div className="container-fluid mt-5 d-grid gap-4">
                
                <CounterContainer>

                        <SecondsCounter number={numbers.numberToShow[0]}></SecondsCounter>
                        <SecondsCounter number={numbers.numberToShow[1]}></SecondsCounter>
                        <SecondsCounter number={numbers.numberToShow[2]}></SecondsCounter>
                        <SecondsCounter number={numbers.numberToShow[3]}></SecondsCounter>
                        <SecondsCounter number={numbers.numberToShow[4]}></SecondsCounter>
                        <SecondsCounter number={numbers.numberToShow[5]}></SecondsCounter>

                </CounterContainer>

                <Options/>

                <Alert/>
        </div>
        );
};

export default Main;
