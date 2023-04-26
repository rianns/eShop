import Carousel from "../../components/Carousel";
import ProductGrid from "../../components/ProductGrid";
import styles from "./HomePage.module.scss";

const HomePage = ({ items, updated, setUpdated }) => {
	return (
		<section className={styles.HomePage}>
			<article className={styles.HomePage_Carousel}>
				<Carousel />
			</article>
			<article className={styles.HomePage_Grid}>
				<ProductGrid
					items={items}
					updated={updated}
					setUpdated={setUpdated}
				/>
			</article>
		</section>
	);
};
export default HomePage;
