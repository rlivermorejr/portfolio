import React, { useState } from "react";

import styles from "../dice.module.scss";

export default function BigRoll() {
	const [freq, setFreq] = useState(0);
	const [totalCount, setTotalCount] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

	function counter() {
		setFreq(freq + 1);
	}

	function rollDie3(e) {
		e.preventDefault();
		let chart = document.querySelector(".chart");
		let chart2 = document.querySelector(".chart2");

		let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		// if statement to check if dice has already been rolled
		if (chart.innerHTML === "" && chart2.innerHTML === "") {
			// loop to roll the dice and append results to count array
			for (let i = 1; i < 1001; i++) {
				let int = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
				count[int - 2] = count[int - 2] + 1;
				totalCount[int - 2] = totalCount[int - 2] + 1;
				setTotalCount(totalCount);
			}
			counter();
			// loop to create divs and append counts to chart
			for (let i = 0; i < count.length; i++) {
				chart.innerHTML += `<div className="result">${i + 2}: ${count[i]}</div>`;
				chart2.innerHTML += `<div className="result2">${i + 2}: ${totalCount[i]}</div>`;
			}
		} else {
			// reset chart and loop again to roll the dice and append results to count array
			chart.innerHTML = "";
			chart2.innerHTML = "";
			for (let i = 1; i < 1001; i++) {
				let int = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
				count[int - 2] = count[int - 2] + 1;
				totalCount[int - 2] = totalCount[int - 2] + 1;
				setTotalCount(totalCount);
			}
			counter();
			for (let i = 0; i < count.length; i++) {
				chart.innerHTML += `<div className="result">${i + 2}: ${count[i]}</div>`;
				chart2.innerHTML += `<div className="result2">${i + 2}: ${totalCount[i]}</div>`;
			}
		}
	}

	return (
		<>
			<div id={styles.outerDiv2}>
				<div className={styles.thirdRoll}>
					<input
						type="button"
						value="Roll the Dice 1000 Times!"
						onClick={(e) => rollDie3(e)}
						className={styles.rollButton}
					/>
				</div>
			</div>
			<div id={styles.freq}>Times Rolled: {freq}</div>
			<div id={styles.results}>
				<div id={styles.chart} className="chart"></div>
				<div id={styles.chart2} className="chart2"></div>
			</div>
		</>
	);
}
