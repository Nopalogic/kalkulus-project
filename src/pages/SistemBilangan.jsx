import { BlockMath, InlineMath } from 'react-katex';
import { Link } from 'react-scroll';
import venn from '../assets/images/him-bilangan.png';
import '../assets/styles/pages/sistem-bilangan.scss';
import BackButton from '../components/BackButton';
import Navbar from '../components/Navbar';

const SistemBilangan = () => {
	// array for sidebar menu
	let subMaterial = [
		{
			id: 'pengertian',
			title: 'Pengertian',
		},
		{
			id: 'persamaan',
			title: 'Persamaan',
		},
	];

	return (
		<div className="sistem-bilangan">
			<Navbar />
			<div className="container pb-5">
				
				{/* sidebar */}
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
				{/* sidebar */}

				<div className="row">
					<div className="col-md-8 offset-md-4">
						<div className="main-sisbil">
							<div className="wrapper">
								<h2>Sistem Bilangan Real</h2>
								<hr className="mt-4 mb-2" />
								<section id="pengertian">
									{/* sistem bilangan */}
									<p>
										<b>Sistem Bilangan Real</b> adalah himpunan bilangan yang disertai dengan operasi penjumlahan dan perkalian sehingga memenuhi aksioma tertentu.
									</p>
									{/* himpunan bilangan */}
									<p>
										<b>Himpunan Bilangan</b> adalah gabungan dari himpunan bilangan rasional dan himpunan bilangan irasional. Berikut ini merupakan diagram venn dari himpunan bilangan. <br />
										<div className="d-flex justify-content-center mt-3 mb-5">
											<img src={venn} alt="diagram-venn-himpunan-bilangan-real" className="img-fluid" />
										</div>
									</p>
									{/* bilangan rasional */}
									<p>
										<b>Bilangan Rasional</b> adalah bilangan yang dinyatakan sebagai perbandingan dua bilangan bulat <i>a</i> dan <i>b</i> yang dituliskan <InlineMath math="\frac a b" /> dimana <InlineMath math="b \ne 0" />. Bilangan
										rasional jika dinyatakan dalam bentuk bilangan desimal merupakan bilangan desimal yang berulang.
										<BlockMath math="\frac 2 3 = 0,6666..." />
										<BlockMath math="\frac {13} {11} = 1,181818..." />
									</p>
									{/* bilangan irasional */}
									<p>
										<b>Bilangan Irasional</b> merupakan bilangan yang tidak rasional. Bilangan irasional bukan merupakan bilangan bulat juga bukan bilangan pecahan. <br />
										Jika ditulis dalam bentuk decimal, bilangan tersebut tidak memiliki pola yang berulang secara teratur.
										<BlockMath math="\sqrt 2 = 1,1414213562..." />
										<BlockMath math="\sqrt 3 = 1,732050807..." />
									</p>
								</section>
								<hr />
								<section id="persamaan">
									<p>
										<b>Persamaan</b> merupakan kalimat terbuka yang menggunakan relasi "=".
									</p>
									<p>
										Tiga hal berikut dapat dilakukan dalam menentukan penyelesaian dari persamaan, <br />
										<ol>
											<li>
												<b>Menambahkan kedua ruas dengan bilangan yang sama.</b>
											</li>
											<li>
												<b>Mengurangi kedua ruas denga bilangan yang sama.</b>
											</li>
											<li>
												<b>Membagi atau mengalika kedua ruas dengan bilangan yang sama dan bukan nol.</b>
											</li>
										</ol>
									</p>
									<p>
										Suatu persamaan yang kedua ruasnya ditambah, dikurang, dikalikan atau dibagi dengan bilangan yang sama akan menghasilkan <b>persamaan linear yang setara (ekuivalen)</b> dengan persamaan linear semula. Ekuivalen artinya
										mempunyai penyelesaian yang sama.
									</p>
									<p>
										<b>Persamaan kuadrat</b>
										<br />
										Bentuk umum persamaan kuadrat dalam variabel <InlineMath math="x" /> adalah <br /> <InlineMath math="ax^2 + bx + c = 0" /> dimana <InlineMath math="a, b, c" /> merupakan bilangan real dan <InlineMath math="a \neq 0" />.
										Berikut adalah cara menyelesaikan persamaan kuadrat:
									</p>
									<p>
										<b>Pemfaktoran</b>
										<br />
										Contoh: <br />
										<div className="container">
											<div className="row">
												<div className="col-md-6">
													<InlineMath math="x^2+2x-15=0" />
													<br />
													<InlineMath math="x^2+5x-3x-15=0" />
													<br />
													<InlineMath math="x(x+5)-3(x+5)=0" />
													<br />
													<InlineMath math="(x+5)(x-3)=0" />
													<br />
													<InlineMath math="x=-5" /> atau <InlineMath math="x=3" />
												</div>
												<div className="col-md-6">
													<span>Faktorisasi</span> <br />
													<InlineMath math="... \times ... = ac" /> <br />
													<InlineMath math="... + ... = b" /> <br />
													<InlineMath math="5 \times (-3)  = -15" /> <br />
													<InlineMath math="5 + (-3)  = 2" />
												</div>
											</div>
										</div>
									</p>
									<p>
										<b>Melengkapkan kuadrat sempurna</b> <br />
										Contoh: <br />
										<div className="container">
											<div className="row">
												<div className="col-md-6">
													<InlineMath math="x^2+2x-15=0" /> <br />
													<InlineMath math="x^2+2x=15 \impliedby (\frac b 2)^2" /> <br />
													<InlineMath math="x^2+2x+(\frac 2 2)^2=15+(\frac 2 2)^2" /> <br />
													<InlineMath math="x^2+2x+1=15+1" /> <br />
													<InlineMath math="(x+1)^2=16" /> <br />
												</div>
												<div className="col-md-6">
													<InlineMath math="\sqrt{(x=1)^2}=\sqrt{16}" />
													<br />
													<InlineMath math="x+1=\pm 4" />
													<br />
													<div className="row">
														<div className="col-md-5">
															<InlineMath math="x+1=4" />
															<br />
															<InlineMath math="x=3" />
															<br />
														</div>
														<div className="col-md-5">
															<InlineMath math="x+1=-4" />
															<br />
															<InlineMath math="x=-5	" />
															<br />
														</div>
													</div>
												</div>
											</div>
										</div>
									</p>
									<p>
										<b>Menggunakan rumus</b> <br />
										Contoh: <br />
										<div className="container">
											<div className="row">
												<div className="col-md-6">
													<InlineMath math="x= \frac {-b \pm \sqrt{b^2-4ac}}{2a}" /> <br />
													<InlineMath math="x= \frac {-2 \pm \sqrt{2^2-4(1)(-15)}}{2(1)}" /> <br />
													<InlineMath math="x= \frac {-2 \pm \sqrt{4+60}}{2}" /> <br />
													<InlineMath math="x= \frac {-2 \pm \sqrt{64}}{2}" /> <br />
													<InlineMath math="x= \frac {-2 \pm \sqrt{64}}{2}" /> <br />
												</div>
												<div className="col-md-6">
													<InlineMath math="x_1=\frac{-2+8} {2}" /> <br />
													<InlineMath math="x_1=3" /> <br />
													<InlineMath math="x_2=\frac{-2-8} {2}" /> <br />
													<InlineMath math="x_2=-5" /> <br />
												</div>
											</div>
										</div>
									</p>
								</section>
							</div>
							<BackButton />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SistemBilangan;
