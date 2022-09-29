import { AnswerObject } from "./StartGame";
import {Wrapper, ButtonWrapper} from './QuestionCardStyle'

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  currentQuestion: number;
  totalQuestions: number;
}
const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, currentQuestion, totalQuestions}) => {
  return (
    <Wrapper>
      <p className="number">
        Question {currentQuestion} out of {totalQuestions}
      </p>
      <h4 dangerouslySetInnerHTML={{__html: question}}></h4>
      <div className="answers">
      {answers.map(answer => (
        <ButtonWrapper correct={userAnswer?.correctAnswer === answer}
        userClicked={userAnswer?.answer === answer}
         key={answer} className="answer">
          <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{__html: answer}}></span>
          </button>
        </ButtonWrapper>
      ))}
      </div>
    </Wrapper>
  )
}
export default QuestionCard