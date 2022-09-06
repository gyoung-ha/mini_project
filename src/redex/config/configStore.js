import { configureStore } from "@reduxjs/toolkit";
import member from "../modules/member";
import costs from "../modules/cost"


const store = configureStore({
    reducer: { member, costs },
        
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ serializableCheck: false, }),
    
    
});

export default store;