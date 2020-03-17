import {
  SET_QUIZ,
  ANSWER_CORRECT,
  ANSWER_WRONG,
  CLEAR_QUIZ
} from '../actions/QuizAction';


const clearedQuiz = {
  questions: [],
  answeredCorrect:[],
  answeredWrong:[]
}

export function Quiz ( state = clearedQuiz, action){
  switch(action.type){
    case SET_QUIZ:
      return {
        questions: action.questions,
        answeredCorrect: [],
        answeredWrong: []
      };
    case ANSWER_CORRECT:
      return {
        ...state,
          ...state.questions.filter( question => question.id)
      };
    case ANSWER_WRONG:
      return {
        ...state,
          ...state.questions.filter( question => question.id)
      }
    case CLEAR_QUIZ:
      return clearedQuiz;
    default:
      return state;
  }
}
