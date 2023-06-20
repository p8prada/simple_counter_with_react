import React from "react";
import PropTypes from "prop-types";

export function CounterContainer({children}){
	return (
		<div className="row d-flex justify-content-center">
			<div className="col-1 mx-3 p-0">
				<i className="clock fa-regular fa-clock"></i>
			</div>

			<div className="col-1">
				<h1 className="dots">:</h1>
			</div>

			{children}

		</div>
	);
}

export function SecondsCounter(props){
	return (
		<div className="col-1 mx-1">
            <span className="second pb-2">{props.number}</span>
		</div>
    );
}

SecondsCounter.propTypes = {
	number: PropTypes.string,
};

// export default CounterContainer;
// export default SecondsCounter;