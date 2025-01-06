import { DayForeCast } from "./DayForecast";
import { currentDayForecast } from "./CurrentDayForecast";

export interface ForecastData{
    location:{localTime: string, country: string, region: string, name:string};
    currentData: currentDayForecast; 
    forecast: DayForeCast[]
}