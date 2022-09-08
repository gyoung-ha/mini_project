import React from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const CostList = () => {
  const navigate = useNavigate();

    return (
        <>
            <Title>리스트</Title>
            
        </>
    )

};

export default CostList;

const Title = styled.div`
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Dates = styled.div`
    font-size: 13px;
    font-weight: 400;
    color: grey;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

`