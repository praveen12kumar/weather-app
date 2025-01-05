import MainData from "../components/organisms/mainData/MainData";
import Sidebar from "../components/molecules/sidebar/Sidebar";
import background from "../assets/background.jpg"
function Home(){

    return (
        <div className="min-h-[100vh] p-16 flex items-stretch justify-center" style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)), url(${background}) `}}>
            
                <Sidebar/>
                <MainData/>
        
        </div>
    )
}

export default Home;