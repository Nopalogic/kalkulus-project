import '../assets/styles/components/footer.scss';

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-12">
						<h6>tentang</h6>
						<p className="text-justify">
							Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We
							will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
						</p>
					</div>
					<div class="col-xs-6 col-md-3 offset-md-3">
						<h6>teknologi</h6>
						<ul class="footer-links">
							<li>
								<p>React JS</p>
							</li>
							<li>
								<p>Sass</p>
							</li>
							<li>
								<p>Bootstrap CSS</p>
							</li>
						</ul>
					</div>
				</div>
				<hr />
			</div>
			<div class="container">
				<div class="row">
					<div class="col-12 text-center">
						<p class="copyright-text">This Website created by Naufal Adhi.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
