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
					Shop
				</Link>

				<Link
					className="option"
					to="/contact"
				>
					Contact
				</Link>

				<Link
					className="option"
					to="/signin"
				>
					Sign In
				</Link>
			</div>
		</div>
	);
};

export default Header;
