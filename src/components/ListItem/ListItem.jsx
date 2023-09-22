import { useState } from "react";
import "./ListItem.scss";
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material";

export default function ListItem({index}) {
    const trailer = 'https://www.youtube.com/watch?v=JvNuYOR7b4w&list=PLtiyZbErwO-gz0aEy58x2JFJL0QQQV-8X&index=12';
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="list_item"
        style={{left: isHovered && index * 250 - 50 + index * 5}}
         onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
            <img src={process.env.PUBLIC_URL + 'netflix_bg.jpg'} alt="" />
            {
                isHovered && (
                    <>
                    <video src={{trailer}} autoPlay={true} loop />
                    <div className="item_content">
                        <div className="content_icons">
                            <PlayArrow className="icon" />
                            <Add className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownAltOutlined className="icon" />
                        </div>
                        <div className="others_info">
                            <span>1 Hour 20 mins 50 ses</span>
                            <span className="limit">+10</span>
                            <span>1999</span>
                        </div>
                        <div className="content_text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe placeat earum molestiae maxime corrupti, obcaecati quis nostrum nihil modi!</p>
                        </div>
                        <div className="genre">
                            Actions
                        </div>
                    </div>
                    </>
                )
            }
            
        </div>
    )
}