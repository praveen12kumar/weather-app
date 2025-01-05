import Input from "../../atomic/input/Input";
import Image from "../../atomic/image/Image";
import { BsDropletFill } from "react-icons/bs";
import { FaCloud } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

function Sidebar() {
  return (
    <div
      className="basis-3/12 h-full flex flex-col items-center text-white rounded-tl-2xl rounded-bl-2xl pt-8"
      style={{ background: "rgba(255, 255, 255, 0.81)" }}
    >
      <div className="w-full flex flex-col items-center justify-center px-4">
        <Input />
        <Image />

        <div className="w-full px-4 relative flex flex-col items-start mt-4">
          <div className=" text-7xl text-black text-center">
            25.4 <span className="text-4xl absolute top-0 ">°C</span>
          </div>
          <div className="text-black text-sm text-center">Friday, 09:44</div>
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
            <div className="text-sm font-semibold">Partially Cloudy</div>
          </div>
          <div className="w-full flex items-center gap-3 ">
            <div className="">
              <BsDropletFill className="" />
            </div>
            <div className="text-sm font-semibold">Perc-10%</div>
          </div>
        </div>
        {/* location */}
        <div className="w-full">
            <div className="w-full flex items-center gap-2">
                <MdLocationPin className="w-4 h-4"/>
                <p className="text-sm font-medium">Bengaluru, KA, India</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
