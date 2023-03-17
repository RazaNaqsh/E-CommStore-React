import React, { useState } from "react";
import MenuItem from "../menu-item/MenuItem";
import { sectionData } from "./section.data";

import "./directory.scss";

const Directory = () => {
	const [sections, setSections] = useState(sectionData);

	return (
		<div className="directory-menu">
			{sections.map(({ title, imageUrl, id, size }) => (
				<MenuItem
					key={id}
					title={title}
					imageUrl={imageUrl}
					size={size}
				/>
			))}
		</div>
	);
};

export default Directory;
