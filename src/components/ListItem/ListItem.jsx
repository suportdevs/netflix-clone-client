import { useState } from "react";
import "./ListItem.scss";
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material";
import { useGetMovieQuery } from "../../services/webApi";
import { Link } from "react-router-dom";

export default function ListItem({index, id}) {
    const [isHovered, setIsHovered] = useState(false);
    const {data: movie ={}, error: movieError, isLoading: movieIsLoading} = useGetMovieQuery(id);
    
    return (
        <Link to='/watch' state={{movie: movie}}>
            <div className="list_item"
            style={{left: isHovered && index * 250 - 50 + index * 5}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                <img src={movie.thumbImg} alt="" />
                {
                    isHovered && (
                        <>
                        <video src={movie.trailer} autoPlay={true} loop />
                        <div className="item_content">
                            <div className="content_icons">
                                <PlayArrow className="icon" />
                                <Add className="icon" />
                                <ThumbUpAltOutlined className="icon" />
                                <ThumbDownAltOutlined className="icon" />
                            </div>
                            <div className="others_info">
                                <span>1 Hour 20 mins 50 ses</span>
                                <span className="limit">+{movie.limit}</span>
                                <span>{movie.year}</span>
                            </div>
                            <div className="content_text">
                                <p>{movie.description}</p>
                            </div>
                            <div className="genre">
                                {movie.genre}
                            </div>
                        </div>
                        </>
                    )
                }
            </div>
        </Link>
    )
}