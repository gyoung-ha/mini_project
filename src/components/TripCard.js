import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

const TripCard = ({trip}) => {
    const navigate = useNavigate();

    return (
        <>
        <Container onClick={() => { navigate(`/tripdetail/${trip.id}`);}}>
            <Title>{trip.title}</Title>
            <Dates>{trip.tripStart}~{trip.tripEnd}</Dates>
        </Container>
        </>
    )

};

export default TripCard;

const Container = styled.div`
    border: 1px solid #DCEDC8;
    width: 95%;
    min-width: 600px;
    height: 100px;
    margin: 1em auto;
    border-radius: 8px;
    background-color: white;
    :hover {
        background-color: #F1F8E9;
        cursor: pointer;
        box-shadow: 2px 2px 1px #AED581;
    }
`

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