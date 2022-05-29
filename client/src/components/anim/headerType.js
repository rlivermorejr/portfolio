import React from "react";
import Typing from "react-typing-animation";

import styles from "./header.module.scss";

export default function AnimatedTypingComponent(props) {
	const { title, title2 } = props;

	return (
		<div className={styles.header}>
			<Typing className={styles.typing}>
				<div id={styles.header}>{title}</div>

				<Typing.Delay ms={1000} />
				<div id={styles.wel}>{title2}</div>
			</Typing>
		</div>
	);
}
