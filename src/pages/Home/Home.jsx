import "./Home.scss";
import Featured from "../../components/Featured/Featured";
import Navbar from "../../components/Navbar/Navbar";
import List from "../../components/List/List";

export default function Home () {
    return(
        <div className="home">
            <Navbar/>
            <Featured type={'movie'}/>
            <List></List>
            <List></List>
            <List></List>
            <List></List>
            <List></List>
            <List></List>
        </div>
    )
}