import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./Featured.scss";

export default function Featured({type}){
    return (
        <div className="featured">
            {type && (
            <div className="categories">
                <h1>{type === 'movie'? "Movies" : "Series"}</h1>
                <select name="genra" id="genra">
                    <option >Genra</option>
                    <option value="adventure">Adventure</option>
                    <option value="actions">Actions</option>
                    <option value="funtesy">Funtesy</option>
                    <option value="commedy">Commedy</option>
                </select>
            </div>
            )}
            <img src={process.env.PUBLIC_URL + 'netflix_bg.jpg'} alt="" />
            <div className="featured_content">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veritatis nam temporibus cupiditate doloribus in beatae sint incidunt totam quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veritatis nam temporibus cupiditate doloribus in beatae sint incidunt totam quos.
                </p>
                <div className="featured_buttons">
                    <button className="play"><PlayArrow /> <span>Play</span></button>
                    <button className="more"><InfoOutlined /> <span>More</span></button>
                </div>
            </div>
        </div>
    )
}