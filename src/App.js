import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Inequality from './pages/Inequality';
import Fungsi from './pages/Fungsi';
import Limit from './pages/Limit';

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pertidaksamaan" element={<Inequality />} />
				<Route path="/fungsi" element={<Fungsi />} />
				<Route path="/limit" element={<Limit />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
