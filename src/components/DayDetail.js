import React from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Button from "../elem/Button";
import { useParams } from "react-router-dom";

const DayDetail = ({date}) => {
    const navigate = useNavigate();
    // const { id } = useParams();
    
  console.log(date)

    return (
        <>
        <Container>
        <Button 
        size="small"
        onClick={() => { navigate(`/cost/${date.id}`); }}>지출등록</Button>
            <div>일 지출 금액: {date.subTotal}</div>
            <div>지출내역</div>
        </Container>
        </>
    )

};

export default DayDetail;

const Container = styled.div`
            border: 1px solid #758BFD;
            padding: 30px;
            margin: 20px;
`