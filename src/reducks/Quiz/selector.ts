import { createSelector } from "reselect";
import { DefaultRootState } from "react-redux";
import { Quiz } from "./types";

const quizzesSelector = (state: DefaultRootState) => state.quizzes;

export const getQuizzesId = createSelector(
  [quizzesSelector],
  (state) => state.id
);

export const getQuizChoices = createSelector(
  [quizzesSelector],
  (state) => state.choices
);

export const getQuizAnswer = createSelector(
  [quizzesSelector],
  (state) => state.answer
);

export const getSelectedAnswer = createSelector(
  [quizzesSelector],
  (state) => state.selectAnswer
);
