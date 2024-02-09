import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./Featured.scss";
import { useGetRandomMovieQuery } from "../../services/webApi";
import { useEffect, useState } from "react";

export default function Featured({type}){
    const [content, setContent] = useState({});
    const {data, isLoading, isSuccess} = useGetRandomMovieQuery(type);
    useEffect(() => {
       isSuccess && setContent(data[0]);
    }, [type, isSuccess]);
    
    return (
        <div className="featured">
            {type && (
            <div className="categories">
                <h1>{type=== 'movies' ? 'Movies' : 'Series'}</h1>
                <select name="genra" id="genra">
                    <option >Genra</option>
                    <option value="adventure">Adventure</option>
                    <option value="actions">Actions</option>
                    <option value="funtesy">Funtesy</option>
                    <option value="commedy">Commedy</option>
                </select>
            </div>
            )}
            {
                isLoading ? 'Loading...' : (
                    <>
                    <img src={content.thumbImg} alt="" />
                    <div className="featured_content">
                        <img src={content.brandImg} alt="" />
                        <p>{content.description}</p>
                        <div className="featured_buttons">
                            <button className="play"><PlayArrow /> <span>Play</span></button>
                            <button className="more"><InfoOutlined /> <span>More</span></button>
                        </div>
                    </div>
                    </>
                )
            }
        </div>
    )
}