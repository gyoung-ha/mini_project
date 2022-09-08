import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux/';
import { logout, __Logout } from '../redex/modules/member'


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  return (
    <HdContainer>
      <HdButton onClick={() => {navigate("/")}}>여행가계</HdButton>
      <StButton onClick={() => { dispatch(logout()); dispatch(__Logout()); navigate("/login")}}>로그아웃</StButton>
    </HdContainer>
  )
}

export default Header

const HdContainer = styled.div`
    align-items: center;
    display: flex;
    height: 50px;
    justify-content: space-between;
    background-color: #AEB8FE;
    padding: 10px;
`
const HdButton = styled.button`
    margin: 20px;
    width: 48px;
    height: 48px;
    border: none;
    background-color: #F1F2F6;
    color: #4E52BE;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    `

const StButton = styled.button`
    margin: 20px;
    width: 60px;
    height: 30px;
    border: none;
    background-color: #F1F2F6;
    color: #4E52BE;
    font-weight: 500;
    cursor: pointer;
    `