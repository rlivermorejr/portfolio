import React from "react";

import AnimatedTypingComponent from "../../../../anim/headerType";
import styles from "./venue.module.scss";

export default function Venue(props) {
	return (
		<div className={styles.venue}>
			<div className={styles.homeHeader}>
				<AnimatedTypingComponent title={`Welcome to ${props.venue}`} />
			</div>
		</div>
	);
}
