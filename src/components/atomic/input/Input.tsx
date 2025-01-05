import { IoMdSearch } from "react-icons/io";

function Input(){

    return(
        <div className="w-full flex items-center ">
            <input type="text" className="bg-white text-slate-600 outline-none w-full rounded-tl-lg rounded-bl-lg px-4 py-2 " placeholder="Search..." />
            <IoMdSearch className="h-10 basis-1/5 p-2  bg-sky-500 rounded-tr-lg rounded-br-lg" />
        </div>
    )
};

export default Input;