import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return <StInput {...props} required={true} minLenth={1} />;
};

export default Input;

const StInput = styled.input`
  box-sizing: border-box;
  height: 40px;
  width: 60%;
  outline: none;
  border-radius: 3px;
  padding: 0 10px;
  font-size: 12px;
  margin: 10px 0 10px 0;
  border: 1px solid #4E52BE;
`;
