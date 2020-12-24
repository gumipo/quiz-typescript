import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getQuizzesId } from "../reducks/Quiz/selector";
import { useHistory } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

type StartQuizType = (children: Props) => any;

const StartQuiz: StartQuizType = ({ children }) => {
  const history = useHistory();
  const selector = useSelector((state) => state);
  const id = getQuizzesId(selector);

  useEffect(() => {
    if (id.length === 0) {
      history.push("/");
    }
  }, []);

  if (id.length === 0) {
    return <></>;
  } else {
    return children;
  }
};
export default StartQuiz;
