import React from "react";

const StoreButton = ({ assetUrl, link }) => {
	return (
		<div>
			<a href={link} style={{ pointerEvents: "none" }}>
				<img
					src={assetUrl}
					alt="download_png"
					width="220px"
					height="180px"
					style={{ opacity: 0.4 }}
				/>
			</a>
		</div>
	);
};

export default StoreButton;
