import React from "react";

// We import our own stylesheet.
import "./style/navbar.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// Here, we display our Navbar
export default function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<div class="dropdown">
						<NavLink className="nav-link" to="/">
							<button className="btn btn-secondary" type="button" href="/">
								Home
							</button>
						</NavLink>
					</div>
					<div class="dropdown">
						<button
							class="btn btn-secondary dropdown-toggle"
							type="button"
							id="dropdownMenu2"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							MongoDB Records
						</button>
						<div class="dropdown-menu" aria-labelledby="dropdownMenu2">
							<NavLink className="dropdown-item" to="/records">
								<button className="dropdown-item" type="button">
									Go To Records
								</button>
							</NavLink>
							<NavLink className="dropdown-item" to="/records/create">
								<button className="dropdown-item" type="button">
									Create a Record
								</button>
							</NavLink>
							<div className="dropdown-divider"></div>
							<a
								className="dropdown-item"
								type="button"
								target="_blank"
								href="https://www.mongodb.com"
								rel="noreferrer"
							>
								MongoDB Website
							</a>
						</div>
					</div>
					<div class="dropdown">
						<button
							class="btn btn-secondary dropdown-toggle"
							type="button"
							id="dropdownMenu2"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							React Apps
						</button>
						<div class="dropdown-menu" aria-labelledby="dropdownMenu2">
							<NavLink className="dropdown-item" to="/react/basketball">
								<button className="dropdown-item" type="button">
									Basketball
								</button>
							</NavLink>
							<NavLink className="dropdown-item" to="/react/diceroller">
								<button className="dropdown-item" type="button">
									Dice Roller
								</button>
							</NavLink>
							<NavLink className="dropdown-item" to="/react/todo">
								<button className="dropdown-item" type="button">
									Todo App
								</button>
							</NavLink>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
