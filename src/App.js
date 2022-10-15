import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Limit from './pages/Limit'
import './App.scss';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/limit" element={<Limit />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
