import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/products/ProductDetail";
import Layout from "./components/ui/Layout/index";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="/products/:id" element={<ProductDetail />} />
					<Route path="/cart" element={<CartPage />} />
					<Route path="/success" element={<CheckoutSuccessPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="*" element={<div>Route not found</div>} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
