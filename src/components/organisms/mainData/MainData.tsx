import TopRow from "../../atomic/topRow/TopRow";
import WeekRow from "../../molecules/weekRow/WeekRow";
import HighLightRow from "../../molecules/hightLightRow/HighLightRow";

function MainData() {
    return (
        <div className="basis-9/12  text-slate-900 p-4 flex flex-col justify-start items-center bg-[#f6f6f8] rounded-tr-2xl rounded-br-2xl">
            <TopRow />
            <WeekRow />

            <div className="">
                Today's HighLights
            </div>
            <HighLightRow />
        </div>
    );
}

export default MainData;