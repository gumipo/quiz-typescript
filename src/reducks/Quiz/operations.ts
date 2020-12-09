import { StoreState } from "./../Store/types";
import { Dispatch } from "redux";
import axios from "axios";
import {
  fetchQuizzesIdAction,
  fetchRandomAnswerAction,
  fetchRandomChoicesAction,
} from "./actions";

export const fetchQuizzesId = () => {
  return async (dispatch: Dispatch) => {
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
  return async (dispatch: Dispatch, getState: () => StoreState) => {
    const RANDOM_COUNT = 4;
    const ANSEWR_RANDOM_COUNT = 1;
    const quizzesId = getState().quizzes.id;
    const randomId = randomSelect(quizzesId.slice(), RANDOM_COUNT);
    const randomChoices = await getDataByRandomIds(randomId);
    const randomAnswer = randomSelect(
      randomChoices.slice(),
      ANSEWR_RANDOM_COUNT
    );
    const answer = randomAnswer[0];
    dispatch(fetchRandomChoicesAction(randomChoices));
    dispatch(fetchRandomAnswerAction(answer));
  };
};

const getDataByRandomIds = async (randomIds: number[]) => {
  const ret = [];
  for (let i = 0; i < randomIds.length; i++) {
    let data = await getDataById(randomIds[i]);
    ret.push(data);
  }
  return ret;
};

const getDataById = async (id: number) => {
  const url = `https://uxdaystokyo.com/glossary-app-api/GlossaryDetail.php?glossary-id=${id}`;
  const res = axios
    .get(url)
    .then((result) => {
      return result.data;
    })
    .catch(() => {
      alert("ページの読み込みに失敗しました。通信状況をお確かめください");
    });
  return res;
};

const randomSelect = (array: any, num: number) => {
  let newArray = [];
  while (newArray.length < num && array.length > 0) {
    const rand = Math.floor(Math.random() * array.length);
    newArray.push(array[rand]);
  }
  return newArray;
};
