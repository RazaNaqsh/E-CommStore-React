import React, { useState } from "react";
import MenuItem from "../menu-item/MenuItem";

import "./directory.scss";

const Directory = () => {
	const [sections, setSections] = useState([
		{
			title: "hats",
			imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
			id: 1,
			linkUrl: "shop/hats",
		},
		{
			title: "jackets",
			imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
			id: 2,
			linkUrl: "shop/jackets",
		},
		{
			title: "sneakers",
			imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
			id: 3,
			linkUrl: "shop/sneakers",
		},
		{
			title: "anime",
			imageUrl:
				"https://cdn.shopify.com/s/files/1/0579/0495/5601/products/AOTcosplay_05.jpg?v=1669632186&width=2048",
			id: 4,
			linkUrl: "shop/anime",
		},
		{
			title: "mens",
			imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
			size: "large",
			id: 5,
			linkUrl: "shop/mens",
		},
	]);

	return (
		<div className="directory-menu">
			{sections.map(({ title, imageUrl, id }) => (
				<MenuItem
					key={id}
					title={title}
				/>
			))}
		</div>
	);
};

export default Directory;
