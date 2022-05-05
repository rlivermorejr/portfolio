import React from "react";
import Board from "./components/Board.js";

import styles from "./tictactoe.module.scss";

const TicTacToe = () => {
	return (
		<div className={styles.tictactoe}>
			<h1>Tic Tac Toe</h1>
			<Board />
		</div>
	);
};

export default TicTacToe;
