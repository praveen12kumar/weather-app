function TopRow(){


    return (
        <div className="w-full flex justify-between items-center px-12">
            {/* Todays or week */}
            <div className="flex items-center justify-center gap-8">
                <div className="text-2xl font-semibold">
                    Today
                </div>
                <div className="text-2xl font-semibold text-primary">
                    Week
                </div>
            </div>
            {/* C or F */}
            <div className="flex items-center justify-center gap-8">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-sky-900 text-white font-semibold">
                °C
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center  text-black border border-slate-300 bg-white font-semibold">
                °F
                </div>
            </div>
        </div>
    )
};

export default TopRow;