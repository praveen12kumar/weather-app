import MainData from "../components/molecules/mainData/MainData";
import Sidebar from "../components/molecules/sidebar/Sidebar";
import background from "../assets/background.jpg"
function Home(){

    return (
        <div className="w-screen h-dvh flex items-center justify-center" style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)), url(${background}) `}}>
            <div className="h-[90%] w-[90%]  flex items-center justify-center">
                <Sidebar/>
                <MainData/>
        </div>
        </div>
    )
}

export default Home;