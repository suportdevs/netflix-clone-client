import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import "./List.scss"
import ListItem from "../ListItem/ListItem"
import { useRef, useState } from "react"

export default function List(){
    const listRef = useRef()
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const handleSlide = (derection) => {
        setIsMoved(true);
        const distance = listRef.current.getBoundingClientRect().x - 50;
        if(derection === 'left' && slideNumber > 0){
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${260 + distance}px)`
        }
        if(derection === 'right' && slideNumber < 5){
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-260 + distance}px)`
        }
    }
    return(
        <div className="list">
            <h1 className="list_title">Continue to Watch</h1>
            <div className="list_wrapper">
            <ArrowBackIos className="slider_arrow left" onClick={() => handleSlide('left')} style={{display: !isMoved && 'none'}} />
            <div className="list_container" ref={listRef}>
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
            <ArrowForwardIos className="slider_arrow right" onClick={() => handleSlide('right')} />
            </div>
        </div>
    )
}