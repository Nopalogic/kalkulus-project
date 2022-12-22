import { InlineMath } from 'react-katex';
import { Link } from 'react-scroll';
import garis from '../../assets/images/diagram-garis.png';
import panah from '../../assets/images/diagram-panah.png';
import BackButton from '../../components/button/BackButton';
import QuizButton from '../../components/button/QuizButton';
import Navbar from '../../components/Navbar';
import { fungsi } from '../../data/material';
import './fungsi.scss';

const Fungsi = () => {
	return (
		<div className="fungsi">
			<Navbar />
			<div className="container pb-5">
				<div className="sidebar">
					{fungsi.map((module) => (
						<Link to={module.id} spy={true} smooth={false} offset={-72} duration={100} style={{ textDecoration: 'none' }}>
							<div className="card mb-3 bg-dark text-white pointer">
								<div className="card-body pt-2 pb-2">
									<h4 className="m-0 p-0">{module.title}</h4>
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
								<hr className="mt-4 mb-2" />
								<section id="pengertian">
									<p>
										<b>Fungsi</b> merupakan pemetaan setiap anggota dari suatu himpunan (disebut dengan domain) kepada anggota himpunan lainnya (disebut dengan kodomain).
									</p>
								</section>
								<section id="penyajian">
									<h5 className="fw-bold">Penyajian Fungsi</h5>
									<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus totam illum veritatis laudantium optio aliquid.</p>
									<p>
										<b>Diagram Panah</b>
										<div className="container mt-2">
											<div className="row">
												<div className="col-md-4">
													<img src={panah} alt="diagram-panah" className="img-fluid" />
												</div>
												<div className="col-md-8">
													<p>
														Masing-masing panah mengaitkan suatu elemen dari A ke suatu elemen dari B. Panah menunjukan bahwa <InlineMath math="f(x)" /> dipadankan dengan <InlineMath math="x" />, <InlineMath math="f(a)" /> dipadankan dengan{' '}
														<InlineMath math="a" /> dan seterusnya.
													</p>
												</div>
											</div>
										</div>
									</p>
									<p>
										<b>Diagram Grafik</b>
										<div className="container mt-2">
											<div className="row">
												<div className="col-md-4">
													<img src={garis} alt="diagram-garis" className="img-fluid" />
												</div>
												<div className="col-md-8">
													<p>
														Cara paling umum untuk menggambarkan suatu fungsi yaitu dengan menggunakan grafik. Jika f adalah fungsi dengan domain A, maka grafiknya adalah himpunan pasangan berurutan{' '}
														<InlineMath math="\set{(x, f(x))|x \in A}" />.
													</p>
												</div>
											</div>
										</div>
									</p>
									<p>
										<b>Aljabar</b>
										<br />
										Penyajian fungsi dengan menggunakan rumus matematis, misalnya luas lingkaran adalah <InlineMath math="L=\pi r^2" />. Disini domainnya adalah jari-jari {'(r)'} dan rangenya adalah luas {'(L)'}. <br />
										Contoh: <br />
										<div className="container">
											Carilah daerah defini dan daerah nilai dar fungsi <InlineMath math="g(x)=\sqrt{9-x^2}" />
											<br />
											Dalam hal ini kita harus membatasi x sehingga <InlineMath math="g(x) = 9-x^2 \ge 0" />, dengan tujuan menghindari nilai tak riil.
											<br />
											Menentukan domain g dapat mengguanakan cara berikut: <br />
											<InlineMath math="9-x^2 \ge 0" />, maka <InlineMath math="9 \ge x^2" /> atau <InlineMath math="x^2 \le 9" />, sehingga <InlineMath math="-3 \le x \le 3" /> <br />
											Jadi domain g adalah <InlineMath math="D_g = \set{x \in R | -3 \le x \le 3}" /> <br />
											Sedangkan untuk mencari range, dapat dikonstruksi dari domain sehingga mendapat batas nilai untuk fungsi <InlineMath math="g(x)=\sqrt{9-x^2}" /> yang dapat dilakukan dengan cara berikut: <br />
											<InlineMath math="-3 \le x \le 3" />, maka <InlineMath math="0 \le x^2 \le 9" />, maka <InlineMath math="-9 \le -x^2 \le 0" />, sehingga <InlineMath math="0 \le 9-x^2 \le 9" />, maka{' '}
											<InlineMath math="0 \le\sqrt{9-x^2}\le 3" /> <br />
											Jadi range g adalah <InlineMath math="R_g=\set{g(x) \in R | 0 \le g(x) \le 3}" />
										</div>
									</p>
								</section>
								<hr className="mt-4 mb-2" />
								<section id="kesamaan">
									<h5 className="fw-bold">Kesamaan dan Operasi Dua Fungsi</h5>
									<p>
										<div className="container">
											Misalkan f dan g terdefinisi sebagai himpunan D, maka
											<ol className="">
												<li>
													<InlineMath math="(f+g)(x)=f(x)+g(x)" /> untuk setiap <InlineMath math="x \in D" />.
												</li>
												<li>
													<InlineMath math="(f-g)(x)=f(x)-g(x)" /> untuk setiap <InlineMath math="x \in D" />.
												</li>
												<li>
													<InlineMath math="(f \cdot g)(x)=f(x) \cdot g(x)" /> untuk setiap <InlineMath math="x \in D" />.
												</li>
												<li>
													<InlineMath math="(k \cdot f)(x)=k \cdot f(x)" /> untuk setiap <InlineMath math="x \in D" /> dan k adalah konstanta.
												</li>
												<li>
													<InlineMath math="\Big(\frac{f}{g}\Big)(x)=\frac{f(x)}{g(x)}" /> untuk setiap <InlineMath math="x \in D" /> dan <InlineMath math="g(x) \neq 0" />
												</li>
											</ol>
											Jika domain f adalah D<sub>f</sub> dan domain g adalah D<sub>g</sub> maka domain untuk fungsi f dan g diatas adalah <InlineMath math="D_f \cap D_g" />.
										</div>
									</p>
									<p>
										<b>Kesamaan dua buah fungsi</b>
										<div className="container">
											fungsi f dan g dikatakan sama {'(ditulis f=g),'} jika fungsi tersebut <InlineMath math="D_f=D_g" /> dan <InlineMath math="f(x)=g(x)" />, untuk setiap <InlineMath math="x \in D" /> <br />
											Contoh: <br />
											Fungsi <InlineMath math='f(x) = \cos^2 x' /> dan <InlineMath math='g(x)=1-\sin^2x' /> adalah sama, karena <InlineMath math='D_f = D_g =R' /> dan <InlineMath math='f(x) = g(x)' />, untuk setiap <InlineMath math="x \in R" />
										</div>
									</p>
								</section>
							</div>
							<div className="button-wrapper">
								<QuizButton url="quiz-fungsi" />
								<BackButton />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Fungsi;
