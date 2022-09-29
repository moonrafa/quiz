import React, { useState } from 'react';
import NextQuestion from './components/NextQuestion';
import QuestionCard from './components/QuestionCard';
import StartGame from './components/StartGame';
import { fetchQuizQuestions, Difficulty  } from './API';

const TOTAL_QUESTIONS = 10
const App = () => {
 

  const [questions, setQuestions] = useState([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [gameOver, setGameOver] = useState(true)
 
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) =>  {

  }
  
  return (
    <div className="app">
      <StartGame/>
      <QuestionCard currentQuestion={number + 1} totalQuestions={TOTAL_QUESTIONS} question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number]: undefined} callback={checkAnswer}/>   
      <NextQuestion/>   
    </div>
  );
}

export default App;
