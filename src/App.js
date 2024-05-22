import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Home from './components/Home.js';

function App() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios
			.get('/api/items')
			.then((result) => setItems(result.data))
			.catch(console.error);
	}, []);

	return (
		<div>
			<Header title="Kode Klatsch" />
			<Home items={items} />
			<Footer />
		</div>
	);
}

export default App;
