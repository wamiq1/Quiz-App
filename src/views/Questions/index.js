function Questions(props) {
    console.log('Props', props)
    return(
        <>
        <h1>Questions</h1>
            <div className='question-section'>
                <div className='question-count'>
                    <span>Question {props.currentQuestion + 1}</span>/{props.questions.length}
                </div>
                <div className='question-text'>{props.questions[props.currentQuestion].question}</div>
            </div>
            <div className='answer-section'>
                {props.questions[props.currentQuestion].answerOptions.map((answerOption) => {
                    return <div key={answerOption.answer}>
                            <input type="radio" onChange={() => props.handleAnswerScoring(answerOption.isCorrect)}/>
                            <label>{answerOption.answer}</label>
                            </ div>
                    })}
                <button disabled={!props.disabledBtn} onClick={props.handlePreviousQuestion}>Previous</button>
                {!props.conditionalBtn  ? <button onClick={props.handleNextQuestion}>Next</button> :
                <button onClick={props.getPercentage}>Done</button>}
            </div>
        </>
    )
}

export default Questions;