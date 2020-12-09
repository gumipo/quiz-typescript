import { QuizzesState } from "./types";
import { QuizState } from "./types";

export const FETCH_QUIZZES_ID = "FETCH_QUIZZES_ID";
export const fetchQuizzesIdAction = (id: number[]) => {
  return {
    type: "FETCH_QUIZZES_ID",
    payload: id,
  };
};

export const FETCH_RANDOM_CHOICES = "FETCH_RANDOM_CHOICES";
export const fetchRandomChoicesAction = (choices: QuizState[]) => {
  return {
    type: "FETCH_RANDOM_CHOICES",
    payload: choices,
  };
};

export const RESET_CHOICES = "RESET_CHOICES";
export const resetChoicesAction = () => {
  return {
    type: "RESET_CHOICES",
    payload: [],
  };
};

export const FETCH_RANDOM_ANSWER = "FETCH_RANDOM_ANSWER";
export const fetchRandomAnswerAction = (answer: QuizState[]) => {
  return {
    type: "FETCH_RANDOM_ANSWER",
    payload: answer,
  };
};

export const SELECTED_ANSWER = "SELECTED_ANSWER";
export const selectedAnswerAction = (selectAnswer: string) => {
  return {
    type: "SELECTED_ANSWER",
    payload: selectAnswer,
  };
};
