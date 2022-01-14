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
				<button className="btn email-btn">
					<a href="mailto:laura@afh83jknl.com"> Email</a>
				</button>
				<button className="btn linkedin-btn">
					<a href="https://www.linkedin.com" target_blank>
						LinkedIn
					</a>
				</button>
			</div>
		</div>
	);
}
