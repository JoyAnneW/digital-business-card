import React from "react";
import laura from "../images/laura.jpg";

export default function Info() {
	return (
		<div className="info">
			<img className="info__img" src={laura} alt="Laura Smith" />

			<div className="info__block--text">
				<h1 className="info__block--name">Laura Smith</h1>
				<h3 className="info__block--job">Frontend Developer</h3>
				<a className="info--website" href="/">
					laurasmith.website
				</a>
			</div>

			<div className="info__block--btns">
				<a className="btn email-btn" href="mailto:laura@afh83jknl.com">
					{" "}
					<i class="fas fa-envelope"></i>Email
				</a>

				<a
					className="btn linkedin-btn"
					href="https://www.linkedin.com"
					target_blank
				>
					<i class="fab fa-linkedin"></i>LinkedIn
				</a>
			</div>
		</div>
	);
}
