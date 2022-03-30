import React, { useState } from "react";

// import stylesheet
// import "./styles/diceStyle.module.css";

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
			document.getElementById("freq").innerText = freq;
		}
		for (let i = 0; i < count.length; i++) {
			let div = document.createElement("div");
			div.innerHTML = `${i + 2} : ${count[i]}`;
			chart.append(div);
		}
	}

	return (
		<div>
			<div id="outerDiv">
				<div class="firstRoll">
					<input type="button" value="Roll One Die!" onClick={rollDie} class="button" />
					<input type="text" id="roll1" name="roll1" />
				</div>
				<div class="secondRoll">
					<button type="submit" onClick={rollDie2} class="button">
						Roll Two Dice!
					</button>
					<input type="text" id="roll2" name="roll2" />
				</div>
			</div>
			<div id="outerDiv2">
				<div class="thirdRoll">
					<input type="button" value="Roll the Dice 1000 Times!" onClick={rollDie3} class="button" />
				</div>
			</div>
			<div id="freq"></div>
			<div id="chart"></div>
		</div>
	);
}
