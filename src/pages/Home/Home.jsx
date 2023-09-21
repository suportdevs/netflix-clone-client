import Featured from "../../components/Featured/Featured";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.scss";

export default function Home () {
    return(
        <div className="home">
            <Navbar/>
            <Featured type={'movie'}/>
        </div>
    )
}