import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import '../assets/styles/pages/fungsi.scss';
import Navbar from '../components/Navbar';

const Fungsi = () => {
	const navigate = useNavigate();
	const navigateToHome = () => {
		navigate('/');
	};
	let subMaterial = [
		{
			title: 'Pengertian',
		},
		{
			title: 'subtitusi',
		},
		{
			title: 'merasionalkan penyebut',
		},
	];
	return (
		<div className="fungsi">
			<Navbar />
			<div className="container pb-5">
				<div className="sidebar">
					{subMaterial.map((m) => (
						<Link to={m.id} spy={true} smooth={false} offset={-72} duration={100} style={{ textDecoration: 'none' }}>
							<div className="card mb-3 bg-dark text-white pointer">
								<div className="card-body pt-2 pb-2">
									<h4 className="m-0 p-0">{m.title}</h4>
								</div>
							</div>
						</Link>
					))}
				</div>
				<div className="row">
					<div className="col-12 col-md-8 offset-md-4">
						<div className="main-fungsi">
							<div className="wrapper">
								<h2>Fungsi</h2>
								<hr className="my-2" />
								<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam tempora illum aut corporis sequi deserunt?</p>
							</div>
							<div className="back-btn">
								<button onClick={navigateToHome}>Kembali</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Fungsi;
