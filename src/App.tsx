import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { Navbar } from "./components/navbar/navbar.component";
import { IndiciusPage } from "./pages/indicius";
import { IndiciusGame } from "./pages/indicius-game";

function App() {
	return (
		<>
		<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/indicius" element={<IndiciusPage />} />
				<Route path="/indicius/game/:mode" element={<IndiciusGame />} />
			</Routes>
		</>
	);
}

export default App;
