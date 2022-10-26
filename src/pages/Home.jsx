import '../assets/styles/pages/home.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import moduleIcon from '../assets/images/stack-of-paper.png';
import taskIcon from '../assets/images/a-paper.png';
import cover from '../assets/images/404.png';
import bg from '../assets/images/bg-kalkulus.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();

	const navigateToModule = () => {
		navigate('/modules', { replace: true });
	};

	return (
		<div className="home">
			<Navbar />
			{/* hero section */}
			<div className="header pt-5 pb-5 mb-0 d-flex align-items-center">
				<div className="container align-middle">
					<div className="row pt-5 pb-3">
						<div className="col-md-7">
							<h1 className="display-1 fw-bold text-white">KALKULUS</h1>
							<p className="fs-3 text-white lh-kalkulus">
								Website belajar kalkulus terlengkap dan mudah dipahami, seperti <span className="badge bg-danger">Fungsi</span> <span className="badge bg-primary">Limit</span>{' '}
								<span className="badge bg-success">Integral</span> <span className="badge bg-warning">Diferensial</span>
							</p>
							<hr className="my-4 text-white-50" />
							<form action="/" method="get" className="">
								<div className="headerSearch">
									<input type="text" placeholder="Belajar apa kita hari ini?" className="border-0 fs-4 input-kalkulus" />
									<button type="submit" className="bg-transparent border-0 fs-4">
										<FontAwesomeIcon icon={faMagnifyingGlass} />
									</button>
								</div>
							</form>
						</div>
						<div className="col-md-5 d-none d-md-block d-lg-block text-right">
							<img src={bg} alt="bg-kalkulus" className="w-100 text-right" />
						</div>
					</div>
				</div>
			</div>

			{/* Menu Section */}
			<div className="menu bg-dark text-light">
				<div className="container pt-5">
					<div className="row justify-content-around">
						<div id="modules" className="col-6 text-center mb-4" onClick={navigateToModule}>
							<img src={moduleIcon} alt="module-icon" className="menuIcon" />
							<h3 className="title mt-2 fs-4 text-white">Modul</h3>
						</div>
						<div id="tasks" className="col-6 text-center mb-4">
							<img src={taskIcon} alt="task-icon" className="menuIcon" />
							<h3 className="title mt-2 fs-4 text-white">Latihan Soal</h3>
						</div>
					</div>
				</div>
			</div>

			{/* List */}
			<div className="list">
				<div className="container mt-5">
					<div className="text-center">
						<h2 className="m-0 mb-2 p-0">Materi</h2>
						<p className="m-0 p-0 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem architecto natus hic ducimus eligendi. Ipsum.</p>
					</div>
					<hr />
					<div className="container">
						<div className="row">
							<div className="col-md-4 col-xs-12 mb-4">
								<div className="card">
									<img src={cover} alt="gambar" />
									<h3>Fungsi</h3>
									<p>Lorem ipsum dolor sit amet.</p>
								</div>
							</div>
							<div className="col-md-4 col-xs-12 mb-4">
								<div className="card">
									<img src={cover} alt="gambar" />
									<h3>Fungsi</h3>
									<p>Lorem ipsum dolor sit amet.</p>
								</div>
							</div>
							<div className="col-md-4 col-xs-12 mb-4">
								<div className="card">
									<img src={cover} alt="gambar" />
									<h3>Fungsi</h3>
									<p>Lorem ipsum dolor sit amet.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Home;
