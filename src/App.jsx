import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
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
