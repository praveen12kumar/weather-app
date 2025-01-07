type HourCardProps = {
    time: string;
    temperature: string;
    image: string;
}

function HourCard({time, temperature,  image}:HourCardProps){

    return(
        <div className="h-[15vh] w-[7vw] flex flex-col items-center justify-between   border bg-white rounded-xl p-3  shadow-md">
            <div className="text-md font-medium">{time?.split(" ")[1]}</div>
            <div className="w-2/3 h-[50%] mt-2">
                <img src={image} alt="" className="w-10 h-9" />
            </div>
            <div className="text-md font-semibold">{temperature}</div>
        </div>
    )
}

export default HourCard;