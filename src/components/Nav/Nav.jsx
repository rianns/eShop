import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
	return (
		<nav className={styles.Nav}>
			<NavLink
				to='/eShop'
				className={styles.Nav_Link}
			>
				Home
			</NavLink>
			<NavLink
				to='/eShop/products'
				className={styles.Nav_Link}
			>
				Products
			</NavLink>
		</nav>
	);
};
export default Nav;
