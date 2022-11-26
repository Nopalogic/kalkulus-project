import { InlineMath } from 'react-katex';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import '../assets/styles/pages/fungsi.scss';
import BackButton from '../components/BackButton';
import Navbar from '../components/Navbar';

const Fungsi = () => {
	let subMaterial = [
		{
			id: 'pengertian',
			title: 'Pengertian',
		},
		{
			id: 'penyajian',
			title: 'Penyajian Fungsi',
		},
		{
			id: 'penyajian',
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
										<div className="container">
											<div className="row">
												<div className="col-md-4">
													<img src="" alt="" />
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
										<div className="container">
											<div className="row">
												<div className="col-md-4">
													<img src="" alt="" />
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
										Penyajian fungsi dengan menggunakan rumus matematis, misalnya luas lingkaran adalah <InlineMath math="L=\pi r^2" />. Disini domainnya adalah jari-jari (r) dan rangenya adalah luas (L). <br />
										Contoh: <br />
										<div className="container">
											<InlineMath math="g(x)=\sqrt{9-x^2}" />
											<br />
											<InlineMath math="\sqrt{9-9}=\sqrt{0}" />
											<br />

											{/* <InlineMath math="g(x)=\sqrt{9-x^2}" /><br />
											<InlineMath math="D_g=\set{x|-3 \le x \le 3, x \in R}" /><br />
											<InlineMath math="R_g=\set{x|0 \le g(x) \le 3, x \in R}" /><br /> */}
										</div>
									</p>
								</section>
								<hr className="mt-4 mb-2" />
								<section id="kesamaan">
									<h5 className="fw-bold">Kesamaan dan Operasi Dua Fungsi</h5>
									<p>
										Contoh: <br />
										<div className="container">
											Jika <InlineMath math="f(x)=\frac{1-x}{1+x}" /> dan <InlineMath math="g(x)=\frac{1-x}{x}" />, dengan masing-masing domain <InlineMath math="D_f= \set{x|x \neq -1}" /> dan <InlineMath math="D_g= \set{x|x \neq 0}" />,
											maka dapat ditentukan operasi berikut ini:
											<ol>
												<li>
													<InlineMath math="(f+g)(x)=f(x)+g(x)" />
													<br />
													<div className="ms-custom">
														<InlineMath math="= \frac{1-x}{1+x} + \frac{1-x}{x}" />
														<br />
														<InlineMath math="= \frac{x(1-x)+(1+x)(1-x)}{x(1+x)}" />
														<br />
														<InlineMath math="= \frac{x-x^2+(-x^2+x+1-x)}{x(1+x)}" />
														<br />
														<InlineMath math="= \frac{-x^2-x^2+x+1-x)}{x(1+x)}" />
														<br />
													</div>
												</li>
												<li>
													<InlineMath math="(f-g)(x)=f(x)-g(x)" />
													<br />
												</li>
												<li>
													<InlineMath math="(f \cdot g)(x)=f(x) \cdot g(x)" />
													<br />
												</li>
												<li>
													<InlineMath math="(\frac f g)(x)=\frac{f(x)}{g(x)}" />
													<br />
													<div className="ms-custom">
														<InlineMath math="=\frac{\big(\frac{1-x}{1+x}\big)}{(\frac{1-x}{x})}" />
													</div>
												</li>
												<li>
													<InlineMath math="(5 \cdot f)(x)=5 \cdot f(x)" />
													<br />
												</li>
											</ol>
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

export default Fungsi;
