import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = ({ cartItems }) => {
	return (
		<div className={styles.NavBar}>
			<nav className={styles.NavBar_Nav}>
				<NavLink
					to='/eShop'
					className={styles.NavBar_Nav_Link}
				>
					Home
				</NavLink>
				<NavLink
					to='/eShop/products'
					className={styles.NavBar_Nav_Link}
				>
					Products
				</NavLink>
			</nav>
			<div className={styles.NavBar_Cart}>
				<NavLink
					to='/eShop/cart'
					className={styles.NavBar_Nav_Link}
				>
					Cart ({cartItems.length})
				</NavLink>
			</div>
		</div>
	);
};
export default Nav;
