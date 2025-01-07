import MainData from "../components/organisms/mainData/MainData";
import Sidebar from "../components/molecules/sidebar/Sidebar";
import background from "../assets/background.jpg"
import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { fetchData,  } from "../redux/slices/ForecastSlice";
import axios from "axios";

function Home(){

    const dispatch = useAppDispatch();

    const [city, setCity] = useState<string>("");


    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(async(position)=>{
            const response = await axios.get(`https://us1.locationiq.com/v1/reverse?key=${import.meta.env.VITE_LOCATION_API_KEY}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`)
            //console.log("response", response)
            setCity(response?.data?.address?.county);
            //console.log("city", city)
        })
        if(!city){
            dispatch(fetchData("New Delhi"));
        }
        else{
            dispatch(fetchData(city)); 
        }
    },[city]);



    return (
        <div className="min-h-[100vh] p-8 flex items-stretch justify-center" style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)), url(${background}) `}}>
            
                <Sidebar/>
                <MainData/>
        
        </div>
    )
}

export default Home;