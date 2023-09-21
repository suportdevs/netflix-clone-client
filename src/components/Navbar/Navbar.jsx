import { ArrowDropDownOutlined, NotificationsNoneOutlined, SearchOutlined } from "@mui/icons-material";
import "./Navbar.scss";
// import netflix_bg from "../../../public/netflix_bg.jpg";

export default function Navbar() {
    console.log("%PUBLIC_URL%");
    return (
        <div className="navbar">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New & Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <SearchOutlined className="icon" />
                <span>KID</span>
                <NotificationsNoneOutlined className="icon" />
                <img src={process.env.PUBLIC_URL + 'netflix_bg.jpg'} alt="" />
                <ArrowDropDownOutlined className="icon" />
            </div>
        </div>
    )
}