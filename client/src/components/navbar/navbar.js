import React from "react";

// We import our own stylesheet.
import styles from "./navbar.module.scss";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

// Here, we display our Navbar
export default function Navbar() {
	return (
		<div className={styles.navbar}>
			<nav className="navbar navbar-expand-sm navbar-light bg-light">
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<div className="dropdown">
						<NavLink className="nav-link" to="/">
							<button className="btn btn-secondary" type="button" href="/">
								Home
							</button>
						</NavLink>
					</div>

					<Dropdown>
						<Dropdown.Toggle variant="secondary" id="dropdown-basic">
							MongoDB Records
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="/records">Go To Records</Dropdown.Item>
							<Dropdown.Item href="/records/create">Create a Record</Dropdown.Item>
							<Dropdown.Item target="_blank" rel="noopener noreferrer" href="https://www.mongodb.com">
								MongoDB Website
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown>
						<Dropdown.Toggle variant="secondary" id="dropdown-basic">
							React Apps
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="/react/diceroller">Dice Roller</Dropdown.Item>
							<Dropdown.Item href="/react/basketball">Basketball</Dropdown.Item>
							<Dropdown.Item href="/react/tictactoe">TicTacToe</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</nav>
		</div>
	);
}
