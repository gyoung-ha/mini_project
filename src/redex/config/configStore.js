import { configureStore } from "@reduxjs/toolkit";
import member from "../modules/member";
import costs from "../modules/cost"
import trip from "../modules/trip";
import tripdetail from "../modules/tripdetail";
import datelist from "../modules/date"
import date from "../modules/daydetail";


const store = configureStore({
    reducer: { 
        member, 
        costs, 
        trip: trip.reducer,
        tripdetail,
        datelist,
        date,
    },
        
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ serializableCheck: false, }),
    
    
});

export default store;