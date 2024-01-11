import { ArrowDropDownOutlined, NotificationsNoneOutlined, SearchOutlined, Logout } from "@mui/icons-material";
import "./Navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
    
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <Link to="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
                    </Link>
                    <Link to="/">
                        <span className="link">Homepage</span>
                    </Link>
                    <Link to="/series">
                        <span className="link">Series</span>
                    </Link>
                    <Link to="/movies">
                        <span className="link">Movies</span>
                    </Link>
                    <span>New & Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <SearchOutlined className="icon" />
                    <span>KID</span>
                    <NotificationsNoneOutlined className="icon" />
                    <img src={process.env.PUBLIC_URL + 'netflix_bg.jpg'} alt="" />
                    <div className="profile">
                        <ArrowDropDownOutlined className="icon" />
                        <div className="dropdown">
                            <span>Settings</span>
                            <span><Logout /> Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}