type Props = {
  question: string
  answers: string[]
  callback: any
  userAnswer: any
  currentQuestion: number
  totalQuestions: number
}
const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, currentQuestion, totalQuestions}) => {
  return (
    <div className="question-card">
      <p className="number">
        Question: {currentQuestion} out of {totalQuestions}
      </p>
      <h4 dangerouslySetInnerHTML={{__html: question}}></h4>
      <div className="answers">
      {answers.map(answer => (
        <div className="answer">
          <button disabled={userAnswer} onClick={callback}>
            <span dangerouslySetInnerHTML={{__html: answer}}></span>
          </button>
        </div>
      ))}
      </div>
    </div>
  )
}
export default QuestionCard