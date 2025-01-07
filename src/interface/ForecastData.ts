import { DayForeCast } from "./DayForecast";
import { currentDayForecast } from "./CurrentDayForecast";
import { hourForecastProp } from "./hourForecastProp";
export interface ForecastData{
    location:{localTime: string, country: string, region: string, name:string};
    dayForecast: DayForeCast[];
    currentData: currentDayForecast; 
    hourForecast: hourForecastProp[];
    
}