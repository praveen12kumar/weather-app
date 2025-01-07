
type TempCardProps = {
    temperature:string,
    image:string,
    title:string
}

function TempCard({temperature, image, title}:TempCardProps){

    return(
        <div className="h-[15vh] w-[7vw] flex flex-col items-center justify-between  border bg-white rounded-xl p-3 shadow-md">
            <div className="text-md font-medium">{title}</div>
            <div className="w-2/3 h-[50%]">
                <img src={image} alt="" className="w-full h-full" />
            </div>
            <div className="text-md font-semibold">{temperature}</div>
        </div>
    )
}

export default TempCard;