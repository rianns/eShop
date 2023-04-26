import ProductCard from "../ProductCard";
import styles from "./ProductGrid.module.scss";

const ProductGrid = ({ items, updated, setUpdated }) => {
	// console.log(items);
	return (
		<div className={styles.ProductGrid}>
			{items &&
				items.map((item) => {
					return (
						<ProductCard
							updated={updated}
							setUpdated={setUpdated}
							key={item?.id}
							title={item?.["photo-title"]}
							yearTaken={item?.yearTaken}
							image={item?.image}
							id={item?.id}
							location={item?.location}
						/>
					);
				})}
		</div>
	);
};
export default ProductGrid;
