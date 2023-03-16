import Homepage from "./pages/homepage/Homepage";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Homepage />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
