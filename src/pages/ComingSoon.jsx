import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ComingSoon = () => {
	const navigate = useNavigate();

	const navigateToBack = () => {
		navigate('/', { replace: true });
	};

	return (
		<div className="comingsoon">
			<Navbar />
			<div className="d-flex justify-content-center align-items-center">
				<div className="wrapper">
					<h4>coming soon</h4>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, ipsam?</p>
					<button onClick={navigateToBack()}>Back</button>
				</div>
			</div>
		</div>
	);
};

export default ComingSoon;
