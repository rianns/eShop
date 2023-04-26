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

function App() {
	const [items, setItems] = useState(null);
	const [updated, setUpdated] = useState(0);

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
					<Nav />
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
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
