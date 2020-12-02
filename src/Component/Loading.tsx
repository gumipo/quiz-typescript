import React from "react";
import styled from "styled-components";
import Button from "./UIkit/Button";

const Loading: React.FC = () => {
  return (
    <StyledSection>
      <StyledQuizWrap>
        <StyledBackground />
        <StyledTitle>説明に合う用語はどれ？</StyledTitle>
        <StyledDescriptionArea>
          <div />
        </StyledDescriptionArea>
        <StyledButtonDummyUpperRow>
          <Button fill={true} />
          <Button fill={true} />
        </StyledButtonDummyUpperRow>
        <StyledButtonDummyLowerRow>
          <Button fill={true} />
        </StyledButtonDummyLowerRow>
      </StyledQuizWrap>
    </StyledSection>
  );
};

export default Loading;

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

  div {
    width: 295px;
    height: 100px;
    border-radius: 2px;

    ::before {
      content: "";
      background: linear-gradient(90deg, #9b51e0 0%, #bb6bd9 100%);
      position: absolute;
      top: 135px;
      width: 295px;
      height: 17px;
      border-radius: 5px;
    }
    ::after {
      content: "";
      background: linear-gradient(90deg, #9b51e0 0%, #bb6bd9 100%);
      position: absolute;
      top: 165px;
      width: 295px;
      height: 17px;
      border-radius: 5px;
    }
    animation: flash 1.5s linear infinite;
    @keyframes flash {
      50% {
        opacity: 0.3;
      }
    }
  }
`;

const StyledButtonDummyUpperRow = styled.div`
  width: 297px;
  height: 160px;
  margin: 25px auto 25px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ::before {
    content: "";
    background: linear-gradient(90deg, #9b51e0 0%, #bb6bd9 100%);
    margin: 20px;
    width: 250px;
    height: 17px;
    border-radius: 5px;
    position: absolute;
    z-index: 100;
    top: 240px;
  }
  ::after {
    content: "";
    background: linear-gradient(90deg, #9b51e0 0%, #bb6bd9 100%);
    margin: 20px;
    width: 250px;
    height: 17px;
    border-radius: 5px;
    position: absolute;
    z-index: 100;
    top: 332px;
  }
  animation: flash 1.5s linear infinite;
  @keyframes flash {
    50% {
      opacity: 0.3;
    }
  }
`;

const StyledButtonDummyLowerRow = styled.div`
  width: 297px;
  height: 160px;
  margin: 25px auto 25px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ::before {
    content: "";
    background: linear-gradient(90deg, #9b51e0 0%, #bb6bd9 100%);
    margin: 20px;
    width: 250px;
    height: 17px;
    border-radius: 5px;
    position: absolute;
    z-index: 100;
    top: 426px;
  }
  ::after {
    content: "";
    background: linear-gradient(90deg, #9b51e0 0%, #bb6bd9 100%);
    margin: 20px;
    width: 250px;
    height: 17px;
    border-radius: 5px;
    position: absolute;
    z-index: 100;
    top: 518px;
  }
  animation: flash 1.5s linear infinite;
  @keyframes flash {
    50% {
      opacity: 0.3;
    }
  }
`;
