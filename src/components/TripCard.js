import React from "react";
import { useNavigate } from "react-router-dom";

const TripCard = () => {
    const navigate = useNavigate();

    return (
        <>
        <Container onClick={() => { navigate(`/trip/${data.id}`);}}>
            <Title>{data.title}</Title>
            <Dates>{data.tripStart}~{data.tripEnd}</Dates>
        </Container>
        </>
    )

};

export default TripCard;

