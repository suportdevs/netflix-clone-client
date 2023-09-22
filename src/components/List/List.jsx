import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import "./List.scss"
import ListItem from "../ListItem/ListItem"

export default function List(){
    return(
        <div className="list">
            <h1 className="list_title">Continue to Watch</h1>
            <div className="list_wrapper">
            <ArrowBackIos className="slider_arrow left"/>
            <div className="list_container">
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
            </div>
            <ArrowForwardIos className="slider_arrow right"/>
            </div>
        </div>
    )
}