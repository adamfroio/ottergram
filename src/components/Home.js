import PropTypes from "prop-types";
import "./Home.css";
import Thumbnail from "./Thumbnail.js";
import { itemImages } from "../items/index.js";

function Home({ items }) {
	return (
		<div className="home-component">
			{items.map((item) => (
				<Thumbnail
					key={item.itemId}
					image={itemImages[item.imageId]}
					title={item.title}
				/>
			))}
		</div>
	);
}

Home.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			itemId: PropTypes.string.isRequired,
			imageId: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			description: PropTypes.string,
			salePrice: PropTypes.number,
		})
	).isRequired,
};

export default Home;
