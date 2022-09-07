import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Header from "../components/Header";

const TripDetail = () => {

  // const trips = useSelector((state) => state.trip);
  // const { id } = useParams();
  // const Idex = trips.find(function (x) { return x.id == id })

  return (
    <>
    <Header/>
    <Layout>
      <Container>
      <div>title</div>
      <div>기간</div>
      <div>여행설명</div>
      </Container>
      <Container>
      <div>총 지출 금액</div>
      </Container>
      <Container>
      <div>day1</div>
      </Container>
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