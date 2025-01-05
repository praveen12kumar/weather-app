import NightCloud from "../../../assets/CloudyNight.png";


function Image(){

    return(
        <div className="w-1/2 max-h-[40%] mt-12 ">
            <img src={NightCloud} className="w-full h-full " alt="cloud at night" />
        </div>
    )
}

export default Image;