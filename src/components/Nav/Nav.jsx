import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";
import CartPage from "../../containers/CartPage/CartPage";

const Nav = () => {
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
					Cart
				</NavLink>
			</div>
		</div>
	);
};
export default Nav;
