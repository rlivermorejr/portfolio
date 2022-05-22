import React from "react";
import { Image } from "react-bootstrap";

import styles from "./bio.module.scss";

export default function Bio() {
	return (
		<div className={styles.bio}>
			<div className={styles.container}>
				<div className={styles.imageContainer}>
					<Image alt="me" id={styles.profilePic} src={require("../../../assets/images/IMG_0671.jpg")} />
				</div>
				<div className={styles.bioText}>Test</div>
			</div>
		</div>
	);
}
