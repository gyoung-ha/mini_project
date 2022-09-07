import React, { useState } from "react";
import styled from 'styled-components'
import Layout from '../components/Layout'
import "./style.css";
import Header from "../components/Header";

const TripAdd = () => {
  
  return (
    <>
    <Header/>
    <Layout>
      <Container>
        <div className ="wrap">
        <label> 여행제목 </label>
        <input class="textname"
          placeholder="제목을 입력해주세요!"
          type="text"/>
        </div>

        <div className ="date">
        <label> 날짜입력 </label>
        <input  
          placeholder="YYYY-MM-DD"
          type="date" />
          ~
          <input  
          placeholder="YYYY-MM-DD"
          type="date"/>
        </div>

        <div className ="wrap">
        <label> 여행설명 </label>
        <textarea
          placeholder="설명을 입력해주세요!(200자 이내)"
          type="text"
          maxLength={200}/>

        <label> 여행인원 </label>
        <input
          placeholder="인원을 입력해주세요!"
          type="number" />
        </div>

        <div>
          <button className="Addbtn" onClick> 등록 </button>
        </div>

         
      </Container>
    </Layout>
    </> 
  )
}

export default TripAdd

const Container = styled.div`
            border: 1px solid #758BFD;
            padding: 30px;
            margin: 20px;
`

