
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../hooks/hooks";
import { toggleCelcius, changeTodayOrWeek } from "../../../redux/slices/ForecastSlice";
import ReduxState from "../../../interface/ReduxState";



function TopRow(){
    const dispatch = useAppDispatch();
    const today = useSelector((state:ReduxState)=> state.forecast?.today);

    return (
        <div className="w-full flex justify-between items-center px-12">
            {/* Todays or week */}
            <div className="flex items-center justify-center gap-8">
                <div 
                    onClick={()=> dispatch(changeTodayOrWeek(true))}
                    className={`text-2xl font-semibold cursor-pointer ${today ? "text-sky-600" : ""}`}>
                    Today
                </div>
                <div
                    onClick={()=> dispatch(changeTodayOrWeek(false))}
                    className={`text-2xl font-semibold cursor-pointer ${!today ? "text-sky-600" : ""} `}>
                    Week
                </div>
            </div>
            {/* C or F */}
            <div className="flex items-center justify-center gap-8">
                <div 
                    onClick={()=> dispatch(toggleCelcius(true))}
                className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer bg-sky-900 text-white font-semibold">
                °C
                </div>
                <div 
                    onClick={()=> dispatch(toggleCelcius(false))} 
                className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer text-black border border-slate-300 bg-white font-semibold">
                °F
                </div>
            </div>
        </div>
    )
};

export default TopRow;