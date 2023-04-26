import { NavLink } from "react-router-dom";
import styles from "./ProductCard.module.scss";
import { titleEditor } from "../../services/titleEditor";
import { useEffect, useState } from "react";

const ProductCard = ({
	title,
	id,
	image,
	yearTaken,
	location,
	updated,
	setUpdated,
}) => {
	const [currentTitle, setCurrentTitle] = useState("");
	// console.log(id);

	useEffect(() => {
		const wrapper = async () => {
			const formattedTitle = await titleEditor(title);
			setCurrentTitle(formattedTitle);
		};
		wrapper();
	}, [title]);

	return (
		<div className={styles.ProductCard}>
			<img
				src={image}
				alt={currentTitle}
				className={styles.ProductCard_Desc_Img}
			/>
			<NavLink to={`/eShop/products/${id}`}>
				<div className={styles.ProductCard_Desc}>
					<h3>{currentTitle}</h3>
					<p>
						{location
							? `${location?.suburb}`
							: "No location information"}
					</p>
					<p>{yearTaken}</p>
				</div>
			</NavLink>
		</div>
	);
};
export default ProductCard;
