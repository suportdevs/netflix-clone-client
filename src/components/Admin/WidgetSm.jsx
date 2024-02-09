import { useGetUsersQuery } from "../../services/webApi";
import "./WidgetSm.css";
import { Visibility } from "@mui/icons-material";

export default function WidgetSm(){
    const {data: users = [], isLoading, isSuccess} = useGetUsersQuery();
    return (
        <div className="widgetSm">
            <h3 className="widgetSmTitle">New Join Members</h3>
            <ul className="widgetSmList">
                {
                    (isLoading && !isSuccess) ? <li className="widgetSmListItem">Loading...</li> : users.map((user) => (
                        <li className="widgetSmListItem" key={user._id}>
                            <img src={user.avatar || 'https://wallpapers.com/images/hd/netflix-profile-pictures-10-x-10-qo9h82134t9nv0j0.jpg'} alt={user.username} className="widgetSmImg" />
                            <div className="widgetSmUserText">
                                <span className="widgetSmUserName">{user.username}</span>
                                {/* <span className="widgetSmUserTitle">Software Engineer</span> */}
                            </div>
                            <div className="widgetSmButton">
                            <button className="widgetSmBtn"><Visibility className="widgetSmBtnIcon" /> Display</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}