import React from "react";
import twitter from "../images/Twitter.png";
import facebook from "../images/Facebook.png";
import instagram from "../images/Instagram.png";
import github from "../images/GitHub.png";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__icons">
				<a href="www.twitter.com">
					<img src={twitter} alt="twitter icon" />
				</a>
				<a href="www.facebook.com">
					<img src={facebook} alt="facebook icon" />
				</a>
				<a href="www.instagram.com">
					<img src={instagram} alt="instagram icon" />
				</a>
				<a href="www.github.com">
					<img src={github} alt="github icon" />
				</a>
			</div>
		</footer>
	);
}
