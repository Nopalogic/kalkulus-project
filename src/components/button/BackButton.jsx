import { useNavigate } from 'react-router-dom';
import './button.scss';

const BackButton = () => {
	const navigate = useNavigate();

	const navigateToHome = () => {
		navigate('/');
	};

	return <button onClick={navigateToHome}>Kembali</button>;
};

export default BackButton;
