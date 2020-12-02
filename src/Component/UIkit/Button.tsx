import React from "react";
import styled from "styled-components";

type Props = {
  label?: string;
  fill: boolean;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({ label, onClick, fill }) => {
  return (
    <StyledButton
      fill={fill}
      type="button"
      onClick={onClick && (() => onClick())}
    >
      {label}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{ fill: boolean }>`
  background: ${(fill) =>
    fill ? "linear-gradient(90deg, #9B51E0 0%, #BB6BD9 100%)" : "#FFF"};
  border: ${(fill) => (fill ? "none" : "2px solid #9E54E0")};
  color: ${(fill) => (fill ? " #FFF" : " #9E54E0")};
  filter: ${(fill) =>
    fill ? "drop-shadow(0px 4px 16px rgba(44, 18, 76, 0.2));" : "none"};

  display: grid;
  place-items: center;
  width: 297px;
  height: 68px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  box-sizing: border-box;
  border-radius: 58px;
  outline: none;
  margin: 0 auto;
  cursor: pointer;

  :hover {
    opacity: 1;
  }
  @media screen and (min-width: 640px) {
    :hover {
      opacity: 0.7;
    }
  }
`;
