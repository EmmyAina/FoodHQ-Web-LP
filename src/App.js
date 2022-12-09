import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
	return (
		<>
			<SectionWrapper
				title="Your Favourite Food is on the way!"
				description="Explore restaurants that deliver near you. 
        With a place for every taste, it’s easy to find food you crave, and order online or through the FoodHQ app. 
        Find great meals fast with lots of local menus. Enjoy eating the convenient way with places that deliver to your door."
				showBtn
				mockupImg={assets.intro}
				banner="banner"
			/>
			<SectionWrapper
				title="Fund Your FoodHQ Wallet"
				description="Add Funds to Your FoodHQ Wallet for Swift Payment "
				mockupImg={assets.wallet}
				reverse
			/>
			<SectionWrapper
				title="Find Favorites and Discover New Ones From Our App "
				description="Simply choose your favorite vendor or discover new resturants to satisfy your taste buds"
				mockupImg={assets.threeStack}
				banner="banner02"
			/>
			{/* <Features /> */}
			{/* <SectionWrapper
				title="Smart User Interface Marketplace"
				description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
				mockupImg={assets.feedback}
				reverse
			/> */}

			<Download />

			<div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
				<p className={`${styles.pText} ${styles.whiteText}`}>
					FoodHQ inc (c) 2022
					{/* Made with love by{" "}
					<span className="bold">JavaScript Mastery</span> */}
				</p>
			</div>
		</>
	);
};

export default App;
