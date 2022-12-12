import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ComingSoon from './pages/comingSoon';
import Fungsi from './pages/fungsi';
import Home from './pages/home';
import Pertidaksamaan from './pages/pertidaksamaan';
import SistemBilangan from './pages/bilangan';
import FungsiQuiz from './pages/fungsi/quiz';
import BilanganQuiz from './pages/bilangan/quiz';
import PertidaksamaanQuiz from './pages/pertidaksamaan/quiz';

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sistem-bilangan" element={<SistemBilangan />} />
				<Route path="/quiz-sistem-bilangan" element={<BilanganQuiz />} />
				<Route path="/pertidaksamaan" element={<Pertidaksamaan />} />
				<Route path="/quiz-pertidaksamaan" element={<PertidaksamaanQuiz />} />
				<Route path="/fungsi" element={<Fungsi />} />
				<Route path="/quiz-fungsi" element={<FungsiQuiz />} />
				<Route path="/limit" element={<ComingSoon />} />
				<Route path="/diferensial" element={<ComingSoon />} />
				<Route path="/integral" element={<ComingSoon />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
