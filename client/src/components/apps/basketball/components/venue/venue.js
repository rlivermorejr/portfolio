import React from "react";

import AnimatedTypingComponent from "../../../../anim/headerType";

export default function Venue(props) {
	return (
		<div>
			<div>
				<AnimatedTypingComponent title={`Welcome to ${props.venue}`} />
			</div>
		</div>
	);
}
