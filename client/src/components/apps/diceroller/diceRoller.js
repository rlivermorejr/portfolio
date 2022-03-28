import React, { useState } from "react";

// import stylesheet
// import "./styles/diceStyle.module.css";

export default function DiceRoller() {
	const [freq, setFreq] = useState(0);
	const [count, setCount] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

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
	}

	function rollDie3(e) {
		e.preventDefault();
		let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		let chart = document.getElementById("chart");
		for (let i = 1; i < 1001; i++) {
			let int = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
			count[int - 2] = count[int - 2] + 1;
			setFreq(count);
			chart.innerHTML = `${i}: ${count[i]}`;
		}

		// let array2 = document.getElementById("f3");
		// array2.innerHTML = "3: " + count[1];

		// let array3 = document.getElementById("f4");
		// array3.innerHTML = "4: " + count[2];

		// let array4 = document.getElementById("f5");
		// array4.innerHTML = "5: " + count[3];

		// let array5 = document.getElementById("f6");
		// array5.innerHTML = "6: " + count[4];

		// let array6 = document.getElementById("f7");
		// array6.innerHTML = "7: " + count[5];

		// let array7 = document.getElementById("f8");
		// array7.innerHTML = "8: " + count[6];

		// let array8 = document.getElementById("f9");
		// array8.innerHTML = "9: " + count[7];

		// let array9 = document.getElementById("f10");
		// array9.innerHTML = "10: " + count[8];

		// let array10 = document.getElementById("f11");
		// array10.innerHTML = "11: " + count[9];

		// let array11 = document.getElementById("f12");
		// array11.innerHTML = "12: " + count[10];
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
				<div id="rollFreq">
					<div id="f2"></div>
					<div id="f3"></div>
					<div id="f4"></div>
					<div id="f5"></div>
					<div id="f6"></div>
					<div id="f7"></div>
					<div id="f8"></div>
					<div id="f9"></div>
					<div id="f10"></div>
					<div id="f11"></div>
					<div id="f12"></div>
				</div>
			</div>
			<div id="chart"></div>
		</div>
	);
}
