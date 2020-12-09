import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "../Component/UIkit/Button";
import {
  getQuizChoices,
  getQuizAnswer,
  getQuizzesId,
} from "../reducks/Quiz/selector";
import { randomQuizzesSet, fetchQuizzesId } from "../reducks/Quiz/operations";
import { selectedAnswerAction } from "../reducks/Quiz/actions";
import Loading from "../Component/Loading";
import { QuizState } from "../reducks/Quiz/types";

const Quiz: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const id = getQuizzesId(selector);
  const choices = getQuizChoices(selector);
  const answer = getQuizAnswer(selector);

  const resultJudgment = (index: number) => {
    const selectAnswer = choices[index].title;
    dispatch(selectedAnswerAction(selectAnswer));

    if (selectAnswer === answer.title) {
      history.push("/correct");
    } else {
      history.push("/mistake");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchQuizzesId());
  }, []);

  //Todo:2回発火するのを修正
  useEffect(() => {
    if (id.length === 0) {
      return;
    }
    dispatch(randomQuizzesSet());
  }, [id.length]);

  useEffect(() => {
    if (choices.length === 0) {
      return;
    }
    setIsLoading(false);
  }, [choices]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <StyledSection>
          <StyledQuizWrap>
            <StyledBackground />
            <StyledTitle>説明に合う用語はどれ？</StyledTitle>
            <StyledDescriptionArea>
              <p>{answer.description}</p>
            </StyledDescriptionArea>
            <StyledButtonArea>
              {choices.length > 0 &&
                choices.map((choice, index: number) => (
                  <Button
                    fill={true}
                    key={index}
                    label={choice.title}
                    onClick={() => resultJudgment(index)}
                  />
                ))}
            </StyledButtonArea>
          </StyledQuizWrap>
        </StyledSection>
      )}
    </>
  );
};
export default Quiz;

const StyledSection = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
`;

const StyledQuizWrap = styled.div`
  position: relative;
  width: 375px;
  overflow: hidden;
  background-color: white;
  z-index: 1;
  @media screen and (min-width: 640px) {
    width: 640px;
    height: 1024px;
  }
`;

const StyledBackground = styled.div`
  width: 100%;
  height: 254px;
  background: linear-gradient(90deg, #9b51e0 0%, #bb6bd9 100%);
  position: absolute;
  z-index: -1;
  ::before {
    content: "";
    background-color: white;
    width: 479px;
    height: 229px;
    position: absolute;
    top: 172px;
    left: -52px;
    border-radius: 50%;
    @media screen and (min-width: 640px) {
      width: 817.49px;
      left: -88.75px;
    }
  }
`;

const StyledTitle = styled.h1`
  width: 342px;
  height: 38px;
  text-align: center;
  font-size: 28px;
  margin: 40px auto 32px auto;
  color: white;
  z-index: 2;
`;

const StyledDescriptionArea = styled.div`
  width: 327px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0px 4px 16px rgba(44, 18, 76, 0.2);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 17px;
    width: 295px;
    height: 54;
    line-height: 160%;
  }
`;

const StyledButtonArea = styled.div`
  width: 297px;
  height: 320px;
  margin: 27px auto 108px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
