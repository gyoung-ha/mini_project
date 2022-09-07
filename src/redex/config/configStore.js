import { configureStore } from "@reduxjs/toolkit";
import member from "../modules/member";
import costs from "../modules/cost"
import trip from "../modules/trip";


const store = configureStore({
    reducer: { member, costs, trip },
        
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ serializableCheck: false, }),
    
    
});

export default store;