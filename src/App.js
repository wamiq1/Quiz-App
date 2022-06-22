import './App.css';
import { useState } from 'react'

function App() {
  const questions = [
		{
			questionText: 'Which of the following is a server-side Java Script object?',
			answerOptions: [
				{ answerText: 'Function', isCorrect: false },
				{ answerText: 'File', isCorrect: true },
				{ answerText: 'FileUpload', isCorrect: false },
				{ answerText: 'Date', isCorrect: false },
			],
		},
		{
			questionText: 'Java script can be used for Storing the forms contents to a database file on the server',
			answerOptions: [
				{ answerText: 'False', isCorrect: false },
				{ answerText: 'True', isCorrect: true },
			],
		},
		{
			questionText: 'To insert a JavaScript into an HTML page, which tag is used?',
			answerOptions: [
				{ answerText: '< script=â€™javaâ€™>', isCorrect: false },
				{ answerText: '< javascript>', isCorrect: false },
				{ answerText: '< script>', isCorrect: true },
				{ answerText: '< js>', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the below is used in Java script to insert special characters?',
			answerOptions: [
				{ answerText: '&', isCorrect: true },
				{ answerText: '/', isCorrect: false },
				{ answerText: '-', isCorrect: false },
				{ answerText: '%', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the ways below is incorrect of instantiating a date?',
			answerOptions: [
				{ answerText: 'new Date(dateString)', isCorrect: false },
				{ answerText: 'new Date()', isCorrect: true },
				{ answerText: 'new Date(seconds)', isCorrect: false },
				{ answerText: 'new Date(year, month, day, hours, minutes, seconds, milliseconds)', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the below is used in Java script to insert special characters?',
			answerOptions: [
				{ answerText: 'The number of days since January 1st, 1900', isCorrect: true },
				{ answerText: 'The number of seconds since January 1st, 1970', isCorrect: false },
				{ answerText: 'The number of milliseconds since January 1st, 1970', isCorrect: false },
				{ answerText: 'The number of picoseconds since January 1st, 1970', isCorrect: false },
			],
		},
		{
			questionText: 'JavaScript ignores extra spaces',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: true },
			],
		},
		{
			questionText: 'Which is the correct way to write a JavaScript array?',
			answerOptions: [
				{ answerText: 'var txt = new Array(1:"arr",2:"kim",3:"jim")', isCorrect: false },
				{ answerText: 'var txt = new Array:1=(" arr ")2=("kim")3=("jim")', isCorrect: false },
				{ answerText: 'var txt = new Array("arr ","kim","jim")', isCorrect: true },
				{ answerText: 'var txt = new Array=" arr ","kim","jim"', isCorrect: false },
			],
		},
		{
			questionText: 'Javascript is an object oriented language?',
			answerOptions: [
				{ answerText: 'False', isCorrect: true },
				{ answerText: 'True', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is not a valid JavaScript variable name?',
			answerOptions: [
				{ answerText: '2java', isCorrect: true },
				{ answerText: '_java_and_ java _names', isCorrect: false },
				{ answerText: 'javaandjava', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
	};
  const handleQuestions = () => {
    const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
  }
  return (
    <div className="App">
      {showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => {
              return <div key={answerOption.answerText}>
              <input type="radio" id='check' onChange={() => handleAnswerOptionClick(answerOption.isCorrect)}/>
              <label id='check'>{answerOption.answerText}</label>
              {/* <button key={answerOption.answerText} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button> */}
              </ div>
            })}
            <button onClick={handleQuestions}>Next</button>
					</div>
				</>
			)}
    </div>
  );
}

export default App;
