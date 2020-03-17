export const SET_QUIZ = "SET_QUIZ"
export const ANSWER_CORRECT = "ANSWER_CORRECT"
export const ANSWER_WRONG = "ANSWER_WRONG"

export function setQuiz (questions){
  return {
    type: SET_QUIZ,
    questions
  }
}

export function answerCorrect (questionId){
  return {
    type: ANSWER_CORRECT,
    questionId
  }
}

export function answerWrong (questionId){
  return {
    type: ANSWER_WRONG,
    questionId
  }
}
