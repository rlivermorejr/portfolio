import Team from "./team.js";
import Venue from "./venue.js";
import Owls from "../img/birds.png";
import Snakes from "../img/snake.png";

export default function Game(props) {
	return (
		<div>
			<Venue venue="Rabbit Hole Arena" />
			<div className="main">
				<p className="home">
					<Team name="Snakes" logo={Snakes} />
				</p>
				<p className="visitor">
					<Team name="Owls" logo={Owls} />
				</p>
			</div>
		</div>
	);
}
