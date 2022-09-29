import React, { useState } from 'react'

const StartGame=() =>{
  const [loading, setLoading] = useState(false)
  const [score, setScore] = useState(0)
  const startQuiz = async () =>{

  }
  return (
    <div>
      <h1 className="title">QUIZ</h1>
    <button className="start" onClick={startQuiz}>
      Start Quiz

    </button>
    <p className="score">Score:</p>
    {/* <img src={loading} alt=""/> */}
    </div>
  )
}

export default StartGame