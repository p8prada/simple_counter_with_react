import React from "react";
import PropTypes from "prop-types";

//create your first component
const SecondsCounter = (props) => {
	return (
		<div className="col-1 mx-1">
            <span className="second pb-2">{props.number}</span>
		</div>
    );
};

SecondsCounter.propTypes = {
	number: PropTypes.string,
};

export default SecondsCounter;