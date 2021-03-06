import React from "react";
import AnimatedTypingComponent from "../../anim/headerType";

// import stylesheet
import styles from "./dice.module.scss";

import SingleRoll from "./components/SingleRoll";
import BigRoll from "./components/BigRoll";

const MemoAnimatedTypingComponent = React.memo(({ ...props }) => <AnimatedTypingComponent {...props} />);

export default function DiceRoller() {
	return (
		<div className={styles.dice}>
			<div className={styles.header}>
				<MemoAnimatedTypingComponent title={`Welcome to Dice Roller!`} />
			</div>
			<SingleRoll />
			<BigRoll />
		</div>
	);
}
