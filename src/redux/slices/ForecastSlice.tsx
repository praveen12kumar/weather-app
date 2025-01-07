import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ForecastDataState } from "../../interface/ForecastDataState";
import axios from "../../config/axiosInstance";

const initialState :ForecastDataState = {
    status:'default',
    data:{
        location:{
            country:"",
            region:"",
            name:"",
            localTime:""
        },
        dayForecast:[],
        currentData:{
            uv:0,
            wind_kmph:0,
            humidity:0,
            vis_km:0,
            aqi:0,
            sunrise:"",
            sunset:"",
            temp_c:0,
            temp_f:0,
            condition:"",
            is_day:false,
            chance_of_rain:0
        },
    },
    celcius:true
}

export const fetchData = createAsyncThunk('data/fetchData', async (city:string) => {
    try {
        console.log(city);
        const response = await axios.get(`/forecast.json?key=${import.meta.env.VITE_API_KEY}&days=7&aqi=yes&q=${city}`,);
        console.log(response);
        return response.data;

    } catch (error) {
        console.log(error);
        
    }
})

const forecastSlice = createSlice({
    name: 'forecast',
    initialState,
    reducers:{
        toggleCelcius:(state) => {
            state.celcius = !state.celcius;
        }
    },

    extraReducers:(builder) => {
       builder
       .addCase(fetchData.fulfilled, (state, action) => {
           if(!action.payload) return;
           state.status = "success";
           const {location, current, forecast} = action.payload;
           state.data.location.country = location.country;
           state.data.location.region = location.region;
           state.data.location.name = location.name;
           state.data.location.localTime = location.localtime;
           // setting current data
           state.data.currentData.uv = current.uv;
           state.data.currentData.wind_kmph = current.wind_kph;
           state.data.currentData.humidity = current.humidity;
           state.data.currentData.vis_km = current.vis_km;
           state.data.currentData.aqi = current.air_quality.pm2_5;
           state.data.currentData.temp_c = current.temp_c;
           state.data.currentData.temp_f = current.temp_f;
           state.data.currentData.condition = current.condition.text;
           state.data.currentData.is_day = current.is_day;
           state.data.currentData.sunrise = forecast.forecastday[0].astro.sunrise;
           state.data.currentData.sunset = forecast.forecastday[0].astro.sunset;
           state.data.currentData.chance_of_rain = forecast.forecastday[0].day.daily_chance_of_rain;
           // setting forecast data
           state.data.dayForecast= forecast?.forecastday?.map((forcastItem: any)=>{
                return {
                    date: forcastItem.date,
                    avgtemp_c: forcastItem.day.avgtemp_c,
                    avgtemp_f: forcastItem.day.avgtemp_f,
                    condition: forcastItem.day.condition.text
                }
           })

       })
       .addCase(fetchData.pending, (state)=>{
        state.status = "loading";
       })
       
    }
})
export const {toggleCelcius} = forecastSlice.actions 
export default forecastSlice.reducer


