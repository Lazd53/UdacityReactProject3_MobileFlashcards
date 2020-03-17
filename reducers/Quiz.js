import {
  SET_QUIZ,
  ANSWER_CORRECT,
  ANSWER_WRONG,
  CLEAR_QUIZ
} from '../actions/QuizAction';


const clearedQuiz = {
  questions: [],
  answeredCorrect:[],
  answeredWrong:[],
  totalQuestions: 0
}

export function Quiz ( state = clearedQuiz, action){
  switch(action.type){
    case SET_QUIZ:
      return {
        questions: action.questions,
        answeredCorrect: [],
        answeredWrong: [],
        totalQuestions: action.questions.length
      };
    case ANSWER_CORRECT:
      return {
        ...state,
          questions: state.questions.slice(1),
          answeredCorrect: state.answeredCorrect.concat(state.questions.slice(0,1))
      };
    case ANSWER_WRONG:
      return {
        ...state,
          questions: state.questions.slice(1),
          answeredWrong: state.answeredWrong.concat(state.questions.slice(0,1))
      }
    case CLEAR_QUIZ:
      return clearedQuiz;
    default:
      return state;
  }
}
