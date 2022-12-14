import React, { useState } from 'react'
import { fetchQuizQuestions, Difficulty, QuestionState } from '../API'
import QuestionCard from './QuestionCard';
import { Wrapper } from '../AppStyle';
import loadingGif from    '../assets/gif.gif'
export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}
const TOTAL_QUESTIONS = 10


const StartGame = () => {
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  const startQuiz = async () => {
    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY)
    setLoading(true)
    setGameOver(false) 
    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>)  =>  {
    if(!gameOver){
      const answer = e.currentTarget.value
      const correct = questions[number].correct_answer === answer

      if(correct)setScore(prev => prev + 100)

      const answerObject = {
        question: questions[number].question,
        answer, 
        correct,
        correctAnswer: questions[number].correct_answer
      }
      setUserAnswers((prev) => [...prev, answerObject])
    }

  }
  const nextQuestion = () => {
    const nextQuestion = number + 1
    if(nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true)
    }else{
      setNumber(nextQuestion)
    }


  }
  return (
    <Wrapper>
      <h1 className="title">QUIZ</h1>
    {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (<button className="start" onClick={startQuiz}>
      Start Quiz
    </button>): null} 
   {!gameOver ?  ( <p className="score">Score: {score} </p>) : null}

     {loading && ( <img src={loadingGif} alt=""/>)}  
    {!loading &&  !gameOver && ( <QuestionCard currentQuestion={number + 1} totalQuestions={TOTAL_QUESTIONS} question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number]: undefined} callback={checkAnswer} />)} 

     {!loading && !gameOver && userAnswers.length === number+1 && number !== TOTAL_QUESTIONS-1 ? (<button className="next" onClick={nextQuestion}>
      Next</button>): null}
     
    </Wrapper>
  )
}

export default StartGame