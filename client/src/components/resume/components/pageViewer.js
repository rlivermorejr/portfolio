import React, { useState, useEffect } from "react";

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
				<object data={pdf} aria-label="pdf" type="application/pdf" width="100%" height="1000">
					<p>
						It appears you don't have a PDF plugin for this browser. No biggie... you can{" "}
						<a href="../../../assets/pdf/resume.pdf">click here to download the PDF file.</a>
					</p>
				</object>
			);
		} else {
			return <div>Loading...</div>;
		}
	};

	return <div>{displayPDF()}</div>;
}
