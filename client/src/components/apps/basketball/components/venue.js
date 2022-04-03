import React from "react";

import AnimatedTypingComponent from "../../../anim/headerType";

import "../../../style/homepage.css";

export default function Venue(props) {
	return (
		<div className="homeHeader">
			<AnimatedTypingComponent title={`Welcome to ${props.venue}`} />
		</div>
	);
}
