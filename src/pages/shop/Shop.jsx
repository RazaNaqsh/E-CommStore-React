import React, { useState } from "react";
import SHOP_DATA from "./Shop.data";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

const Shop = () => {
	const [collections, setCollections] = useState(SHOP_DATA);
	console.log("🚀 ~ file: Shop.jsx:6 ~ Shop ~ collections:", collections);

	return (
		<div className="shop-page">
			{collections.map((collection) => (
				<CollectionPreview
					key={collection.id}
					title={collection.title}
					items={collection.items}
				/>
			))}
		</div>
	);
};

export default Shop;
