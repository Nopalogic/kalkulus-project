import { useNavigate } from 'react-router-dom';
import './button.scss';

const BackButton = (props) => {
	const navigate = useNavigate();

	const navigateToQuiz = () => {
		navigate(`/${props.url}`);
	};

	return <button onClick={navigateToQuiz}>Kuis</button>;
};

export default BackButton;	
