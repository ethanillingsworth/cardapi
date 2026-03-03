import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./tailwind.css";
import CardPage from "./pages/CardPage";

function App() {
	return (
		<Router>
			<div className="content">
				<Routes>
					<Route path="/card/:id" element={<CardPage />}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
