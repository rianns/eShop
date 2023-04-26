import ProductGrid from "../../components/ProductGrid";
import styles from "./ProductList.module.scss";

const ProductList = ({ items, updated, setUpdated }) => {
	return (
		<section className={styles.ProductList}>
			<h1>Gallery</h1>
			<div>
				<ProductGrid
					items={items}
					updated={updated}
					setUpdated={setUpdated}
				/>
			</div>
		</section>
	);
};
export default ProductList;
