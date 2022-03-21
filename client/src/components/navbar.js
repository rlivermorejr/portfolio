import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
// We import our own stylesheet.
import "./style/navbar.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// Here, we display our Navbar
export default function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<NavLink className="navbar-brand" to="/">
					<img
						style={{ width: 25 + "%" }}
						src="https://d3cy9zhslanhfa.cloudfront.net/media/3800C044-6298-4575-A05D5C6B7623EE37/4B45D0EC-3482-4759-82DA37D8EA07D229/webimage-8A27671A-8A53-45DC-89D7BF8537F15A0D.png"
						alt="mongodb logo"
					></img>
				</NavLink>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<NavLink className="nav-link" to="/">
								Home
							</NavLink>
						</li>
						<li className="nav-item dropdown">
							<span
								className="nav-link dropdown-toggle"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								MongoDB Records
							</span>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="/records">
									Go To Records
								</a>
								<a className="dropdown-item" href="/records/create">
									Create a Record
								</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" target="_blank" href="https://www.mongodb.com" rel="noreferrer noopener">
									MongoDB Website
								</a>
							</div>
						</li>
						<li className="nav-item dropdown">
							<span
								className="nav-link dropdown-toggle"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								React Apps
							</span>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="/react/basketball">
									Basketball
								</a>
								<a className="dropdown-item" href="/react/diceroller">
									Dice Roller
								</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" href="/react/todo">
									Todo App
								</a>
							</div>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/records">
								MongoDB Records
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/records/create">
								Create Record
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>

		// <nav className="navbar navbar-expand-lg navbar-light bg-light">
		// 	<a className="navbar-brand" href="/">
		// 		Navbar
		// 	</a>
		// 	<button
		// 		className="navbar-toggler"
		// 		type="button"
		// 		data-toggle="collapse"
		// 		data-target="#navbarSupportedContent"
		// 		aria-controls="navbarSupportedContent"
		// 		aria-expanded="false"
		// 		aria-label="Toggle navigation"
		// 	>
		// 		<span className="navbar-toggler-icon"></span>
		// 	</button>

		// 	<div className="collapse navbar-collapse" id="navbarSupportedContent">
		// 		<ul className="navbar-nav mr-auto">
		// 			<li className="nav-item active">
		// 				<a className="nav-link" href="/">
		// 					Home <span className="sr-only">(current)</span>
		// 				</a>
		// 			</li>
		// 			<li className="nav-item">
		// 				<a className="nav-link" href="/">
		// 					Link
		// 				</a>
		// 			</li>
		// 			<li className="nav-item dropdown">
		// 				<a
		// 					className="nav-link dropdown-toggle"
		// 					href="/"
		// 					id="navbarDropdown"
		// 					role="button"
		// 					data-toggle="dropdown"
		// 					aria-haspopup="true"
		// 					aria-expanded="false"
		// 				>
		// 					Dropdown
		// 				</a>
		// 				<div className="dropdown-menu" aria-labelledby="navbarDropdown">
		// 					<a className="dropdown-item" href="/">
		// 						Action
		// 					</a>
		// 					<a className="dropdown-item" href="/">
		// 						Another action
		// 					</a>
		// 					<div className="dropdown-divider"></div>
		// 					<a className="dropdown-item" href="/">
		// 						Something else here
		// 					</a>
		// 				</div>
		// 			</li>
		// 			<li className="nav-item">
		// 				<a className="nav-link disabled" href="/">
		// 					Disabled
		// 				</a>
		// 			</li>
		// 		</ul>
		// 	</div>
		// </nav>
	);
}
