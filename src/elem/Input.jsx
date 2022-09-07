import React from "react";
import styled from "styled-components";
import flex from "../lib/flex";

const Input = (props) => {
  return <StInput {...props} required={true} minLenth={1} />;
};

export default Input;

const StInput = styled.input`
  ${flex({})};
  box-sizing: border-box;
  height: 40px;
  width: 40%;
  width : ${(props) => props.width};
  outline: none;
  border-radius: 3px;
  padding: 0 10px;
  font-size: 12px;
  margin: 10px 0 10px 0;
  border: 1px solid #4E52BE;
  :hover {
    filter: brightness(95%);}
`;
