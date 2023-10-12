import "./Home.scss";
import Featured from "../../components/Featured/Featured";
import Navbar from "../../components/Navbar/Navbar";
import List from "../../components/List/List";
import { useGetListsQuery } from "../../services/webApi";

export default function Home () {
    const {data: lists =[], error: listError, isLoading: isListLoading} = useGetListsQuery('');
    
    return(
        <div className="home">
            <Navbar/>
            <Featured type={'movie'}/>
            {
                lists?.map((list, index) => <List list={list} key={index}></List>)
            }
        </div>
    )
}