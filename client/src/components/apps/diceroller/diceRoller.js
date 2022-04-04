import React, { useState } from "react";
import AnimatedTypingComponent from "../../anim/headerType";

// import stylesheet
import styles from "./dice.module.scss";

export default function DiceRoller() {
	const [freq, setFreq] = useState(0);
	// const [count, setCount] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

	function counter() {
		setFreq(freq + 1);
	}

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
		let chart = document.querySelector(".chart");
		let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		// if statement to check if dice has already been rolled
		if (chart.innerHTML === "") {
			// loop to roll the dice and append results to count array
			for (let i = 1; i < 1001; i++) {
				let int = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
				count[int - 2] = count[int - 2] + 1;
			}
			counter();
			// loop to create divs and append counts to chart
			for (let i = 0; i < count.length; i++) {
				chart.innerHTML += `<div className="result">${i + 2}: ${count[i]}</div>`;
			}
		} else {
			chart.innerHTML = "";
			for (let i = 1; i < 1001; i++) {
				let int = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
				count[int - 2] = count[int - 2] + 1;
			}
			counter();
			for (let i = 0; i < count.length; i++) {
				chart.innerHTML += `<div className="result">${i + 2}: ${count[i]}</div>`;
			}
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
			<div id={styles.results}>
				<div id={styles.freq}>Times rolled: {freq}</div>
				<div id={styles.myChart} className="chart"></div>
			</div>
		</div>
	);
}
