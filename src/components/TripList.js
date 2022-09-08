import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux/';
import { useNavigate } from "react-router-dom";
import TripCard from "./TripCard";
import { __getTripList } from "../redex/modules/trip"
import Button from "../elem/Button";

const TripList = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const trips = useSelector((state) => state.trip);
    
    console.log(trips.trips.data)

    useEffect(() => {
        dispatch(__getTripList());
    }, [dispatch])

    // if (error) {
    //     return <div>{error.message}</div>;
    // }

    return (
        <>
        <Button 
        size="medium"
        onClick={() => { navigate("/tripadd"); }}>글쓰기</Button>
        {trips?.trips?.data?.map((trip) => (
            <TripCard trip={trip} key={trip.id}/>)
            )}
        </>
    )
}

export default TripList;