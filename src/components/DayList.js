import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux/';
import { useNavigate, useParams } from "react-router-dom";
import { __getDates } from "../redex/modules/date";
import DayDetail from '../components/DayDetail';
import styled from 'styled-components';


const DayList = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const dates = useSelector((state) => state.datelist.dates?.data);

    console.log(dates)

    useEffect(() => {
        dispatch(__getDates(id));
    }, [dispatch])

    return (
        <>
        {dates?.map((date) => 
            (<DayDetail date={date} key={date.id}/>)
        

            )}
        </>
    )
};

export default DayList;

const CostBox = styled.div`
            border: 1px solid #758BFD;
            padding: 30px;
            margin: 20px;
`