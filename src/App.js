import './App.css';
import { useState } from 'react';
import Questions from './views/Questions/index'

function App() {
  const quizQuestions = [
		{
			question: 'Which of the following is a server-side Java Script object?',
			answerOptions: [
				{ answer: 'Function', isCorrect: false },
				{ answer: 'File', isCorrect: true },
				{ answer: 'FileUpload', isCorrect: false },
				{ answer: 'Date', isCorrect: false },
			],
		},
		{
			question: 'Java script can be used for Storing the forms contents to a database file on the server',
			answerOptions: [
				{ answer: 'False', isCorrect: false },
				{ answer: 'True', isCorrect: true },
			],
		},
		{
			question: 'To insert a JavaScript into an HTML page, which tag is used?',
			answerOptions: [
				{ answer: '< script=â€™javaâ€™>', isCorrect: false },
				{ answer: '< javascript>', isCorrect: false },
				{ answer: '< script>', isCorrect: true },
				{ answer: '< js>', isCorrect: false },
			],
		},
		{
			question: 'Which of the below is used in Java script to insert special characters?',
			answerOptions: [
				{ answer: '&', isCorrect: true },
				{ answer: '/', isCorrect: false },
				{ answer: '-', isCorrect: false },
				{ answer: '%', isCorrect: false },
			],
		},
		{
			question: 'Which of the ways below is incorrect of instantiating a date?',
			answerOptions: [
				{ answer: 'new Date(dateString)', isCorrect: false },
				{ answer: 'new Date()', isCorrect: true },
				{ answer: 'new Date(seconds)', isCorrect: false },
				{ answer: 'new Date(year, month, day, hours, minutes, seconds, milliseconds)', isCorrect: false },
			],
		},
		{
			question: 'Which of the below is used in Java script to insert special characters?',
			answerOptions: [
				{ answer: 'The number of days since January 1st, 1900', isCorrect: true },
				{ answer: 'The number of seconds since January 1st, 1970', isCorrect: false },
				{ answer: 'The number of milliseconds since January 1st, 1970', isCorrect: false },
				{ answer: 'The number of picoseconds since January 1st, 1970', isCorrect: false },
			],
		},
		{
			question: 'JavaScript ignores extra spaces',
			answerOptions: [
				{ answer: 'True', isCorrect: false },
				{ answer: 'False', isCorrect: true },
			],
		},
		{
			question: 'Which is the correct way to write a JavaScript array?',
			answerOptions: [
				{ answer: 'var txt = new Array(1:"arr",2:"kim",3:"jim")', isCorrect: false },
				{ answer: 'var txt = new Array:1=(" arr ")2=("kim")3=("jim")', isCorrect: false },
				{ answer: 'var txt = new Array("arr ","kim","jim")', isCorrect: true },
				{ answer: 'var txt = new Array=" arr ","kim","jim"', isCorrect: false },
			],
		},
		{
			question: 'Javascript is an object oriented language?',
			answerOptions: [
				{ answer: 'False', isCorrect: true },
				{ answer: 'True', isCorrect: false },
			],
		},
		{
			question: 'Which of the following is not a valid JavaScript variable name?',
			answerOptions: [
				{ answer: '2java', isCorrect: true },
				{ answer: '_java_and_ java _names', isCorrect: false },
				{ answer: 'javaandjava', isCorrect: false },
				{ answer: 'None of the above', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [disabledBtn, setDisabledBtn] = useState(0);
	const [percentage, setPercentage] = useState(0);
	const [conditionalBtn, setConditionalBtn] = useState(false);
	const [grade, setGrade] = useState("");

	const handleAnswerScoring = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
	};

	const getPercentage = () => {
		const currentPercentage = percentage + score * 10
		setPercentage(currentPercentage);
		getGrade(currentPercentage)
		setShowScore(true);
	}
	const getGrade = (percentage) => {
		if (percentage >= 90) {
			setGrade("A+");
		}
		else if (percentage >= 80) {
			setGrade("B+");
		}
		else if (percentage >= 70) {
			setGrade("B");
		}
		else if (percentage >= 60) {
			setGrade("C+");
		}
		else if (percentage >= 50) {
			setGrade("C");
		}
		else if (percentage < 50) {
			setGrade("You are Fail");
		}
		else {
			setGrade("You are Fail");
		}
	}
  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
	if (nextQuestion < quizQuestions.length) {
		setCurrentQuestion(nextQuestion);
		setDisabledBtn(nextQuestion);

		if (nextQuestion === 8) {
			setConditionalBtn(true)
		}
	} else {
		setShowScore(true);
	}
  }

  const handlePreviousQuestion =() => {
	  const previousQuestion = currentQuestion - 1;
	  if (previousQuestion < quizQuestions.length) {
		  setCurrentQuestion(previousQuestion);
		  setDisabledBtn(previousQuestion)
	  }
	  else {
		setShowScore(false);
	  }
  }

  const resetHandler = () => {
	setShowScore(false);
	setScore(0);
	setPercentage(0);
	setDisabledBtn(0);
  }
  return (
    <div className="App">
      {showScore ? (
				<>
				<div className='score-section'>
					You scored {score} out of {quizQuestions.length}
				</div>
				<div>Your Percentage is {percentage}%</div>
				<div>Your Percentage is {grade}</div>
				<button onClick={resetHandler}>Restart</button>
				</>
			) : (
				<Questions 
					disabledBtn={disabledBtn}
					conditionalBtn={conditionalBtn}
					questions={quizQuestions} 
					currentQuestion={currentQuestion}
					handleAnswerScoring={handleAnswerScoring} 
					handleNextQuestion={handleNextQuestion}
					handlePreviousQuestion={handlePreviousQuestion}
					getPercentage={getPercentage}
				/>
			)}
    </div>
  );
}

export default App;
