import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LearningCentre from "./pages/LearningCentre/LearningCentre";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/learn" element={<LearningCentre />} />
			</Routes>
			<NavBar />
		</BrowserRouter>
	);
}

export default App;
