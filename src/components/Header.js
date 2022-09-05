import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HdContainer>
      <HdButton>여행가계</HdButton>
      <button>Logout</button>
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
    width: 45px;
    height: 45px;
    border: none;
    background-color: #F1F2F6;
    color: #4E52BE;
    font-weight: 500;
    cursor: pointer;
    `