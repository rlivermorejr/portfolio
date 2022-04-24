import styles from "../dice.module.scss";

const SingleRoll = () => {
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
	return (
		<div id={styles.outerDiv}>
			<div class={styles.firstRoll}>
				<input type="button" value="Roll One Die!" onClick={(e) => rollDie(e)} className={styles.rollButton} />
				<input type="text" id="roll1" name="roll1" className={styles.roll1} value="0" />
			</div>
			<div className={styles.secondRoll}>
				<button type="submit" onClick={(e) => rollDie2(e)} className={styles.rollButton}>
					Roll Two Dice!
				</button>
				<input type="text" id="roll2" name="roll2" className={styles.roll2} value="0" />
			</div>
		</div>
	);
};

export default SingleRoll;
