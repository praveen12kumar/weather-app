import {configureStore} from "@reduxjs/toolkit"
import ForecastReducer  from "../slices/ForecastSlice";


const store = configureStore({
    reducer:{
        forecast: ForecastReducer
    },
    devTools:true,
    
});

export type AppDispatch = typeof store.dispatch;

export default store;

