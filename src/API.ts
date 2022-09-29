import { shuffleArray } from "./ShuffleArray";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
  

}


export enum Difficulty{
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard"
}
export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=11&difficulty=${difficulty}&type=multiple`

  // await fetch and await json

const data = await (await fetch(endpoint)).json()
return data.results.map((question: Question) => ({
  ...question,
  answers: shuffleArray([
    ...question.incorrect_answers, question.correct_answer
  ])
  

}))
}
export type QuestionState = Question & {answers: string[]}

