import { createSlice } from "@reduxjs/toolkit";
import { ForecastDataState } from "../../interface/ForecastDataState";


const initialState :ForecastDataState = {
    status:'default',
    data: 'undefined'
}

const forecastSlice = createSlice({
    name: 'forecast',
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        builder.addCase()
    }
})

export default forecastSlice.reducer


