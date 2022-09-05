import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { useNavigate } from "react-router-dom";



const Main = () => {
  const nagivate = useNavigate();
  return (
    <Layout>
      <Container>
        <BoxStyle className="Mainbox" onClick={() => {nagivate("/tripDetail")}}>
          <div>title</div>
          <div>기간</div>
        </BoxStyle>
      </Container>
    </Layout> 
  )
}

export default Main

const Container = styled.div`
            border: 1px solid #758BFD;
            padding: 30px;
            margin: 20px;
            :hover {
              box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 1.5px;}
`

const BoxStyle = styled.div`
            cursor: pointer;

`