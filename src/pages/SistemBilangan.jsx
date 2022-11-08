import { InlineMath, BlockMath } from 'react-katex';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import '../assets/styles/pages/sistem-bilangan.scss';
import Navbar from '../components/Navbar';
import venn from '../assets/images/him-bilangan.png';

const SistemBilangan = () => {
	const navigate = useNavigate();
	const navigateToHome = () => {
		navigate('/');
	};

	let subMaterial = [
		{
			id: 'pengertian',
			title: 'Pengertian',
		},
		{
			title: 'Persamaan',
		},
		{
			id: 'pertidaksamaan',
			title: 'Pertidaksamaan',
		},
	];

	return (
		<div className="sistem-bilangan">
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
						<div className="main-sisbil">
							<div className="wrapper">
								<h2>Sistem Bilangan Real</h2>
								<hr className="my-2" />
								<section id="pengertian">
									<p>
										<b>Sistem Bilangan Real</b> adalah himpunan bilangan yang disertai dengan operasi penjumlahan dan perkalian sehingga memenuhi aksioma tertentu.
									</p>
									<p>
										<b>Himpunan Bilangan</b> adalah gabungan dari himpunan bilangan rasional dan himpunan bilangan irasional. <br />
										<br />
										<b>Diagram venn himpunan bilangan</b> <br />
										<img src={venn} alt="diagram venn himpunan bilangan real" className="venn" />
										{/* <InlineMath math="N \subset Z \subset Q \subset R" /> */}
									</p>
									<p>
										<b>Bilangan Rasional</b> adalah bilangan yang dinyatakan sebagai perbandingan dua bilangan bulat <i>a</i> dan <i>b</i> yang dituliskan <InlineMath math="\frac a b" /> dimana <i>b</i> <InlineMath math="\ne" /> 0. Bilangan
										rasional disimbolkan dengan huruf <b id="tnr">Q</b>. Bilangan rasional jika dinyatakan dalam bentuk bilangan desimal merupakan bilangan desimal yang berulang.
										<BlockMath math="\frac 2 3 = 0,6666..." />
										<BlockMath math="\frac {13} {11} = 1,181818..." />
										<br /> Tidak semua bilangan dapat dinyatakan dalam bentuk rasional seperti <InlineMath math="\sqrt 2" />, <InlineMath math="\sqrt 5" />, maka bilangan tersebut dinamakan bilangan irasional.
									</p>
									<p>
										<b>Bilangan Irasional</b> merupakan bilangan yang tidak rasional. Bilangan irasional bukan merupakan bilangan bulat juga bukan bilangan pecahan. <br />
										Jika ditulis dalam bentuk decimal, bilangan tersebut tidak memiliki pola yang berulang secara teratur.
										<BlockMath math="\sqrt 2 = 1,1414213562..." />
										<BlockMath math="\sqrt 3 = 1,732050807..." />
									</p>
								</section>
								<section id="pertidaksamaan">
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
