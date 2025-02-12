import { ForecastData } from "./ForecastData";

export interface ForecastDataState{
    status: 'default' | 'loading' | 'success' | 'error';
    data: ForecastData;
    celcius: boolean;
    today: boolean;
}
