import React, { useEffect, useState } from "react";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Header from "./components/Header/Header";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignInAndUp from "./pages/signInAndUp/SignInAndUp";

import { auth } from "./firebase/firebaseUtils";

function App() {
	const [userState, setUserState] = useState({
		currentUser: null,
	});

	let unSubscribeFromAuth = null;
	console.log("userState", userState);

	useEffect(() => {
		unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
			setUserState({ currentUser: user });
		});
		return () => {
			return unSubscribeFromAuth();
		};
	}, []);
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
