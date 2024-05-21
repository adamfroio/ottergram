import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Home from './components/Home.js';
import { items } from './items/data.js';

function App() {
	return (
		<div>
			<Header title="Kode Klatsch" />
			<Home items={items} />
			<Footer />
		</div>
	);
}

export default App;
