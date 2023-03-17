import React from "react";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Header from "./components/Header/Header";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						exact
						path="/"
						element={<Homepage />}
					/>
					<Route
						path="/shop"
						element={<Shop />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
