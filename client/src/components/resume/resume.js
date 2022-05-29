import React from "react";
import AnimatedTypingComponent from "../anim/headerType";
import PageViewer from "./components/pageViewer";

import styles from "./resume.module.scss";
import resumePDF from "../../assets/pdf/resume.pdf";

export default function Resume() {
	return (
		<div className={styles.resume}>
			{/* <div>
				<AnimatedTypingComponent title={"Hello I'm Russell Livermore"} title2={"Welcome to my portfolio"} />
			</div> */}
			<div className={styles.PDF_container}>
				<PageViewer pdf={resumePDF} />
			</div>

			<hr />
		</div>
	);
}
