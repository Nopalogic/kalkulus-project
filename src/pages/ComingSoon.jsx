import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../assets/styles/pages/comingsoon.scss';

const ComingSoon = () => {
	const navigate = useNavigate();

	const navigateToBack = () => {
		navigate('/');
	};

	return (
		<div className="comingsoon">
			<Navbar />
			<div className="csContainer">
				<div className="csWrapper">
					<h2>Coming Soon</h2>
					<div className="box">
						<p>Sorry, this website is under construction. We're working hard to imporve this website and already to launch after.</p>
					</div>
					<button onClick={navigateToBack}>Back</button>
				</div>
			</div>
		</div>
	);
};

export default ComingSoon;
