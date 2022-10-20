import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Moduls from './pages/Moduls'
import Exercises from './pages/Exercises'
import Limit from './pages/Limit'
import './App.scss';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/modules" element={<Moduls />} />
				<Route path="/exercises" element={<Exercises />} />
				<Route path="/limit" element={<Limit />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
