import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";

class GitHubCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {},
			active: false,
		};
	}

	handleToggle() {
		if (this.state.active) {
			return;
		} else {
			try {
				fetch("https://api.github.com/users/rlivermorejr")
					.then((response) => response.json())
					.then((data) => this.setState({ user: data })) && this.setState({ active: true });
			} catch (err) {
				console.error("Unable to fetch URL", err);
			}
		}
	}

	render() {
		return (
			<div className="App">
				<Accordion>
					<AccordionSummary>
						<Button variant="outlined" onClick={this.handleToggle.bind(this)} disableElevation>
							GET USER
						</Button>
					</AccordionSummary>
					<Card className="root">
						<CardMedia style={{ height: 150, width: 150 }} image={this.state.user.avatar_url} title="Github Avatar" />
						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								User: {this.state.user.login}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								Public Repos: {this.state.user.public_repos}
								{console.log(this.state.user)}
							</Typography>
						</CardContent>
						<CardActions>
							<Typography variant="body2" color="textSecondary" component="p">
								Followers: {this.state.user.followers}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								Following: {this.state.user.following}
							</Typography>
						</CardActions>
					</Card>
				</Accordion>
			</div>
		);
	}
}

export default GitHubCard;
