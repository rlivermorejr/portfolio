import React from "react";
import { Route, Routes } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import HomePage from "./components/homepage/homepage";
import Navbar from "./components/navbar/navbar";
import RecordList from "./components/records/recordList";
import Edit from "./components/records/edit";
import Create from "./components/records/create";
import DiceRoller from "./components/apps/diceroller/diceRoller";
import Basketball from "./components/apps/basketball/basketball";

export default function App() {
	return (
		<div>
			<AnimatePresence exitBeforeEnter>
				<motion.div exit={{ opacity: 0 }}>
					<Navbar />

					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/react/diceroller" element={<DiceRoller />} />
						<Route path="/react/basketball" element={<Basketball />} />
						<Route path="/records" element={<RecordList />} />
						<Route path="/records/edit/:id" element={<Edit />} />
						<Route path="/records/create" element={<Create />} />
					</Routes>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
