import { useSelector } from "react-redux"
import HighLightCard from "../../atomic/highLightCard/HighLightCard"
import ReduxState from "../../../interface/ReduxState"

function HighLightRow() {
    const currentData = useSelector((state: ReduxState)=> state.forecast?.data?.currentData);
    
    function UVRange(){
        if(currentData.uv < 5) return "low";
        else if(currentData.uv <= 8) return "moderate";
        else return "high";
        
    }
    
    return(
        <div className="w-full flex flex-wrap gap-8 px-12 py-2">

        <HighLightCard title="UV Index" footer={UVRange()} data={currentData?.uv} />
        <HighLightCard title="Wind Status" footer="km/h" data={currentData?.wind_kmph} />
        <HighLightCard title="Sunrise and Sunset" footer={currentData?.sunset} data={currentData?.sunrise} />
        <HighLightCard title="Humidity" footer="normal" data={currentData?.humidity+"%"} />
        <HighLightCard title="Visibility" footer="normal" data={currentData?.vis_km} />
        <HighLightCard title="Air Quality" footer="normal" data={currentData?.aqi} />
        
        
        
        </div>
    )
}

export default HighLightRow