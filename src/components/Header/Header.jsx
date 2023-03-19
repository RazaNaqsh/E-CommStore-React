import React from "react";
import { Link } from "react-router-dom";
import { Crown } from "../../assets/Crown.jsx";

import "./header.scss";

const Header = ({ currentUser }) => {
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

				{currentUser ? (
					<div
						className="option"
						onClick={() => auth.signOut()}
					>
						SIGN OUT
					</div>
				) : (
					<Link
						className="option"
						to="/signin"
					>
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
