import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import ScrollToTop from './components/ScrollToTop';
import ComingSoon from './pages/ComingSoon';
import Home from './pages/Home';
import Inequality from './pages/Inequality';
import SistemBilangan from './pages/SistemBilangan';

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sistem-bilangan" element={<SistemBilangan />} />
				<Route path="/pertidaksamaan" element={<Inequality />} />
				<Route path="/fungsi" element={<ComingSoon />} />
				<Route path="/limit" element={<ComingSoon />} />
				<Route path="/integral" element={<ComingSoon />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
