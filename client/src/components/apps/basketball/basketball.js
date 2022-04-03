import Game from "./components/game/game.js";

import styles from "./basketball.module.scss";

export default function Basketball() {
	return (
		<div className={styles.gameIndex}>
			<Game />
		</div>
	);
}
