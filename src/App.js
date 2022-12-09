import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import ScrollToTop from './components/ScrollToTop';
import ComingSoon from './pages/ComingSoon';
import Home from './pages/Home';
import Inequality from './pages/Inequality';
import SistemBilangan from './pages/SistemBilangan';
import Fungsi from './pages/Fungsi';

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sistem-bilangan" element={<SistemBilangan />} />
				<Route path="/pertidaksamaan" element={<Inequality />} />
				<Route path="/fungsi" element={<Fungsi />} />
				<Route path="/limit" element={<ComingSoon />} />
				<Route path="/diferensial" element={<ComingSoon />} />
				<Route path="/integral" element={<ComingSoon />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
