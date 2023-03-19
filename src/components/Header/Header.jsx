import React from "react";
import { Link } from "react-router-dom";
import { Crown } from "../../assets/Crown.jsx";

import "./header.scss";

const Header = () => {
	return (
		<div className="header">
			<Link
				to="/"
				className="logo-container"
			>
				<Crown className="logo" />
			</Link>

			<div className="options">
				<Link
					className="option"
					to="/shop"
				>
					SHOP
				</Link>

				<Link
					className="option"
					to="/contact"
				>
					CONTACT
				</Link>

				<Link
					className="option"
					to="/signin"
				>
					SIGN IN
				</Link>
			</div>
		</div>
	);
};

export default Header;
