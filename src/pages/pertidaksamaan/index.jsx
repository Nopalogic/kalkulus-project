import { InlineMath } from 'react-katex';
import { Link } from 'react-scroll';
import BackButton from '../../components/backButton';
import Navbar from '../../components/Navbar';
import { inEquality } from '../../data/material';
import './inequality.scss';

const Inequality = () => {
	return (
		<div className="inequality">
			<Navbar />
			<div className="container pb-5">
				<div className="sidebar">
					{inEquality.map((material) => (
						<Link to={material.id} spy={true} smooth={false} offset={-72} duration={100} style={{ textDecoration: 'none' }}>
							<div className="card mb-3 bg-dark text-white pointer">
								<div className="card-body pt-2 pb-2">
									<h4 className="m-0 p-0">{material.title}</h4>
								</div>
							</div>
						</Link>
					))}
				</div>
				<div className="row">
					<div className="col-12 col-md-8 offset-md-4">
						<div className="main-inequality">
							<div className="wrapper">
								<h2>Sistem Bilangan Real</h2>
								<hr className="mt-4 mb-2" />
								<section id="pengertian">
									<p>
										<b>Pertidaksamaan</b> merupakan kalimat terbuka yang memuat ungkapan "tidak sama dengan", "lebih dari", "lebih dari atau sama dengan", "kurang dari", "kurang dari atau sama dengan". <br />
										Contoh: <br />
										<ol>
											<li>
												<InlineMath math="x \neq y" />
											</li>
											<li>
												<InlineMath math="x \gt y" />
											</li>
											<li>
												<InlineMath math="2x \ge 5" />
											</li>
											<li>
												<InlineMath math="x^2-5x+6 \lt 6" />
											</li>
											<li>
												<InlineMath math="x^2-5x+6 \le 6" /> dan sebagainya. <br />
											</li>
										</ol>
										<p>
											Setiap persamaan dan pertidaksamaan tidak berlaku untuk setiap pengganti variabelnya. Nilai-nilai variabel yang memenuhi pertidaksamaan disebut penyelesaian, dan himpunan semua semua pengganti variabel yang menyebabkan
											pertidaksamaan itu menjadi kalimat tertutup yang benar disebut himpunan penyelesaian dari pertidaksamaan.
										</p>
									</p>
								</section>
								<hr />
								<section id="sifat">
									<p>
										<h5 className="fw-bold mb-3">Sifat-sifat pertidaksamaan</h5>
										<b>Pertidaksamaan Linear</b> <br />
										Pertidaksamaan linear terbagi menjadi dua, Pertidaksamaan Linear Satu Variabel dan Pertidaksamaan Linear Dua Variabel.
									</p>

									<p id="SV">
										<b>Pertidaksamaan Linear Satu Variabel</b>
										<br />
										Pertidaksamaan Linear Dua Variabel merupakan pertidaksamaan yang terdiri dari satu variable yang biasanya ditulis dengan lambang x. <br />
										Contoh: <br />
										<div className="container">
											<InlineMath math="3x+6 \gt 7(x-2)" />
											<br />
											<InlineMath math="3x+6 \gt 7x-14" />
											<br />
											<InlineMath math="3x-7x \gt -14-6" />
											<br />
											<InlineMath math="-4x \gt -20" />
											<br />
											<InlineMath math="x=\frac{-20}{-4}" />
											<br />
											<InlineMath math="x=5" />
											<br />
											<br />
											<InlineMath math="5 \gt x" /> atau <InlineMath math="x \lt 5" /> <br />
											dengan himpunan penyelesaian <br />
											HP = <InlineMath math="\set{x|x<5, x \in R}" />
										</div>
									</p>

									<p id="DV">
										<b>Pertidaksamaan Linear Dua Variabel</b>
										<br />
										Pertidaksamaan Linear Dua Variabel merupakan pertidaksamaan yang terdiri dari dua variable yang biasanya ditulis dengan lambang x dan y. <br />
										Contoh: <br />
										<div className="container">
											<InlineMath math="2x + 3y \le 6" />
											<div className="row">
												<div className="col-md-6">
													<InlineMath math="2x+3y=6" />
													<br />
													<InlineMath math="2\cdot0+3y=6" />
													<br />
													<InlineMath math="y=\frac 6 3" />
													<br />
													<InlineMath math="y=2" />
													<br />
												</div>
												<div className="col-md-6">
													<InlineMath math="3x+2y=6" />
													<br />
													<InlineMath math="3\cdot0+2y=6" />
													<br />
													<InlineMath math="y=\frac 6 2" />
													<br />
													<InlineMath math="y=3" />
													<br />
												</div>
											</div>

											<div className="row mt-4">
												<div className="col-md-6">
													<InlineMath math="2x+3y=6" />
													<table>
														<tr>
															<td>
																<InlineMath math="x" />
															</td>
															<td>
																<InlineMath math="0" />
															</td>
															<td>
																<InlineMath math="3" />
															</td>
														</tr>
														<tr>
															<td>
																<InlineMath math="y" />
															</td>
															<td>
																<InlineMath math="2" />
															</td>
															<td>
																<InlineMath math="0" />
															</td>
														</tr>
													</table>
													<InlineMath math="(x,y)=(0,2) (3,0)" />
												</div>
												<div className="col-md-6">
													<InlineMath math="3x+2y=6" />
													<table>
														<tr>
															<td>
																<InlineMath math="x" />
															</td>
															<td>
																<InlineMath math="0" />
															</td>
															<td>
																<InlineMath math="2" />
															</td>
														</tr>
														<tr>
															<td>
																<InlineMath math="y" />
															</td>
															<td>
																<InlineMath math="3" />
															</td>
															<td>
																<InlineMath math="0" />
															</td>
														</tr>
													</table>
													<InlineMath math="(x,y)=(0,3) (2,0)" />
												</div>
											</div>
										</div>
									</p>
									<hr />

									<p id="PK">
										<b>Pertidaksamaan Kuadrat</b>
										<br />
										Pertidaksamaan Kuadrat adalah suatu bentuk pertidaksamaan yang memuat variabel dengan derajat tertinggi dua. <br /> Contoh: <br />
										<ol>
											<li>
												<InlineMath math="2x^2+3x-5 \gt 0" />
											</li>
											<li>
												<InlineMath math="2x^2+3x-5 \le 0" />
											</li>
										</ol>
										Contoh: <br />
										<div className="container">
											<InlineMath math="x^2-4x-12=0" />
											<br />
											<InlineMath math="(x-6)(x+2)=0" />
											<br />
											<InlineMath math="x_1=6 \bigvee x_2=-2" />
											<br />
											HP: <InlineMath math="\set{x|-2 \lt x \lt 6, x \in R}" />
											<br />
										</div>
									</p>
									<hr />

									<p id="NM">
										<b>Nilai Mutlak</b> <br />
										Contoh: <br />
										<div className="container">
											<InlineMath math="|x+1|\lt 3" />
											<br />
											<InlineMath math="-3 \lt x+1 \lt 3" />
											<br />
											<div className="row mt-3 mb-2">
												<div className="col-md-4">
													<InlineMath math="-3 \lt x+1" />
													<br />
													<InlineMath math="-3=x+1" />
													<br />
													<InlineMath math="-4=x" />
													<br />
												</div>
												<div className="col-md-4">
													<InlineMath math="x+1 \lt 3" />
													<br />
													<InlineMath math="x+1=3" />
													<br />
													<InlineMath math="x=2" />
													<br />
												</div>
											</div>
											HP: <InlineMath math="\set{x|-4 \lt x \lt 2, x \in R}" />
											<br />
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

export default Inequality;
