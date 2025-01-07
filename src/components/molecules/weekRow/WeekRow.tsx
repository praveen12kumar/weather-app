import TempCard from "../../atomic/tempCard/TempCard";
import CloudyTemp from "../../../assets/Cloudytemp.png";
import { useSelector } from "react-redux";
import ReduxState from "../../../interface/ReduxState";


function WeekRow(){

    const dayForecast = useSelector((state:ReduxState)=> state.forecast?.data?.dayForecast);
    //console.log("dayForecast", dayForecast);
    
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function findDay(date: string){
        const x = new Date(date).getDay();
        return weekDays[x];
    }

    return(
        <div className="w-full px-12 py-2 flex flex-wrap gap-5 mt-6">
            {
                dayForecast && dayForecast.map((forecase)=>{
                    return(
                        <TempCard key={forecase.date} temperature={forecase.avgtemp_c+"°C"} image={CloudyTemp} title={findDay(forecase.date)} />
                    )
                })
            }

            
        </div>
    )
}

export default WeekRow;