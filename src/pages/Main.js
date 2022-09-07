import React from 'react'
import Layout from "../components/Layout";
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import TripList from '../components/TripList';


const Main = () => {
  const navigate = useNavigate();
  
  
  
  return ( 
    <>
  <Header/>
    <Layout>
        <TripList/>
    </Layout>
    </>
  )
}

export default Main;