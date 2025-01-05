import MainData from "../components/molecules/mainData/MainData";
import Sidebar from "../components/molecules/sidebar/Sidebar";

function Home(){

    return (
        <div className="">
           <Sidebar/>

           <MainData/>

           <h1 className="text-red-600">Home</h1>
        </div>
    )
}

export default Home;