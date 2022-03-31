import React from "react";
import { Image } from "react-bootstrap";

import "./style.css";

export default function index() {
	return (
		<div>
			<Image alt="me" id="profilePic" src={require("../../../assets/images/IMG_0671.jpg")} />
		</div>
	);
}
