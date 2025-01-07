import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { fetchData } from "../../../redux/slices/ForecastSlice";
import { useAppDispatch } from "../../../hooks/hooks";


function Input(){
    const [search, setSearch] = useState("");
    const dispatch = useAppDispatch();


    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
    }

    useEffect(()=>{
        if(!search) return;

        const delayDebounceFn = setTimeout(() => {
            dispatch(fetchData(search))
        }, 500)
        
        return ()=> clearTimeout(delayDebounceFn);
    },[search]);

    // console.log("search", search);
     //console.log("city", city);


    return(
        <div className="w-full flex items-center ">
            <input 
                type="text" 
                value={search} 
                onChange={handleChange}
                className="bg-white text-slate-600 outline-none w-full rounded-tl-lg rounded-bl-lg px-4 py-2 " placeholder="Search..." />
            <IoMdSearch className="h-10 basis-1/5 p-2  bg-sky-500 rounded-tr-lg rounded-br-lg" />
        </div>
    )
};

export default Input;