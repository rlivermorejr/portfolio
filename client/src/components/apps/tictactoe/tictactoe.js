import React from "react";
import Board from "./components/Board.js";
import AnimatedTypingComponent from "../../anim/headerType";

import styles from "./tictactoe.module.scss";

const TicTacToe = () => {
	return (
		<>
			<div className={styles.tictactoe}>
				<div>
					<AnimatedTypingComponent title={`Welcome to TicTacToe!`} />
				</div>
				<Board />
			</div>
		</>
	);
};

export default TicTacToe;
