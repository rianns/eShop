import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
	return (
		<div className={styles.Header}>
			<NavLink
				to='/eShop'
				className={styles.Link}
			>
				<h1>RS Photography</h1>
			</NavLink>
		</div>
	);
};
export default Header;
