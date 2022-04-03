import Team from "../team/team.js";
import Venue from "../venue/venue.js";
import Owls from "../../img/birds.png";
import Snakes from "../../img/snake.png";

import styles from "./game.module.scss";

export default function Game(props) {
	return (
		<div className={styles.game}>
			<Venue venue="Rabbit Hole Arena" />
			<div className={styles.main}>
				<p className={styles.homeTeam}>
					<Team name="Snakes" logo={Snakes} />
				</p>
				<p className={styles.visitorTeam}>
					<Team name="Owls" logo={Owls} />
				</p>
			</div>
		</div>
	);
}
