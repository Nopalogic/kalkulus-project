import '../assets/styles/components/footer.scss';

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-12">
						<h6>tentang</h6>
						<p className="text-justify">
							Kalkulus merupakan website untuk belajar materi-materi yang ada di dalam kalkulus. Website ini dibuat dan dikembangkan agar teman-teman dapat belajar kalkulus dengan mudah.
						</p>
					</div>
					<div class="col-xs-6 col-md-3 offset-md-3">
						<h6>teknologi</h6>
						<ul class="footer-links">
							<li>
								<a href='https://reactjs.org/' target='_blank'>React JS</a>
							</li>
							<li>
								<a href='https://sass-lang.com/' target='_blank'>Sass</a>
							</li>
							<li>
								<a href='https://getbootstrap.com/' target='_blank'>Bootstrap CSS</a>
							</li>
						</ul>
					</div>
				</div>
				<hr />
			</div>
			<div class="container">
				<div class="row">
					<div class="col-12 text-center">
						<p class="copyright-text">This Website created by Naufal Adhi Ramadhan.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
