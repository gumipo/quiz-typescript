import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Card from "../Component/UIkit/Card";
import sad from "../assets/Image/sad.svg";
import decoration from "../assets/Image/decoration.svg";
import decorationMedium from "../assets/Image/decorationMedium.svg";
import Twemoji from "react-twemoji";
import Button from "../Component/UIkit/Button";
import Footer from "../Component/Footer/Footer";
import {
  getQuizChoices,
  getQuizAnswer,
  getSelectedAnswer,
} from "../reducks/Quiz/selector";
import { resetChoicesAction } from "../reducks/Quiz/actions";

const Mistake = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const choices = getQuizChoices(selector);
  const answer = getQuizAnswer(selector);
  const selectAnswer = getSelectedAnswer(selector);

  const [commentaries, setCommentaries] = useState([]);

  useEffect(() => {
    const commentaryTitle = choices.filter(
      (item) => item.title !== answer.title
    );
    setCommentaries(commentaryTitle);
  }, []);

  return (
    <StyledSection>
      <StyledMistake>
        <StyledBackground />
        <StyledMistakeTitle>
          <Twemoji options={{ className: "twemoji" }}>😭</Twemoji>
          <h1>不正解</h1>
          <Twemoji options={{ className: "twemoji" }}>😭</Twemoji>
        </StyledMistakeTitle>
        <Card
          title={answer.title}
          description={answer.description}
          url={answer.url}
          selectAnswer={selectAnswer}
        />
        <StyledCaracterArea>
          <StyledCaracterIconArea>
            <img src={sad} alt="character" />
          </StyledCaracterIconArea>
          <StyledCaracterCommentArea>
            <p>
              次は正解を目指して
              <br />
              頑張ろう！
            </p>
          </StyledCaracterCommentArea>
        </StyledCaracterArea>
        <StyledCommentary>
          <h2>他の選択肢の解説はこちら</h2>
          <StyledCommentaryNav>
            {commentaries.map((commentary, index) => (
              <li key={index}>
                <a href={commentary.url} target="_brank">
                  {commentary.title}
                </a>
              </li>
            ))}
          </StyledCommentaryNav>
        </StyledCommentary>
        <Button
          fill={true}
          label="もう一度クイズに挑戦する"
          onClick={() => {
            dispatch(resetChoicesAction());
            history.push("/quiz");
          }}
        />
        <StyledFooterArea>
          <Footer label="用語サイトに移動する" />
        </StyledFooterArea>
      </StyledMistake>
    </StyledSection>
  );
};

export default Mistake;

const StyledSection = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
`;

const StyledMistake = styled.div`
  text-align: center;
  width: 375px;
  background-color: white;
  position: relative;
  z-index: 1;
  overflow: hidden;
  @media screen and (min-width: 640px) {
    width: 640px;
    height: 1024px;
  }
`;

const StyledBackground = styled.div`
  width: 100%;
  height: 254px;
  position: absolute;
  background: rgba(80, 96, 134, 0.7);
  z-index: -1;
  top: 0;
  ::after {
    content: url(${decoration});
    @media screen and (min-width: 640px) {
      content: url(${decorationMedium});
    }
  }

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

const StyledMistakeTitle = styled.div`
  width: 172px;
  margin: 40px auto 32px auto;
  display: flex;
  align-items: center;
  h1 {
    width: 100px;
    font-weight: bold;
    font-size: 28px;
    margin: 2px 0 auto 0;
    color: white;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  }
  img {
    width: 36px;
    height: 36px;
  }
`;
const StyledCaracterArea = styled.div`
  width: 327px;
  height: 80px;
  margin: 22px auto 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledCaracterIconArea = styled.div`
  background: rgba(0, 0, 0, 0.08);
  width: 80px;
  height: 80px;
  border-radius: 40px;
  display: grid;
  place-items: center;
  border: 2px solid #ffffff;
  box-sizing: border-box;
`;

const StyledCaracterCommentArea = styled.div`
  width: 231px;
  height: 74px;
  display: flex;
  align-items: center;
  text-align: left;
  position: relative;
  background: #ffffff;
  border: 2px solid #552b89;
  border-radius: 8px;
  box-sizing: border-box;

  ::before,
  ::after {
    right: 100%;
    top: 50%;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }
  ::before {
    border-color: rgba(255, 255, 255, 0);
    border-right-color: #ffffff;
    border-width: 11px;
    margin-top: -11px;
    z-index: 1;
    transform: translateX(3px);
  }
  ::after {
    border-color: rgba(85, 43, 137, 0);
    border-right-color: #552b89;
    border-width: 11px;
    margin-top: -11px;
  }
  p {
    width: 200px;
    font-size: 17px;
    color: #552b89;
    margin: 10px auto 10px 16px;
    line-height: 160%;
  }
`;

const StyledCommentary = styled.div`
  width: 100%;
  text-align: left;
  @media screen and (min-width: 640px) {
    width: 640px;
    margin-top: 10px;
    margin-left: 130px;
  }

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin: 34px 31px 0 22px;
  }
`;

const StyledCommentaryNav = styled.ul`
  font-family: "Roboto";
  margin: 8px auto 32px 29px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding-left: 5px;
  li {
    list-style-type: none;
    position: relative;
    padding-left: 0.6em;
    ::before {
      content: "";
      border-radius: 50%;
      width: 4px;
      height: 4px;
      display: block;
      position: absolute;
      left: 0;
      top: 0.7rem;
      padding: 0;
      background: black;
    }
  }

  a {
    font-size: 17px;
    margin-bottom: 24px;
    :link {
      color: #506bf7;
    }
    :visited {
      color: #552b89;
    }
  }
`;
const StyledFooterArea = styled.footer`
  margin: 32px auto 103px auto;
`;
