import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./components/homepage";
import Navbar from "./components/navbar";
import RecordList from "./components/records/recordList";
import Edit from "./components/records/edit";
import Create from "./components/records/create";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/records" element={<RecordList />} />
				<Route path="/records/edit/:id" element={<Edit />} />
				<Route path="/records/create" element={<Create />} />
			</Routes>
		</div>
	);
}

export default App;
