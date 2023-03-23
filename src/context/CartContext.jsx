import React, { useState, createContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	const totalPrice = cartItems.reduce((total, item) => {
		return total + item.discountedPrice * item.quantity;
	}, 0);

	const addToCart = (item, quantity = 1) => {
		const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

		if (existingItemIndex !== -1) {
			const updatedCartItems = [...cartItems];
			updatedCartItems[existingItemIndex].quantity += quantity;
			setCartItems(updatedCartItems);
		} else {
			setCartItems([...cartItems, { ...item, quantity }]);
		}
	};

	const removeFromCart = (itemId) => {
		const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === itemId);

		if (existingItemIndex !== -1) {
			const updatedCartItems = [...cartItems];
			updatedCartItems[existingItemIndex].quantity -= 1;

			if (updatedCartItems[existingItemIndex].quantity <= 0) {
				updatedCartItems.splice(existingItemIndex, 1);
			}

			setCartItems(updatedCartItems);
		}
	};

	const clearCart = () => {
		setCartItems([]);
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				removeFromCart,
				clearCart,
				totalPrice,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
