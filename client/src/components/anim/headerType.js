import React from "react";
import Typing from "react-typing-animation";

import "../style/homepage.css";

export default function AnimatedTypingComponent(props) {
	const { title, title2 } = props;

	const checkTitle2 = ({ title2 }) => {
		if (title2 === undefined) {
			return;
		} else {
			return (
				<>
					<Typing.Delay ms={1000} />
					<span id="wel">{title2}</span>
				</>
			);
		}
	};

	return (
		<Typing>
			<span id="header">{title}</span>
			<br />
			<Typing.Delay ms={1000} />
			<span id="wel">{title2}</span>
		</Typing>
	);
}
