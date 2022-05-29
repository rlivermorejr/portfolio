import React from "react";
import PageViewer from "./components/pageViewer";

import styles from "./resume.module.scss";
import resumePDF from "../../assets/pdf/resume.pdf";

export default function Resume() {
	return (
		<div className={styles.resume}>
			<div className={styles.desc}>
				I have put my Python and Django projects on my resume, since all of my React/JavaScript is shown on this
				website.
			</div>
			<hr />
			<div className={styles.PDF_container}>
				<PageViewer pdf={resumePDF} />
			</div>
		</div>
	);
}
