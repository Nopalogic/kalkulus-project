import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import '../assets/styles/pages/template.scss';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';

const Template = () => {
	return (
		<div className="diferensial">
			<Navbar />
			<div className="container pb-5">
				<div className="sidebar">
					{diferensial.map((material) => (
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
						<div className="main">
							<div className="wrapper">
								<h2>Lorem</h2>
								<hr className="my-2" />
								<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam tempora illum aut corporis sequi deserunt?</p>
							</div>
							<BackButton />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Template;
