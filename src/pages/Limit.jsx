import '../assets/styles/pages/limit.scss';
import Navbar from '../components/Navbar';

const Limit = () => {
	return (
		<div className="limit">
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-4 d-none d-md-block">
						<div className="sidebar">
							<div className="card mb-3">
								<div className="card-body pt-2 pb-2">
									<h4 className="m-0 p-0">Limit</h4>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-8 mb-5">
						<div className="wrapper">
							<div className="main">
								<h2>Title</h2>
								<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam tempora illum aut corporis sequi deserunt?</p>
							</div>
							<div className="back-btn">
								<button id='back'>Kembali</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Limit;
