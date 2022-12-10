import { useNavigate } from 'react-router-dom';
import './back-button.scss';

const BackButton = () => {
	const navigate = useNavigate();

	const navigateToHome = () => {
		navigate('/');
	};

	const navigateToQuiz = () => {
		navigate('/quiz');
	};

	return (
		<div className="backbtn">
			<button onClick={navigateToQuiz}>Kuis</button>
			<button onClick={navigateToHome}>Kembali</button>
		</div>
	);
};

export default BackButton;
