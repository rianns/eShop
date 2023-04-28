// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import HomePage from "./containers/HomePage/HomePage";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { getAllProducts } from "./services/photos";
import ProductList from "./containers/ProductList";
import ProductPage from "./containers/ProductPage";
import CartPage from "./containers/CartPage/CartPage";

function App() {
	const [items, setItems] = useState(null);
	const [updated, setUpdated] = useState(0);
	const [cartItems, setCartItems] = useState([]);

	// set the cart
	const addToCart = (item) => {
		const { image, pricePerUnit, id } = item;
		setCartItems([...cartItems, { image, pricePerUnit, id }]);
		console.log(cartItems);
	};

	const removeFromCart = (itemToRemove) => {
		setCartItems(cartItems.filter((item) => item !== itemToRemove));
	};

	const total = cartItems.reduce((acc, item) => acc + item.price, 0);

	// getting all products
	useEffect(() => {
		const wrapper = async () => {
			const allProducts = await getAllProducts();
			setItems(allProducts);
		};

		wrapper();
	}, [updated]);

	return (
		<div className='App'>
			<BrowserRouter>
				<div className='App_Top'>
					<Header />
					<Nav cartItems={cartItems} />
				</div>
				<Routes>
					<Route
						path='/eShop'
						element={
							<HomePage
								items={items}
								updated={updated}
								setUpdated={setUpdated}
							/>
						}
					/>
					<Route
						path='/eShop/products'
						element={
							<ProductList
								items={items}
								updated={updated}
								setUpdated={setUpdated}
							/>
						}
					/>
					<Route
						path='/eShop/products/:id'
						element={
							<ProductPage
								updated={updated}
								setUpdated={setUpdated}
								addToCart={addToCart}
							/>
						}
					/>
					<Route
						path='/eShop/cart'
						element={
							<CartPage
								addToCart={addToCart}
								removeFromCart={removeFromCart}
								total={total}
								cartItems={cartItems}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
