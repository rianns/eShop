import styles from "./ProductPage.module.scss";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
	getProductById,
	updateItems,
	updateStock,
} from "../../services/photos";

const ProductPage = ({ updated, setUpdated, addToCart }) => {
	const { id } = useParams();
	const nav = useNavigate();
	const [inCart, setInCart] = useState(0);
	// const [quantity, setQuantity] = useState({ qtyAdded: 0 });
	const [product, setProduct] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		const wrapper = async () => {
			try {
				if (error) {
					setError(false);
				}
				const data = await getProductById(id);
				setProduct(data);
			} catch (e) {
				console.log(e);
				setError(true);
			}
		};
		wrapper();
	}, [id, updated]);

	const handleClickDec = () => {
		setInCart(inCart - 1);
		console.log(inCart);
	};

	const handleClickInc = () => {
		setInCart(inCart + 1);
	};

	const inputChange = (e) => {
		// setQuantity({ qtyAdded: parseInt(e.target.value) });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await updateItems(id, { qtyAdded: inCart });
		await addToCart(product);
		await setUpdated(updated + 1);
	};

	// const handleAddToCart = async (item) => {
	// 	await addToCart(product);
	// 	// nav(`/eShop/cart`);
	// };

	// console.log("QUANTITY");
	// console.log(quantity.qtyAdded);

	return error === false && product ? (
		<section className={styles.ProductPage}>
			<div className={styles.ProductPage_Img}>
				<img
					src={product?.image ?? "No Image"}
					alt=''
				/>
			</div>
			<div className={styles.ProductPage_Info}>
				<div className={styles.ProductPage_Info_Desc}>
					<h2>{product?.["photo-title"] ?? "No Title"}</h2>
					<p>
						Location:{" "}
						{`${product?.location?.suburb}, ${product?.location?.state}, ${product?.location?.country}`}
					</p>
				</div>
				<div className={styles.ProductPage_Info_Cart}>
					<form>
						<select
							name='size'
							id='size'
						>
							<option value='large'>Large (40 x 30 cm)</option>
							<option value='medium'>Medium (20 x 25 cm)</option>
							<option value='small'>Small (15 x 10 cm)</option>
						</select>
						<button onClick={handleClickDec}>-</button>
						{/* <input
							type='number'
							name='inputQty'
							id='inputQty'
							value={0 ?? inCart}
							required
						/> */}
						<div>{inCart}</div>
						<button onClick={handleClickInc}>+</button>
						<input
							type='submit'
							value='Add to Cart'
							onClick={handleSubmit}
						/>
					</form>
				</div>
			</div>
		</section>
	) : (
		<h2>No Product Found</h2>
	);
};
export default ProductPage;
