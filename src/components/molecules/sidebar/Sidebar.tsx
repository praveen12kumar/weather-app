import Input from "../../atomic/input/Input";
import Image from "../../atomic/image/Image";
import { BsDropletFill } from "react-icons/bs";
import { FaCloud } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { useSelector } from "react-redux";
import ReduxState from "../../../interface/ReduxState";

function Sidebar() {

  const currentData = useSelector((state: ReduxState)=> state.forecast?.data?.currentData);
  const location = useSelector((state:ReduxState)=> state.forecast?.data?.location);
  const celcius = useSelector((state:ReduxState)=> state.forecast?.celcius);
  
  
  



  function getDay(){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const day = date.getDay();
    return days[day];
  }
  
  //console.log("location", location);
  

  return (
    <div
      className="basis-3/12  flex flex-col items-center text-white rounded-tl-2xl rounded-bl-2xl pt-8"
      style={{ background: "rgba(255, 255, 255, 0.81)" }}
    >
      <div className="w-full flex flex-col items-center justify-center px-4">
        <Input />
        <Image />

        <div className="w-full px-4 relative flex flex-col items-start mt-4">
          <div className=" text-7xl text-black text-center">
            {
              celcius ? currentData?.temp_c :(currentData?.temp_f)
            } <span className="text-4xl absolute top-0 ">{celcius ? "°C" : "°F"}</span>
          </div>
          <div className="text-black text-sm text-center">{getDay()} <span className="ml-2">{location.localTime.split(" ")[0]}</span> </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white mt-4"></div>
      {/* lowerhalf */}
      <div className="w-full h-[50%] flex flex-col items-center justify-between gap-2 px-4 py-4 text-slate-800">
        <div className="w-full flex flex-col">
          <div className="w-full flex items-center gap-3 ">
            <div className="">
              <FaCloud className="" />
            </div>
            <div className="text-sm font-semibold">{currentData?.condition}</div>
          </div>
          <div className="w-full flex items-center gap-3 ">
            <div className="">
              <BsDropletFill className="" />
            </div>
            <div className="text-sm font-semibold">Perc-{currentData?.chance_of_rain}%</div>
          </div>
        </div>
        {/* location */}
        <div className="w-full">
            <div className="w-full flex items-center gap-2">
                <MdLocationPin className="w-4 h-4"/>
                <p className="text-sm font-medium">{location?.name}, {location.region}, {location.country}</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
