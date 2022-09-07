import React, { useState } from "react";
import styled from 'styled-components'
import Layout from '../components/Layout'
import "./style.css";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __AddTrip } from "../redex/modules/trip"
import Input from "../elem/Input"
import Button from "../elem/Button"

const TripAdd = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, settitle] = useState("");
  const [tripStart, settripStart] = useState("");
  const [tripEnd, settripEnd] = useState("");
  const [content, setcontent] = useState("");
  const [days, setdays] = useState("");

  const TripData = {
    title: title,
    content: content,
    tripStart: tripStart,
    tripEnd: tripEnd,
    days: days,
  }
  
  const AddTrip = () => {
        
    if (title ==="" || tripStart ==="" || tripEnd ==="" || content ==="" ) {
      window.alert("항목을 모두 입력하세요.");
      return;
  } 

    dispatch(__AddTrip(TripData));

    navigate("/tripdetail/:")
    
    }


  return (
    <>
    <Header/>
    <Layout>
      <Container>
        <div className ="wrap">
        <label> 여행제목 </label>
        <Input 
          type= {"text"}
          placeholder="제목을 입력해주세요!"
          onChange={(e) => settitle(e.target.value)}
          />
        </div>

        <div className ="date">
        <label> 날짜입력 </label>
        <Input  
          type= "date"
          placeholder="YYYY-MM-DD"
          onChange={(e) => settripStart(e.target.value)}
          />
          ~
          <Input  
          type="date"
          placeholder="YYYY-MM-DD"
          onChange={(e) => settripEnd(e.target.value)}
          />
        </div>

        <div className ="wrap">
        <label> 여행설명 </label>
        <Textarea
          placeholder="설명을 입력해주세요!(200자 이내)"
          rows="10"
          maxLength={200}
          onChange={(e) => setcontent(e.target.value)}
          />

        <label> 여행기간 </label>
        <Input
          placeholder="여행 기간을 입력해주세요!"
          type= {"number"} 
          onChange={(e) => setdays(e.target.value)}
        />
        </div>

        <div>
          <button className="Addbtn" onClick={AddTrip}> 등록 </button>
        </div>

         
      </Container>
    </Layout>
    </> 
  )
}

export default TripAdd;

const Container = styled.div`
            border: 1px solid #758BFD;
            padding: 30px;
            margin: 20px;
`

const Textarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  outline: none;
  border-radius: 3px;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #4E52BE;
`;