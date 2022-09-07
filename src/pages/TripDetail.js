import React, { useEffect } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { __getTripDetail } from '../redex/modules/tripdetail';
import DayDetail from '../components/DayDetail';
// import DayList from '../components/DayList';

const TripDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.tripdetail);


  console.log(detail?.trip?.data?.dateList)

  useEffect(() => {
    dispatch(__getTripDetail(id));
}, [dispatch])


  return (
    <>
    <Header/>
    <Layout>
      <Container>
      <div>여행명: {detail?.trip?.data?.title}</div>
      <div>여행기간: {detail?.trip?.data?.tripStart} ~ {detail?.trip?.data?.tripEnd}</div>
      <div>여행설명: {detail?.trip?.data?.content}</div>
      </Container>
      <Container>
      <div>총 지출 금액: {detail?.trip?.data?.total}</div>
      </Container>
      {detail?.trip?.data?.dateList?.map((date) => (
            <DayDetail date={date} key={date.id}/>)
            )}
    </Layout>
    </>
  )
}

export default TripDetail

const Container = styled.div`
            border: 1px solid #758BFD;
            padding: 30px;
            margin: 20px;
`