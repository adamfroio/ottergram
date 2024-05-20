import "./App.css";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import { items } from "./items/index.js";

function App() {
	return (
		<div>
			<Header />
			<Home items={items} />
			<Footer />
		</div>
	);
}

export default App;
