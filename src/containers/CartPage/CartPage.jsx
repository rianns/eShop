import CartItem from "../../components/CartItem/CartItem";
import styles from "./CartPage.module.scss";

const CartPage = ({ addToCart, removeFromCart, total, cartItems }) => {
	console.log(cartItems);
	return (
		<section className={styles.CartPage}>
			<h2>Cart</h2>
			{cartItems.length === 0 ? (
				<p>Your cart is empty</p>
			) : (
				cartItems.map((item) => (
					<div
						key={item.id}
						className={styles.CartItem_Item}
					>
						<CartItem
							image={item.image}
							id={item.id}
							price={item.price}
						/>
						<button onClick={() => removeFromCart(item)}>
							Remove
						</button>
					</div>
				))
			)}
		</section>
	);
};
export default CartPage;
