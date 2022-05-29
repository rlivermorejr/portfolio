import React from "react";

import AnimatedTypingComponent from "../../../../anim/headerType";

const MemoAnimatedTypingComponent = React.memo(({ ...props }) => <AnimatedTypingComponent {...props} />);

export default function Venue(props) {
	return (
		<div>
			<div>
				<MemoAnimatedTypingComponent title={`Welcome to ${props.venue}`} />
			</div>
		</div>
	);
}
