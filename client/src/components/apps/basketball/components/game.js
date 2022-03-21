import Team from "./team.js";
import Venue from "./venue.js";
import Owls from "../img/birds.png";
import Snakes from "../img/snake.png";

function Game(props) {
	return (
		<div>
			<Venue venue="Rabbit Hole Arena" />
			<div class="main">
				<p class="home">
					<Team name="Snakes" logo={Snakes} />
				</p>
				<p class="visitor">
					<Team name="Owls" logo={Owls} />
				</p>
			</div>
		</div>
	);
}

export default Game;
