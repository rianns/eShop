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
	const [quantity, setQuantity] = useState({ qtyAdded: 0 });
	const [product, setProducts] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		const wrapper = async () => {
			try {
				if (error) {
					setError(false);
				}
				const data = await getProductById(id);
				setProducts(data);
			} catch (e) {
				console.log(e);
				setError(true);
			}
		};
		wrapper();
	}, [id, updated]);

	const handleClickDec = async () => {
		if (product.qtyAdded && product["qtyAdded"] >= 0) {
			// await updateStock(id, -1);
			setInCart(inCart - 1);
			setUpdated(updated + 1);
		}
	};

	const handleClickInc = async () => {
		if (product.qtyAdded && product["qtyAdded"] < product["quantity"]) {
			// await updateStock(id, 1);
			setInCart(inCart + 1);
			setUpdated(updated + 1);
		}
	};

	const inputChange = (e) => {
		setQuantity({ qtyAdded: parseInt(e.target.value) });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await updateItems(id, quantity);
		// await updateStock(id, );
		await setUpdated(updated + 1);
		handleAddToCart(product);
	};

	const handleAddToCart = async (item) => {
		await addToCart(item);
		// nav(`/eShop/cart`);
	};

	console.log(inCart);
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
					<form onSubmit={handleSubmit}>
						<button onClick={handleClickDec}>-</button>
						<input
							type='number'
							name='inputQty'
							id='inputQty'
							onChange={inputChange}
							required
						/>
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
