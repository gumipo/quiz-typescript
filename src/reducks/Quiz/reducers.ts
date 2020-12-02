import * as Actions from "./actions";
import initialState from "../Store/intialState";
import { QuizzesState } from "./types";

export const QuizzesReducer = (state = initialState.quizzes, action) => {
  switch (action.type) {
    case Actions.FETCH_QUIZZES_ID:
      return {
        ...state,
        id: [...action.payload],
      };
    case Actions.FETCH_RANDOM_CHOICES:
      return {
        ...state,
        choices: [...action.payload],
      };
    case Actions.FETCH_RANDOM_ANSWER:
      return {
        ...state,
        answer: action.payload,
      };
    case Actions.RESET_CHOICES:
      return {
        ...state,
        choices: action.payload,
      };
    case Actions.SELECTED_ANSWER:
      return {
        ...state,
        selectAnswer: action.payload,
      };
    default:
      return state;
  }
};
