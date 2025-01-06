import HighLightCard from "../../atomic/highLightCard/HighLightCard"

function HighLightRow() {

    return(
        <div className="w-full flex flex-wrap gap-8 px-12 py-2">

        <HighLightCard title="Wind" footer="km/h" data="20" />
        <HighLightCard title="Wind" footer="km/h" data="20" />
        <HighLightCard title="Wind" footer="km/h" data="20" />
        
        
        
        </div>
    )
}

export default HighLightRow