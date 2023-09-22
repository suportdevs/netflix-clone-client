import "./ListItem.scss";
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material";

export default function ListItem() {
    return (
        <div className="list_item">
            <img src={process.env.PUBLIC_URL + 'netflix_bg.jpg'} alt="" />
            <div className="item_content">
                <div className="content_icons">
                    <PlayArrow />
                    <Add />
                    <ThumbUpAltOutlined />
                    <ThumbDownAltOutlined />
                </div>
                <div className="others_info">
                    <span>1 Hours 20 minues 50 seconds</span>
                    <span>+10</span>
                </div>
                <div className="content_text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe placeat earum molestiae maxime corrupti, obcaecati quis nostrum nihil modi!</p>
                </div>
            </div>
        </div>
    )
}