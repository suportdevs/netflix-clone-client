import { ArrowDropDownOutlined, NotificationsNoneOutlined, SearchOutlined, Logout } from "@mui/icons-material";
import "./Navbar.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../services/AuthSlice";

export default function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(setCurrentUser(null));
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
        console.log('logout');
    }
    
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <Link to="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
                    </Link>
                    <Link to="/" className="link">
                        <span >Homepage</span>
                    </Link>
                    <Link to="/series" className="link">
                        <span >Series</span>
                    </Link>
                    <Link to="/movies" className="link">
                        <span >Movies</span>
                    </Link>
                    <span>New & Popular</span>
                    <span>My List</span>
                    <Link to="/login" className="link">
                        <span >Login</span>
                    </Link>
                    <Link to="/register" className="link">
                        <span >Register</span>
                    </Link>
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
                            <span onClick={handleLogout}><Logout /> Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}