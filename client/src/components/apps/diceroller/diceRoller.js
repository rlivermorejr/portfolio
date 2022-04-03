import React, { useState } from "react";
import AnimatedTypingComponent from "../../anim/headerType";

// import stylesheet
import styles from "./dice.module.scss";

export default function DiceRoller() {
	const [freq, setFreq] = useState(0);
	// const [count, setCount] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

	function rollDie(e) {
		e.preventDefault();
		let num1 = Math.ceil(Math.random() * 6);
		document.getElementById("roll1").value = num1;
	}

	function rollDie2(e) {
		e.preventDefault();
		let num2 = Math.ceil(Math.random() * 6);
		let num3 = Math.ceil(Math.random() * 6);
		document.getElementById("roll2").value = num2 + num3;
		return num2 + num3;
	}

	function rollDie3(e) {
		e.preventDefault();
		let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		let chart = document.getElementById("chart");
		let result = [];
		for (let i = 1; i < 1001; i++) {
			let int = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
			count[int - 2] = count[int - 2] + 1;
			result.push(count[int - 2]);
			document.getElementById("freq").innerText = result;
		}
		for (let i = 0; i < count.length; i++) {
			let div = document.createElement("div");
			div.innerText = `${i + 2} : ${count[i]}`;
			chart.append(div);
		}
	}

	return (
		<div className={styles.dice}>
			<div className={styles.homeHeader}>
				<AnimatedTypingComponent title={`Welcome to the dice roller!`} />
			</div>
			<div id={styles.outerDiv}>
				<div class={styles.firstRoll}>
					<input type="button" value="Roll One Die!" onClick={rollDie} className={styles.rollButton} />
					<input type="text" id="roll1" name="roll1" />
				</div>
				<div class={styles.secondRoll}>
					<button type="submit" onClick={rollDie2} className={styles.rollButton}>
						Roll Two Dice!
					</button>
					<input type="text" id="roll2" name="roll2" />
				</div>
			</div>
			<div id={styles.outerDiv2}>
				<div className={styles.thirdRoll}>
					<input type="button" value="Roll the Dice 1000 Times!" onClick={rollDie3} className={styles.rollButton} />
				</div>
			</div>
			<div id={styles.freq}></div>
			<div id={styles.chart}></div>
		</div>
	);
}
