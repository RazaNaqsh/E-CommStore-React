import React, { useEffect, useState } from "react";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Header from "./components/Header/Header";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignInAndUp from "./pages/signInAndUp/SignInAndUp";

function App() {
	const [userState, setUserState] = useState({
		currentUser: null,
	});

	return (
		<div className="App">
			<BrowserRouter>
				<Header currentUser={userState.currentUser} />
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
					<Route
						path="/signin"
						element={<SignInAndUp />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
