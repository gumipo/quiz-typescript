import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "../Component/UIkit/Button";
import Logo from "../assets/Image/LogoUXDAYSTOKYO.svg";
import Footer from "../Component/Footer/Footer";
import Character from "../assets/Image/Character.svg";

const Home: React.FC = () => {
  const history = useHistory();
  return (
    <StyledSection>
      <StyledSectionInner>
        <StyledBackGround />
        <StyledLogo>
          <img src={Logo} alt="UXDAYS-TOKYO" />
        </StyledLogo>
        <StyledTitle>UX用語クイズ</StyledTitle>
        <StyledDescription>
          UXスキルの向上に役立つ用語を
          <br />
          理解しているかチェックしよう
        </StyledDescription>
        <StyledCharacter>
          <img src={Character} alt="Character" />
        </StyledCharacter>
        <StyledPsychology>心理学</StyledPsychology>
        <StyledResearch>リサーチ</StyledResearch>
        <StyledDesign>デザイン・情報設計</StyledDesign>
        <StyledFramework>フレームワーク</StyledFramework>
        <StyledMarketing>マーケティング</StyledMarketing>
        <StyledTechnology>テクノロジー</StyledTechnology>
        <StyledEconomics>行動経済学</StyledEconomics>
        <StyledButton>
          <Button
            fill={true}
            label="クイズをはじめる"
            onClick={() => history.push("/quiz")}
          />
        </StyledButton>
        <StyledFooter>
          <Footer label="用語集サイトに移動する" />
        </StyledFooter>
      </StyledSectionInner>
    </StyledSection>
  );
};

//Styled-Components
const StyledSection = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
`;

const StyledSectionInner = styled.div`
  background-color: white;
  text-align: center;
  width: 375px;
  height: 667px;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 640px) {
    width: 640px;
    height: 1024px;
  }
`;

const StyledBackGround = styled.div`
  background: linear-gradient(90deg, #9b51e0 0%, #bb6bd9 100%);
  width: 375px;
  height: 293px;
  ::before {
    content: "";
    background-color: white;
    position: absolute;
    top: 210.5px;
    left: -52px;
    width: 479px;
    height: 229px;
    border-radius: 50%;
  }
  @media screen and (min-width: 640px) {
    width: 640px;
    ::before {
      left: -52px;
      width: 744px;
    }
  }
`;

const StyledLogo = styled.div`
  width: 166.85px;
  height: 67.36px;
  margin: 0 auto;
  position: absolute;
  left: 103.58px;
  top: 54.2px;
  @media screen and (min-width: 640px) {
    left: 235px;
  }
`;

const StyledTitle = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 27px;
  line-height: 41px;
  text-align: center;
  color: #ffffff;
  position: absolute;
  left: 98px;
  top: 110px;
  @media screen and (min-width: 640px) {
    left: 230px;
  }
`;

const StyledDescription = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  text-align: center;
  color: rgba(0, 0, 0, 0.64);
  width: 246px;
  height: 54px;
  line-height: 160%;
  position: absolute;
  left: 65px;
  top: 227px;
  @media screen and (min-width: 640px) {
    left: 197px;
  }
`;

const StyledCharacter = styled.div`
  position: absolute;
  left: 101px;
  top: 311px;
  z-index: 1;
  @media screen and (min-width: 640px) {
    left: 233px;
  }
`;

const StyledPsychology = styled.p`
  color: #552b89;
  position: absolute;
  left: 42px;
  top: 333px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  text-align: center;

  ::before {
    content: "";
    background: #b869da;
    width: 65px;
    height: 32px;
    border-radius: 8px;
    opacity: 0.1;
    position: absolute;
    left: 28px;
    top: -3px;
  }

  @media screen and (min-width: 640px) {
    left: 174px;
  }
`;

const StyledResearch = styled.p`
  position: absolute;
  left: 78px;
  top: 350px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: #9e54e0;
  @media screen and (min-width: 640px) {
    left: 209px;
  }
`;

const StyledDesign = styled.p`
  position: absolute;
  left: 21px;
  top: 380px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: #9179b6;
  z-index: 0;

  ::before {
    content: "";
    background: #f8f6fe;
    width: 93px;
    height: 13px;
    border-radius: 8px;
    position: absolute;
    left: 32px;
    top: 11px;
    z-index: -1;
  }
  @media screen and (min-width: 640px) {
    left: 152px;
  }
`;

const StyledFramework = styled.p`
  position: absolute;
  left: 23px;
  top: 421.88px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: #b869da;
  transform: rotate(1.14deg);
  z-index: 0;

  ::before {
    content: "";
    background: #b869da;
    opacity: 0.1;
    width: 92px;
    height: 32px;
    border-radius: 8px;
    position: absolute;
    left: 19px;
    top: -2px;
    z-index: -1;
    transform: rotate(-1.14deg);
  }
  @media screen and (min-width: 640px) {
    left: 156px;
  }
`;

const StyledMarketing = styled.p`
  position: absolute;
  left: 257px;
  top: 351px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: #552b89;
  z-index: 0;

  ::before {
    content: "";
    background: #f8f6fe;
    width: 93px;
    height: 57px;
    border-radius: 8px;
    position: absolute;
    left: -39px;
    top: -3px;
    z-index: -1;
  }
  @media screen and (min-width: 640px) {
    left: 388px;
  }
`;

const StyledTechnology = styled.p`
  position: absolute;
  left: 283px;
  top: 386px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: #9e54e0;
  transform: rotate(1.14deg);
  z-index: 0;

  ::before {
    content: "";
    background: #b869da;
    width: 32px;
    height: 26px;
    opacity: 0.1;
    border-radius: 8px;
    position: absolute;
    left: 42px;
    top: 10px;
    z-index: -1;
    transform: rotate(-1.14deg);
  }
  @media screen and (min-width: 640px) {
    left: 416px;
  }
`;

const StyledEconomics = styled.p`
  position: absolute;
  left: 296px;
  top: 421px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: #552b89;
  z-index: 0;

  ::before {
    content: "";
    background: #b869da;
    width: 65px;
    height: 20px;
    opacity: 0.1;
    border-radius: 8px;
    position: absolute;
    left: -25px;
    top: 10px;
    z-index: -1;
  }
  @media screen and (min-width: 640px) {
    left: 427px;
  }
`;

const StyledButton = styled.div`
  position: absolute;
  left: 32px;
  top: 477px;
  display: grid;
  place-items: center;
  z-index: 2;
  @media screen and (min-width: 640px) {
    left: 165px;
    top: 561px;
  }
`;

const StyledFooter = styled.div`
  position: absolute;
  left: 99px;
  top: 575px;
  @media screen and (min-width: 640px) {
    left: 231px;
    top: 660px;
  }
`;

export default Home;
