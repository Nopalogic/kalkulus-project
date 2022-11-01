import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import SistemBilangan from './pages/SistemBilangan';
import Inequality from './pages/Inequality';
import Fungsi from './pages/Fungsi';
import Limit from './pages/Limit';
import Integral from './pages/Integral';

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sistem-bilangan" element={<SistemBilangan />} />
				<Route path="/pertidaksamaan" element={<Inequality />} />
				<Route path="/fungsi" element={<Fungsi />} />
				<Route path="/limit" element={<Limit />} />
				<Route path="/integral" element={<Integral />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
