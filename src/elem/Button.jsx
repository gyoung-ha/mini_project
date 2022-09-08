import React from "react";
import styled, { css } from "styled-components";
import flex from "../lib/flex";

const Button = (props) => {
  return (
    <StButton {...props} disabled={props.disabled}>
      {props.children}
    </StButton>
  );
};

export default Button;

const StButton = styled.button`
  ${flex({})};
  border: 0px solid #C7F9CC;
  background-color: #FF8600;
  height: 40px;
  border-radius: 5px;
  margin: 5px 0 5px 0;
  color: white;
  font-weight: 600;
  font-weight: ${({ fw }) => fw};
  color: ${({ color }) => color};
  background-color: ${({ bgColor, disabled }) => (disabled ? "#ddd" : bgColor)};
  cursor: pointer;
  :hover {
    filter: brightness(95%);
    box-shadow: 2px 2px 1px #F1F2F6;
  }

  ${({ size }) => {
    switch (size) { 
      case "large":
        return css`
          width: 40%;
        `;
      case "medium":
        return css`
          width: 100px;
        `;
      case "small":
        return css`
          width: 60px;
          height: 30px !important;
        `;
      default:
        return css`
          width: 20%;
        `;
    }
  }}
`;
