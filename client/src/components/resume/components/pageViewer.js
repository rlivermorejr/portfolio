import React, { useState, useEffect } from "react";

import styles from "./pageViewer.module.scss";

export default function PageViewer(props) {
	const [pdf, setPdf] = useState(null);

	useEffect(() => {
		window.onload = function () {
			if (props.pdf) {
				setPdf(props.pdf);
			} else {
				setPdf(null);
			}
		};
	}, [props.pdf]);

	const displayPDF = () => {
		if (pdf) {
			return (
				<div className={styles.viewer}>
					<object data={pdf} aria-label="pdf" type="application/pdf">
						<p>
							It appears you don't have a PDF plugin for this browser. No biggie... you can
							<a href="../../../assets/pdf/resume.pdf">click here to download the PDF file.</a>
						</p>
					</object>
				</div>
			);
		} else {
			return <div>Loading...</div>;
		}
	};

	return <div>{displayPDF()}</div>;
}
