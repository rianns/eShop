// set the cart
export const addToCart = (item, cartItems, setCartItems) => {
	console.log(cartItems);
	setCartItems([...cartItems, item]);
};

export const removeFromCart = (itemToRemove) => {
	setCartItems(cartItems.filter((item) => item !== itemToRemove));
};
