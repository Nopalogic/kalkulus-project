import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../components/quizApp/quizApp.scss';
import { fungsiQuestions as questions } from '../../data/quizAppData';
import Navbar from '../../components/Navbar';

const FungsiQuiz = () => {
	// Properties
	const [showResults, setShowResults] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const navigate = useNavigate();

	/* A possible answer was clicked */
	const optionClicked = (isCorrect) => {
		// Increment the score
		if (isCorrect) {
			setScore(score + 1);
		}

		if (currentQuestion + 1 < questions.length) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setShowResults(true);
		}
	};

	const restartGame = () => {
		setScore(0);
		setCurrentQuestion(0);
		setShowResults(false);
	};

	return (
		<div className="quizApp">
			<Navbar />
			<div className="container-fluid d-flex justify-content-center mt-5 pt-4">
				{showResults ? (
					<div className="final-results">
						<h1>Final Results</h1>
						<h2>
							{score} out of {questions.length} correct - ({(score / questions.length) * 100}%)
						</h2>
						<div className="d-flex flex-column">
							<button onClick={() => restartGame()}>Restart</button>
							<button onClick={() => navigate('/fungsi')}>Kembali</button>
						</div>
					</div>
				) : (
					<div className="question-card">
						<div className="row">
							<div className="col-6">
								<div className="question-title">
									<h2>
										Question: {currentQuestion + 1} out of {questions.length}
									</h2>
									<h3 className="question-text">{questions[currentQuestion].text}</h3>
								</div>
							</div>
							<div className="col-6">
								<div className="options"></div>
								<ul>
									{questions[currentQuestion].options.map((option) => {
										return (
											<li key={option.id} onClick={() => optionClicked(option.isCorrect)}>
												{option.text}
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default FungsiQuiz;
