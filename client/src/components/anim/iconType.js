import React from "react";
import Typing from "react-typing-animation";

import "../style/homepage.css";

export default function AnimatedTypingComponent() {
	return (
		<Typing>
			<Typing.Delay ms={1000} />
		</Typing>
	);
}
