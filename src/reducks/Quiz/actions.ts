import { Quiz } from "./types";

export const ActionTypes = {
  FETCH_QUIZZES_ID: "FETCH_QUIZZES_ID",
  FETCH_RANDOM_CHOICES: "FETCH_RANDOM_CHOICES",
  RESET_CHOICES: "RESET_CHOICES",
  FETCH_RANDOM_ANSWER: "FETCH_RANDOM_ANSWER",
  SELECTED_ANSWER: "SELECTED_ANSWER",
} as const;

export const fetchQuizzesIdAction = (id: string[]) => {
  return {
    type: "FETCH_QUIZZES_ID",
    payload: id,
  };
};

type fetchQuizzesIdAction = ReturnType<typeof fetchQuizzesIdAction>;

export const fetchRandomChoicesAction = (choices: Quiz[]) => {
  return {
    type: "FETCH_RANDOM_CHOICES",
    payload: choices,
  };
};
type fetchRandomChoicesAction = ReturnType<typeof fetchRandomChoicesAction>;

export const RESET_CHOICES = "RESET_CHOICES";
export const resetChoicesAction = () => {
  return {
    type: "RESET_CHOICES",
    payload: [],
  };
};
type resetChoicesAction = ReturnType<typeof resetChoicesAction>;

export const fetchRandomAnswerAction = (answer: Quiz) => {
  return {
    type: "FETCH_RANDOM_ANSWER",
    payload: answer,
  };
};
type fetchRandomAnswerAction = ReturnType<typeof fetchRandomAnswerAction>;

export const selectedAnswerAction = (selectAnswer: string) => {
  return {
    type: "SELECTED_ANSWER",
    payload: selectAnswer,
  };
};

type selectedAnswerAction = ReturnType<typeof selectedAnswerAction>;

export type Actions =
  | fetchQuizzesIdAction
  | fetchRandomChoicesAction
  | resetChoicesAction
  | fetchRandomAnswerAction
  | selectedAnswerAction;
