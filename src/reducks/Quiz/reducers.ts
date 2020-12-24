import { ActionTypes, Actions } from "./actions";
import initialState from "../Store/intialState";

export const QuizzesReducer = (
  state = initialState.quizzes,
  action: Actions
) => {
  switch (action.type) {
    case ActionTypes.FETCH_QUIZZES_ID:
      return {
        ...state,
        id: [action.payload],
      };
    case ActionTypes.FETCH_RANDOM_CHOICES:
      return {
        ...state,
        choices: [action.payload],
      };
    case ActionTypes.FETCH_RANDOM_ANSWER:
      return {
        ...state,
        answer: action.payload,
      };
    case ActionTypes.RESET_CHOICES:
      return {
        ...state,
        choices: action.payload,
      };
    case ActionTypes.SELECTED_ANSWER:
      return {
        ...state,
        selectAnswer: action.payload,
      };
    default:
      return state;
  }
};
