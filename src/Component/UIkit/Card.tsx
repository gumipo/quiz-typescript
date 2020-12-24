import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
  description: string;
  url: string;
  selectAnswer: string;
};

const Card: React.FC<Props> = ({ selectAnswer, title, description, url }) => {
  return (
    <StyledCard>
      <StyledCardHeader>
        <StyledCardHeaderTitle>{title}</StyledCardHeaderTitle>
        <StyledCardHeaderDescription>{description}</StyledCardHeaderDescription>
        <a href={url} target="_brank">
          解説を見る
        </a>
      </StyledCardHeader>
      <StyledCardFooter>{"選んだ答え:" + selectAnswer}</StyledCardFooter>
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div`
  width: 327px;
  margin: 0 auto;
  box-shadow: 0px 4px 16px rgba(44, 18, 76, 0.2);
  border-radius: 8px;
  background-color: white;
`;

const StyledCardHeader = styled.div`
  display: grid;
  place-items: center;

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

const StyledCardHeaderTitle = styled.h2`
  font-weight: bold;
  font-size: 20px;
  margin: 24.5px auto 0 auto;
`;

const StyledCardHeaderDescription = styled.p`
  width: 295px;
  text-align: left;
  font-size: 17px;
  line-height: 155%;
  margin: 10px auto 7px auto;
`;

const StyledCardFooter = styled.div`
  font-size: 13px;
  height: 51px;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.04);
`;
