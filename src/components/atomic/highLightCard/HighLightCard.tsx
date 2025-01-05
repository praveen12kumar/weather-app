type HighLightCardProps = {
    footer: string,
    data: string,
    title: string
}

function HighLightCard({footer, data, title}:HighLightCardProps){

    return(
        <div className="flex flex-col justify-between items-center border bg-white shadow-md rounded-xl p-3 h-[20vh] w-[15vw]">
            <div className="font-semibold text-md w-full text-left ml-8 mt-2 text-gray-300">
                {title}
            </div>
            <div className="text-3xl font-semibold">{data}</div>
            <div className="text-sm w-full text-left ml-8 mb-2">{footer}</div>
        </div>
    )
}

export default HighLightCard;