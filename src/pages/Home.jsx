import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import bg from '../assets/images/bg-kalkulus.png';
import '../assets/styles/pages/home.scss';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { modules } from '../data/material';

const Home = () => {
	return (
		<div className="home">
			<Navbar />
			{/* hero section */}
			<div className="header pt-5 pb-5 mb-0 d-flex align-items-center">
				<div className="container align-middle">
					<div className="row pt-5 pb-3">
						<div className="col-md-7">
							<h1 className="display-1 fw-bold text-white">KALKUL<span className='text-danger'>US</span></h1>
							<p className="fs-3 text-white lh-kalkulus">
								Website belajar kalkulus terlengkap dan mudah dipahami, seperti <span className="badge bg-danger">Fungsi</span> <span className="badge bg-primary">Limit</span> <span className="badge bg-success">Integral</span>{' '}
								<span className="badge bg-warning">Diferensial</span>
							</p>
							<hr className="my-4 text-white-50" />
							{/* <form action="/" method="get" className=""> */}
							<div className="headerSearch">
								<input type="text" placeholder="Belajar apa kita hari ini?" className="border-0 fs-4 input-kalkulus" />
								<button type="submit" className="bg-transparent border-0 fs-4">
									<FontAwesomeIcon icon={faMagnifyingGlass} />
								</button>
							</div>
							{/* </form> */}
						</div>
						<div className="col-md-5 d-none d-md-block d-lg-block text-right">
							<img src={bg} alt="bg-kalkulus" className="w-100 text-right" />
						</div>
					</div>
				</div>
			</div>

			{/* List */}
			<div className="list">
				<div className="container mt-5">
					<div className="text-center">
						<h2 className="m-0 mb-2 p-0">Materi</h2>
					</div>
					<hr />
					<div className="container">
						<div className="row">
							{modules.map((module) => (
								<div className="col-md-4 col-xs-12 mb-4">
									<Link to={module.url} style={{ textDecoration: 'none' }}>
										<div className="card">
											<div className="card-body text-dark">
												<h5 className="card-title">{module.title}</h5>
												<p className="card-text">{module.desc}</p>
											</div>
										</div>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Home;
