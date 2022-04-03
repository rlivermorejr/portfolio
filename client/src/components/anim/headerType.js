import React from "react";
import Typing from "react-typing-animation";

import styles from "../homepage/homepage.module.scss";

export default function AnimatedTypingComponent(props) {
	const { title, title2 } = props;

	const checkTitle2 = ({ title2 }) => {
		if (title2 === undefined) {
			return;
		} else {
			return (
				<>
					<Typing.Delay ms={1000} />
					<span id={styles.wel}>{title2}</span>
				</>
			);
		}
	};

	return (
		<Typing className={styles.homepage}>
			<span id={styles.header}>{title}</span>
			<br />
			<span id={styles.wel}>{checkTitle2({ title2 })}</span>
		</Typing>
	);
}
