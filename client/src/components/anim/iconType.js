import React from "react";
import Typing from "react-typing-animation";

import "../style/homepage.css";

export default function AnimatedTypingComponent() {
	return (
		<Typing>
			<span id="header">Hello, I'm Russell Livermore</span>
			<br />
			<Typing.Delay ms={1000} />
			<span id="wel">Welcome to my portfolio!</span>
		</Typing>
	);
}
