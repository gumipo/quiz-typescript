import React from "react";
import styled from "styled-components";

type Props = {
  label: string;
};

const Footer: React.FC<Props> = ({ label }) => {
  return (
    <StyledLink
      href="https://uxdaystokyo.com/articles/glossary/"
      target="_brank"
    >
      {label}
    </StyledLink>
  );
};

export default Footer;

const StyledLink = styled.a`
  text-align: center;
  text-decoration-line: underline;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #9e54e0;
`;
