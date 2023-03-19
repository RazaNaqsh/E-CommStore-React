import React from "react";
import { Outlet } from "react-router-dom";

import Directory from "../../components/Directory/Directory";

import "./homepage.scss";
const Homepage = () => {
	return (
		<div className="homepage">
			<Directory />
		</div>
	);
};

export default Homepage;
