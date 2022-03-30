import React from "react";

import GitHubCard from "../components/apps/githubCard/index";
import "./style/main.css";

// This will be the landing page for our application.

export default function HomePage() {
	return (
		<div>
			<h3 className="header">Welcome to my portfolio</h3>
			<GitHubCard />
		</div>
	);
}
