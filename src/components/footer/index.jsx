import './footer.scss';

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-12">
						<h6>tentang</h6>
						<p className="text-justify">
							Kalkulus merupakan website untuk belajar materi-materi yang ada di dalam kalkulus. Website ini dibuat dan dikembangkan agar teman-teman dapat belajar kalkulus dengan mudah. Selain untuk mempelajari kalkulus, website ini juga
							dibuat sebagai tugas besar mata kuliah kalkukus.
						</p>
					</div>
					<div class="col-xs-6 col-md-3 offset-md-3">
						<h6>teknologi</h6>
						<ul class="footer-links">
							<li>
								<a href="https://reactjs.org/">React JS</a>
							</li>
							<li>
								<a href="https://sass-lang.com/">Sass</a>
							</li>
							<li>
								<a href="https://getbootstrap.com/">Bootstrap CSS</a>
							</li>
						</ul>
					</div>
				</div>
				<hr />
			</div>
			<div class="container">
				<div class="row">
					<div class="col-12 text-center">
						<p class="copyright-text">This Website created by Naufal Adhi Ramadhan {'(411221126)'} Teknik Informatika.</p>
					</div>
				</div>
			</div>n
		</div>
	);
};

export default Footer;
