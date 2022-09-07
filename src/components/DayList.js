import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux/';
import { useNavigate, useParams } from "react-router-dom";
import { __getDates } from "../redex/modules/date";
import DayDetail from '../components/DayDetail';


const DayList = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const dates = useSelector((state) => state.datelist);

    // console.log(dates)

    useEffect(() => {
        dispatch(__getDates(id));
    }, [dispatch])

    return (
        <>
        {dates?.dates?.data?.map((date) => (
            <DayDetail date={date} key={date.id}/>)
            )}
        </>
    )
};

export default DayList;