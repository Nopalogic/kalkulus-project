import { useNavigate } from 'react-router-dom';
import '../assets/styles/components/back-button.scss';

const BackButton = () => {
	const navigate = useNavigate();

	const navigateToHome = () => {
		navigate('/');
	};
	return (
		<div className="backbtn">
			<button onClick={navigateToHome}>Kembali</button>
		</div>
	);
};

export default BackButton;
