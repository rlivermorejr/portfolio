import React from "react";
import Typing from "react-typing-animation";

import styles from "../homepage/homepage.module.scss";

export default function AnimatedTypingComponent(props) {
	const { title, title2 } = props;

	return (
		<Typing className={styles.homepage}>
			<div id={styles.header}>{title}</div>

			<Typing.Delay ms={1000} />
			<div id={styles.wel}>{title2}</div>
		</Typing>
	);
}
