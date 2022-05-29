import React from "react";
import Typing from "react-typing-animation";

import styles from "./header.module.scss";

export default function AnimatedTypingComponent(props) {
	const { title, title2 } = props;

	return (
		<div className={styles.header}>
			{/* <Typing className={styles.typing}> */}
			<div className={styles.line1} id={styles.header}>
				{title}
			</div>

			{/* <Typing /> */}
			<div className={styles.line2} id={styles.wel}>
				{title2}
			</div>
			{/* </Typing> */}
		</div>
	);
}
