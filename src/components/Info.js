import React from "react";
import joy from "../images/joy.jpeg";

export default function Info() {
	return (
		<div className="info">
			<img className="info__img" src={joy} alt="Joy Williams" width="317px" />

			<div className="info__block--text">
				<h3 className="info__block--name">Joy Williams</h3>
				<p className="info__block--job">Full Stack Development Student</p>
				<a className="info--website" href="/">
					joywilliams.website
				</a>
			</div>

			<div className="info__block--btns">
				<button className="email-btn">
					<a href="mailto:joyawilliams@gmail.com">ICON Email</a>
				</button>
				<button className="linkedin-btn">
					<a
						href="https://www.linkedin.com/in/joy-williams-8589a7176/"
						target_blank
					>
						ICON LinkedIn
					</a>
				</button>
			</div>
		</div>
	);
}
