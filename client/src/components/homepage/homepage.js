import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Image } from "react-bootstrap";

import GitHubCard from "../apps/githubCard/index";
import Bio from "../apps/bio/bio";
import AnimatedTypingComponent from "../anim/headerType";

import styles from "./homepage.module.scss";

const MemoAnimatedTypingComponent = React.memo(({ ...props }) => <AnimatedTypingComponent {...props} />);

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: "5px",
	},
	columns: {
		padding: theme.spacing(2),
		outline: "none !important",
		boxShadow: "none",
		border: "none !important",
		textAlign: "center",
		width: "100%",
		color: "white",
		backgroundColor: "rgb(0, 0, 225, 0.3)",
	},
}));

// This will be the landing page for our application.
export default function HomePage() {
	const classes = useStyles();
	const [offsetY, setOffsetY] = useState(0);

	const handleScroll = () => {
		setOffsetY(window.pageYOffset);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={styles.homepage}
			style={{
				transform: `translateY(${offsetY * 0.3}px)`,
			}}
		>
			<div>
				<MemoAnimatedTypingComponent title={"Hello I'm Russell Livermore"} title2={"Welcome to my portfolio"} />
			</div>
			<div className={classes.root} id={styles.root}>
				<Image
					src={require("../../assets/images/sun.png")}
					alt="sun"
					className={styles.sun}
					style={{
						transform: `translateY(${offsetY * 0.1}px)`,
					}}
				/>
				<Image
					src={require("../../assets/images/planet1.png")}
					alt="planet1"
					className={styles.planet1}
					style={{
						transform: `translateY(${offsetY * 0.4}px)`,
					}}
				/>
				<Image
					src={require("../../assets/images/blackhole.png")}
					alt="blackhole"
					className={styles.blackhole}
					style={{
						transform: `translateY(${offsetY * 0.2}px)`,
					}}
				/>
				<Image
					src={require("../../assets/images/galaxy1.png")}
					alt="galaxy1"
					className={styles.galaxy1}
					style={{
						transform: `translateY(${offsetY * 0.05}px)`,
					}}
				/>
				<Image
					src={require("../../assets/images/planet4.png")}
					alt="planet4"
					className={styles.planet4}
					style={{
						transform: `translateY(${offsetY * 0.2}px)`,
					}}
				/>
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
						<Image
							src={require("../../assets/images/planet2.png")}
							alt="planet2"
							className={styles.planet2}
							style={{
								transform: `translateY(${offsetY * 0.2}px)`,
							}}
						/>
						<Image
							src={require("../../assets/images/planet3.png")}
							alt="planet3"
							className={styles.planet3}
							style={{
								transform: `translateY(${offsetY * 0.1}px) translateX(${offsetY * 0.1}px)`,
							}}
						/>

						<Image
							src={require("../../assets/images/galaxy2.png")}
							alt="galaxy2"
							className={styles.galaxy2}
							style={{
								transform: `translateY(${offsetY * 0.07}px)`,
							}}
						/>

						<Grid item xs={9}>
							<Paper className={classes.columns}>
								<h2 className={styles.skillsHeader}>Skills</h2>
								<div className={styles.skillsList}>
									<Box>
										<Grid alt="languages">
											<h4 className={styles.skillsTitle}>Languages</h4>
											<div className={styles.imageContainer}>
												<div className={styles.image}>
													<img
														src={require("../../assets/images/logos/html.png")}
														alt="html"
														height="100px"
														width="90px"
													/>
													<br />
													<span className={styles.skillName}>HTML</span>
													<br />
													<span className={styles.skillLength}>5 Years</span>
												</div>
												<div className={styles.image}>
													<img
														src={require("../../assets/images/logos/css.png")}
														alt="css"
														height="100px"
														width="90px"
													/>
													<br />
													<span className={styles.skillName}>CSS</span>
													<br />
													<span className={styles.skillLength}>5 Years</span>
												</div>
												<div className={styles.image}>
													<img
														src={require("../../assets/images/logos/javascript.png")}
														alt="javascript"
														height="100px"
														width="90px"
													/>
													<br />
													<span className={styles.skillName}>JavaScript</span>
													<br />
													<span className={styles.skillLength}>5 Years</span>
												</div>
												<div className={styles.image}>
													<img
														src={require("../../assets/images/logos/python.png")}
														alt="python"
														height="100px"
														width="100px"
													/>
													<br />
													<span className={styles.skillName}>Python</span>
													<br />
													<span className={styles.skillLength}>2 Years</span>
												</div>
												<div className={styles.image}>
													<img
														src={require("../../assets/images/logos/sass.png")}
														alt="sass"
														height="100px"
														width="120px"
													/>
													<br />
													<span className={styles.skillName}>SASS</span>
													<br />
													<span className={styles.skillLength}>1 Year</span>
												</div>
											</div>
										</Grid>
										<Image
											src={require("../../assets/images/comet.png")}
											alt="comet"
											className={styles.comet}
											style={{
												transform: `rotate(-45deg) translateX(${offsetY * 0.7}px)`,
											}}
										/>
										<Image
											src={require("../../assets/images/galaxy3.png")}
											alt="galaxy3"
											className={styles.galaxy3}
											style={{
												transform: `translateY(${offsetY * 0.2}px)`,
											}}
										/>
										<hr />
										<Grid alt="frameworks">
											<h4 className={styles.skillsTitle}>Frameworks/RTE's</h4>
											<div className={styles.imageContainer}>
												<div className={styles.image}>
													<img
														src={require("../../assets/images/logos/react.png")}
														alt="react"
														height="100px"
														width="110px"
													/>
													<br />
													<span className={styles.skillName}>React</span>
													<br />
													<span className={styles.skillLength}>2 Years</span>
												</div>
												<div className={styles.image}>
													<img
														src={require("../../assets/images/logos/django.png")}
														alt="django"
														height="100px"
														width="110px"
													/>
													<br />
													<span className={styles.skillName}>Django</span>
													<br />
													<span className={styles.skillLength}>2 Years</span>
												</div>
												<div className={styles.image}>
													<img
														src={require("../../assets/images/logos/node.png")}
														alt="node"
														height="100px"
														width="100px"
													/>
													<br />
													<span className={styles.skillName}>Node.js</span>
													<br />
													<span className={styles.skillLength}>2 Years</span>
												</div>
											</div>
										</Grid>
										<hr />
										<Grid alt="database/interface">
											<h4 className={styles.skillsTitle}>Databases/Interfaces</h4>
											<div className={styles.imageContainer}>
												<div className={styles.image}>
													<img
														src={require("../../assets/images/logos/sqlite.png")}
														alt="sqlite"
														height="100px"
														width="100px"
													/>
													<br />
													<span className={styles.skillName}>SQLite</span>
													<br />
													<span className={styles.skillLength}>1 Year</span>
												</div>
												<div className={styles.image}>
													<img
														src={require("../../assets/images/logos/mysql.png")}
														alt="mysql"
														height="100px"
														width="100px"
													/>
													<br />
													<span className={styles.skillName}>MySQL</span>
													<br />
													<span className={styles.skillLength}>1 Year</span>
												</div>
												<div className={styles.image}>
													<img
														src={require("../../assets/images/logos/firebase.png")}
														alt="firebase"
														height="100px"
														width="100px"
													/>
													<br />
													<span className={styles.skillName}>Firebase</span>
													<br />
													<span className={styles.skillLength}>0.5 Years</span>
												</div>
												<div className={styles.image}>
													<img
														src={require("../../assets/images/logos/mongodb.png")}
														alt="mongodb"
														height="100px"
														width="100px"
													/>
													<br />
													<span className={styles.skillName}>MongoDB</span>
													<br />
													<span className={styles.skillLength}>2 Years</span>
												</div>
											</div>
										</Grid>
										<hr />
										<Grid alt="distribution">
											<h4 className={styles.skillsTitle}>Distribution/Version Control</h4>
											<div className={styles.imageContainer}>
												<div className={styles.image}>
													<img
														src={require("../../assets/images/logos/git.png")}
														alt="git"
														height="100px"
														width="100px"
													/>
													<br />
													<span className={styles.skillName}>Git</span>
													<br />
													<span className={styles.skillLength}>2 Years</span>
												</div>
												<div className={styles.image}>
													<img
														src={require("../../assets/images/logos/heroku.png")}
														alt="heroku"
														height="100px"
														width="100px"
													/>
													<br />
													<span className={styles.skillName}>Heroku</span>
													<br />
													<span className={styles.skillLength}>1 Year</span>
												</div>
											</div>
										</Grid>
										<Image
											src={require("../../assets/images/nebula.png")}
											alt="nebula"
											className={styles.nebula}
											style={{
												transform: `translateY(${offsetY * 0.1}px)`,
											}}
										/>
										<Image
											src={require("../../assets/images/nebula2.png")}
											alt="nebula2"
											className={styles.nebula2}
											style={{
												transform: `translateY(${offsetY * 0.1}px)`,
											}}
										/>
										<hr />
										<Grid alt="Libraries">
											<h4 className={styles.skillsTitle}>Libraries/Other</h4>
											<div className={styles.imageContainer}>
												<div className={styles.image}>
													<img
														src={require("../../assets/images/logos/redux.png")}
														alt="heroku"
														height="100px"
														width="110px"
													/>
													<br />
													<span className={styles.skillName}>Redux</span>
													<br />
													<span className={styles.skillLength}>1 Year</span>
												</div>
												<div className={styles.image}>
													<img
														src={require("../../assets/images/logos/materialui.png")}
														alt="material-ui"
														height="100px"
														width="110px"
													/>
													<br />
													<span className={styles.skillName}>Material-UI</span>
													<br />
													<span className={styles.skillLength}>1 Year</span>
												</div>
												<div className={styles.image}>
													<img
														src={require("../../assets/images/logos/bootstrap.png")}
														alt="bootstrap"
														height="100px"
														width="110px"
													/>
													<br />
													<span className={styles.skillName}>Bootstrap</span>
													<br />
													<span className={styles.skillLength}>3 Years</span>
												</div>
												<div className={styles.image}>
													<img
														src={require("../../assets/images/logos/restapi.png")}
														alt="restapi"
														height="100px"
														width="90px"
													/>
													<br />
													<span className={styles.skillName}>RESTful API's</span>
													<br />
													<span className={styles.skillLength}>2 Years</span>
												</div>
												<div className={styles.image}>
													<img
														src={require("../../assets/images/logos/gunicorn.png")}
														alt="gunicorn"
														height="100px"
														width="140px"
													/>
													<br />
													<span className={styles.skillName}>Gunicorn</span>
													<br />
													<span className={styles.skillLength}>1 Year</span>
												</div>
											</div>
										</Grid>
										<Image
											src={require("../../assets/images/deathstar.png")}
											alt="deathstar"
											className={styles.deathstar}
											style={{
												transform: `translateY(${offsetY * 0.2}px)`,
											}}
										/>
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
