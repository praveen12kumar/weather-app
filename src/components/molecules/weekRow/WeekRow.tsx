import TempCard from "../../atomic/tempCard/TempCard";
import CloudyTemp from "../../../assets/Cloudytemp.png";
import { useSelector } from "react-redux";
import ReduxState from "../../../interface/ReduxState";
import HourCard from "../../atomic/hourCard/HourCard";

function WeekRow(){

    const dayForecast = useSelector((state:ReduxState)=> state.forecast?.data?.dayForecast);
    const celcius = useSelector((state:ReduxState)=> state.forecast?.celcius);
    const hourForecast = useSelector((state:ReduxState)=> state.forecast?.data?.hourForecast);
    const today = useSelector((state:ReduxState)=> state.forecast?.today);
    
    console.log(hourForecast);

    //console.log("dayForecast", dayForecast);
    
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function findDay(date: string){
        const x = new Date(date).getDay();
        return weekDays[x];
    }

    return(
        <div className="w-full px-12 py-2 flex flex-wrap gap-5 mt-6">
            {
                today ? (
                    hourForecast.map((forecast)=>{
                        return(
                            <HourCard key={forecast.time} temperature={celcius ? forecast.temp_c+"°C" : forecast.temp_f+"°F"} image={forecast.icon} time={forecast.time} />
                        )
                    })
                ) : dayForecast.map((forecast)=>{
                    return(
                        <TempCard key={forecast.date} temperature={celcius ? forecast.avgtemp_c+"°C" : forecast.avgtemp_f+"°F"} image={CloudyTemp} title={findDay(forecast.date)} />
                    )
                })
            }

            
        </div>
    )
}

export default WeekRow;