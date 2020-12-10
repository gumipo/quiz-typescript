import { Quiz } from "./types";
import { StoreState } from "./../Store/types";
import { Dispatch } from "redux";
import axios from "axios";
import {
  fetchQuizzesIdAction,
  fetchRandomAnswerAction,
  fetchRandomChoicesAction,
  Actions,
} from "./actions";

export const fetchQuizzesId = () => {
  return async (dispatch: Dispatch<Actions>) => {
    const url = `https://uxdaystokyo.com/glossary-app-api/GlossaryIds.php`;
    await axios
      .get(url)
      .then((response) => {
        const id = response.data;
        dispatch(fetchQuizzesIdAction(id));
      })
      .catch(() => {
        alert("ページの読み込みに失敗しました。通信状況をお確かめください");
      });
  };
};

export const randomQuizzesSet = () => {
  return async (dispatch: Dispatch<Actions>, getState: () => StoreState) => {
    const RANDOM_COUNT = 4;
    const ANSEWR_RANDOM_COUNT = 1;
    const quizzesId = getState().quizzes.id;
    const randomId = randomSelect(quizzesId.slice(), RANDOM_COUNT) as string[];
    const randomChoices = await Promise.all(
      randomId.map((id: string) =>
        axios
          .get(
            `https://uxdaystokyo.com/glossary-app-api/GlossaryDetail.php?glossary-id=${id}`
          )
          .then((result) => {
            return result.data;
          })
          .catch(() => {
            alert("ページの読み込みに失敗しました。通信状況をお確かめください");
          })
      )
    );
    const randomAnswer = randomSelect(
      randomChoices.slice(),
      ANSEWR_RANDOM_COUNT
    ) as Quiz[];
    const answer = randomAnswer[0];
    dispatch(fetchRandomChoicesAction(randomChoices));
    dispatch(fetchRandomAnswerAction(answer));
  };
};

const randomSelect = (array: string[] | Quiz[], num: number) => {
  let newArray = [];
  while (newArray.length < num && array.length > 0) {
    const rand = Math.floor(Math.random() * array.length);
    newArray.push(array[rand]);
  }
  return newArray;
};
