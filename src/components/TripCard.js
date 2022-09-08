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
            border: 1px solid #758BFD;
            padding: 30px;
            margin: 20px;
            :hover {
              box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 1.5px;}
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