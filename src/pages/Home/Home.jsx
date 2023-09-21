import Navbar from "../../components/Navbar/Navbar";
import "./Home.scss";

export default function Home () {
    return(
        <div className="home">
            <Navbar/>
            <img src={process.env.PUBLIC_URL + 'netflix_bg.jpg'} alt="" />
        </div>
    )
}