import React from "react";
import Typing from "react-typing-animation";

import styles from "../homepage/homepage.module.scss";

export default function AnimatedTypingComponent(props) {
	const { title, title2 } = props;

	return (
		<Typing className={styles.homepage}>
			<p id={styles.header}>{title}</p>

			<Typing.Delay ms={1000} />
			<p id={styles.wel}>{title2}</p>
		</Typing>
	);
}
