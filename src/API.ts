export type Question = {
  category: string
  correct_answer: string
  

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

}

