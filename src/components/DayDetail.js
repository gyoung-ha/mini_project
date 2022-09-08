import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Button from "../elem/Button";
import { useDispatch, useSelector } from "react-redux";
import { __getDate } from '../redex/modules/daydetail';

const DayDetail = ({date}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const datedetail = useSelector((state) => state.date);

    // console.log(datedetail)

    useEffect(() => {
        dispatch(__getDate(date.id));
    }, [dispatch])


    return (
        <>
        <Container>
        <Button 
        size="small"
        onClick={() => { navigate(`/cost/${date.id}`); }}>지출등록</Button>
            <div>일 지출 금액: {date.subTotal}</div>
            {/* <div>지출내역: {date.costList}</div> */}
            {/* <div>{datedetail?.date?.data?.costList.}</div>  */}

            {date.costList?.map((it) => ( 
                 <CostBox>
                     <div>지출내역: {it.content}</div>
                     <div>지출금액: {it.pay}</div>
                 </CostBox>
                 ))}
            
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

const CostBox = styled.div`
            border: 1px solid #758BFD;
            padding: 30px;
            margin: 20px;
`