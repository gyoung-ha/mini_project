import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux/';
import { useNavigate } from "react-router-dom";
import TripCard from "./TripCard";
import { __getTripList } from "../redex/modules/trip"

const TripList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(__getTripList());
    }, [dispatch])


    return (
        <>
        <Button 
        size="medium"
        onClick={() => { navigate("/TripAdd");}}>글쓰기</Button>
        {data.slice().reverse().map((data) => (
            <Card data={data} key={data.id}/>)
            )}
        </>
    )
}