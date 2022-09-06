import React from 'react'
import Layout from '../components/Layout'
// import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createCost } from "../redex/modules/cost"
// import nextId from "react-id-generator";
import Button from "../elem/Button";
import Input from "../elem/Input";


const CostAdd = () => {
  // const costId = nextId();
  // const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [content, setcontent] = useState();
  const [pay, setpay] = useState();
  

  const submit = (event) => {
    event.preventDefault();
    if (content.trim() === "" || pay.trim() === "") return alert('항목을 입력하세요.'); 
    
    dispatch(createCost({
        content: content,
        pay: pay,
      }))
      navigate("/tripDetail")
  }

  return (
    <Layout>
    <div>지출내역 입력하기</div>
    <div>지출 항목</div>
    <Input 
      type="text"
      placeholder="지출 내역을 입력해주세요."
      minLength="1"
      onChange={(e) => setcontent(e.target.value)}
      ></Input>

    <div>지출 금액</div>
    <Input 
      type="number"
      min="0"
      placeholder="지출 금액을 입력해주세요."
      onChange={(e) => setpay(e.target.value)}
      ></Input>
     
    <Button size="large" onClick={submit}>등록하기</Button> 
    </Layout>
  )
}

export default CostAdd;