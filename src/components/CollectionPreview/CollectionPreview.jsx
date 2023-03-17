import React from "react";
import "./collectionPreview.scss";

const PreviewCollection = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h1>{title.toUpperCase()}</h1>
			<div className="preview">
				{items
					.filter((item, index) => index < 4)
					.map((item) => (
						<div key={item.id}>{item.name}</div>
					))}
			</div>
		</div>
	);
};

export default PreviewCollection;
