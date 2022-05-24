import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import GitHubCard from "../apps/githubCard/index";
import Bio from "../apps/bio/bio";
import AnimatedTypingComponent from "../anim/headerType";

import styles from "./homepage.module.scss";

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
		<div className={styles.homepage}>
			<div className={styles.homeHeader}>
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
							<Paper className={classes.columns}>
								<h2 className={styles.skillsHeader}>Skills</h2>
								<div className={styles.skillsList}>
									<Box>
										<Grid alt="languages">
											<h4 className={styles.skillsTitle}>Languages</h4>
											<img src={require("../../assets/images/html.png")} alt="html" height="100px" width="100px" />
											<img src={require("../../assets/images/css.png")} alt="css" height="110px" width="110px" />
											<img
												src={require("../../assets/images/javascript.png")}
												alt="javascript"
												height="100px"
												width="90px"
											/>
											<img src={require("../../assets/images/python.png")} alt="python" height="130px" width="130px" />
										</Grid>
										<Grid alt="frameworks">
											<h4 className={styles.skillsTitle}>Frameworks</h4>
											<img src={require("../../assets/images/react.png")} alt="react" height="50px" width="50px" />
											<img src={require("../../assets/images/django.png")} alt="django" height="50px" width="50px" />
											<img src={require("../../assets/images/node.png")} alt="node" height="50px" width="50px" />
										</Grid>
										<Grid alt="database/interface">
											<h4 className={styles.skillsTitle}>Databases/Interfaces</h4>
											<img src={require("../../assets/images/sqlite.png")} alt="sqlite" height="50px" width="50px" />
											<img src={require("../../assets/images/mysql.png")} alt="mysql" height="60px" width="70px" />
											<img
												src={require("../../assets/images/firebase.png")}
												alt="firebase"
												height="50px"
												width="50px"
											/>
											<img src={require("../../assets/images/mongodb.png")} alt="mongodb" height="50px" width="50px" />
											<img src={require("../../assets/images/api.png")} alt="api" height="50px" width="50px" />
										</Grid>
										<Grid alt="styling">
											<img
												src={require("../../assets/images/materialui.png")}
												alt="material-ui"
												height="50px"
												width="50px"
											/>
											<img
												src={require("../../assets/images/bootstrap.png")}
												alt="bootstrap"
												height="50px"
												width="60px"
											/>
											<img src={require("../../assets/images/sass.png")} alt="sass" height="50px" width="50px" />
										</Grid>
										<Grid alt="distribution">
											<img src={require("../../assets/images/git.png")} alt="git" height="50px" width="50px" />
											<img src={require("../../assets/images/heroku.png")} alt="heroku" height="50px" width="50px" />
										</Grid>
									</Box>
								</div>
							</Paper>
						</Grid>
					</Grid>
				</Box>
			</div>
		</div>
	);
}
