import React from "react";

import styles from "../styles/Global";
import assets from "../assets";
import StoreButton from "./StoreButton";

const Download = () => {
	// const iOSUrl = "";
	// const androidUrl = "";
	return (
		<div className={`${styles.section} ${styles.bgWhite}`}>
			<div className={`${styles.subSection} flex-col text-center`}>
				<div>
					<h1 className={`${styles.h1Text} ${styles.blackText}`}>
						Download the App
					</h1>
				</div>
				<div className={styles.flexCenter}>
					<img
						src={assets.five}
						alt="download_png"
						className={styles.fullImg}
					/>
        </div>
        
				<StoreButton
					assetUrl={assets.appleStore}
					link={"https://twitter.com"}
				/>

				<StoreButton
					assetUrl={assets.playStore}
					link={"https://twitter.com"}
				/>
			</div>
		</div>
	);
};

export default Download;
