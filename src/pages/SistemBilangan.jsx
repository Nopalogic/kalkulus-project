import { useNavigate } from 'react-router-dom';
import '../assets/styles/pages/sistem-bilangan.scss';
import Navbar from '../components/Navbar';

const SistemBilangan = () => {
	const navigate = useNavigate();
	const navigateToHome = () => {
		navigate('/');
	};

	let subMaterial = [
		{
			title: 'Pengertian',
		},
		{
			title: 'Persamaan',
		},
		{
			title: 'Pertidaksamaan',
		},
	];

	return (
		<div className="sistem-bilangan">
			<Navbar />
			<div className="container pb-5">
				<div className="sidebar">
					{subMaterial.map((m) => (
						<div className="card mb-3 bg-dark text-white pointer">
							<div className="card-body pt-2 pb-2">
								<h4 className="m-0 p-0">{m.title}</h4>
							</div>
						</div>
					))}
				</div>
				<div className="row">
					<div className="col-12 col-md-8 offset-md-4">
						<div className="main">
							<div className="wrapper">
								<h2>Sistem Bilangan</h2>
								<hr className="my-2" />
								<section id="pengertian">
									<p>
										<b>Sistem Bilangan</b> adalah himpunan bilangan yang disertai dengan operasi penjumlahan dan perkalian sehingga memenuhi aksioma tertentu. <br />
										<b>Himpunan Bilangan</b> adalah gabungan dari himpunan bilangan rasional dan himpunan bilangan irasional. <br />
										<b>Bilangan Rasional</b> adalah bilangan yang berbentuk <i>a/b</i> dimana <i>a</i> dan <i>b</i> merupakan bilangan bulat dan <i>b</i> != 0. Bilangan rasional disimbolkan dengan huruf <b>Q</b>. Tidak semua bilangan dapat
										dinyatakan dalam bentuk rasional seperti akar 2, akar 5, simbol phi, maka bilangan tersebut dinamakan <b>bilangan irasional</b>.
									</p>
								</section>
								<section>
									<p>Lorem ipsum dolor sit amet.</p>
								</section>
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

export default SistemBilangan;
