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
				<div className={styles.bioText}>
					I am actively looking for a career, not a job. I have worked in sales and customer service for a long time,
					but I always knew I wanted to be a developer ever since High School. I first learned JavaScript, HTML, and CSS
					in High School, I was able to take Website Development and Computer Programming courses, which made me fall in
					love with coding. After I graduated though, I was not able to persue this passion due to losing my father in
					an accident. I had to put all of my personal aspirations to the side and take care of my two sisters, but the
					pandemic was sort of a blessing in disguise for me because it provided an opportunity to go back to school for
					Software Development. I was able to further my education and gain a Front-End and Full-Stack Web Development
					Certificate through Kenzie Academy partnered with Southern New Hampshire University.
					<br />
					<br />
					Kenzie Academy is a great place to learn and grow as a developer and I am excited to see what I can do in this
					field since I am so passionate about it. Kenzie Academy provided me with the opportunity to partake in a year
					long program which strengthened my knowledge in JavaScript, HTML, and CSS as well as learning new languages
					and frameworks such as Python, Django, React.js, and Node.js. I was also able to gain experience working in a
					team environment, learn about SCRUM methodology and DRY principles that have made me become a better
					programmer. I am someone that really loves to code and I know that having a career in this field will not feel
					like work to me, it is my dream job.
				</div>
			</div>
		</div>
	);
}
