import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import GitHubCard from "./apps/githubCard/index";
import Bio from "./apps/bio/index";
import AnimatedTypingComponent from "./anim/headerType";

import "./style/homepage.css";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	columns: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
		width: "100%",
	},
}));

// This will be the landing page for our application.
export default function HomePage() {
	const classes = useStyles();

	return (
		<div>
			<div className="homeHeader">
				<AnimatedTypingComponent title={"Hello I'm Russell Livermore"} title2={"Welcome to my portfolio"} />
			</div>
			<div className={classes.root}>
				<Box>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Paper className={classes.columns}>
								<Bio />
							</Paper>
						</Grid>
						<Grid item xs={3}>
							<Paper className={classes.columns}>
								<GitHubCard />
							</Paper>
						</Grid>
						<Grid item xs={9}>
							<Paper className={classes.columns}>Top 5 Skills</Paper>
						</Grid>
					</Grid>
				</Box>
			</div>
		</div>
	);
}
