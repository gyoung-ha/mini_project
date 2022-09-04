import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'

const TripDetail = () => {
  return (
    <Layout>
      <Container>
      <div>title</div>
      <div>기간</div>
      </Container>
    </Layout> 
  )
}

export default TripDetail

const Container = styled.div`
            border: 1px solid #758BFD;
            padding: 30px;
            margin: 20px;
`