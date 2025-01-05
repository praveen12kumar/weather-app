import Input from "../../atomic/input/Input"
import Image from "../../atomic/image/Image";


function Sidebar(){


    return (
        <div className="basis-3/12 h-full flex flex-col items-center text-white rounded-tl-2xl rounded-bl-2xl pt-8 px-4" style={{background: 'rgba(255, 255, 255, 0.81)'}}>
            <div className="w-full flex flex-col items-center justify-center">
                <Input/>
                <Image/>

                <div className="w-full px-4 relative flex flex-col items-start mt-4">
                    <div className=" text-7xl text-black text-center">
                        25.4 <span className="text-4xl absolute top-0 ">°C</span>
                    </div>
                    <div className="text-black text-sm text-center">
                        Friday, 09:44
                    </div>
                </div>
            </div>
            <div className="">

            </div>
            <div className="">

            </div>
        </div>
    )
}

export default Sidebar