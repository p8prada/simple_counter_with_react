import React from "react";

const Options = () => {
	return (
        <div>
            <div className="row d-grid gap-2 d-flex justify-content-center">
                <div className="col-1">
                    <button type="button" id="stop" className="btn btn-danger" style={{width: "70px"}}>Stop</button>
                </div>
                <div className="col-1">
                    <button type="button" id="reset" className="btn btn-secondary" style={{width: "70px"}}>Reset</button>
                </div>
                <div className="col-1">
                    <button type="button" id="start" className="btn btn-success" style={{width: "70px"}}>Start</button>
                </div>
            </div>

            <div className="row mt-5 d-flex justify-content-end">
                <div className="col-6 d-grid gap-2 d-flex justify-content-end align-items-center">
                    <label className="text-white" for="AlertAt">Get an alert at: </label>
                    <input id="alertAt" name="alertAt" type="text" style={{width: "60px"}} ></input>
                    <button type="button" id="startAlert" className="btn btn-success" style={{width: "70px"}}>Start</button>
                </div>

            </div>

            <div className="row mt-3 d-flex justify-content-end">
                <div className="col-6 d-grid gap-2 d-flex justify-content-end align-items-center">
                    <label className="text-white" for="countdown">Countdown from: </label>
                    <input id="countdown" name="countdown" type="text" style={{width: "60px"}} ></input>
                    <button type="button" id="startCountdown" className="btn btn-success" style={{width: "70px"}}>Start</button>
                </div>
            </div>

        </div>
    );
};


export default Options;