import styles from "./CartItem.module.scss";

const CartItem = ({ image, id, price }) => {
	console.log(price?.large);
	return (
		<div className={styles.CartItem}>
			<img src={image} />
			<p>ID: {id}</p>
			<p>price: {price?.large}</p>
		</div>
	);
};
export default CartItem;
