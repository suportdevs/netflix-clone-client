import "./Home.scss";
import Featured from "../../components/Featured/Featured";
import Navbar from "../../components/Navbar/Navbar";
import List from "../../components/List/List";
import { useGetListsQuery } from "../../services/webApi";
import { useState } from "react";

export default function Home ({type}) {
    const [genre, setGenre] = useState(null);
    const {data: lists =[], error: listError, isLoading: isListLoading} = useGetListsQuery({type, genre});
    
    return(
        <div className="home">
            <Navbar/>
            <Featured type={type}/>
            {
                isListLoading ? "Loading..." : lists?.map((list, index) => <List list={list} key={index}></List>)
            }
        </div>
    )
}