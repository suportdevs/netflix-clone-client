import { CalendarToday, FmdGoodOutlined, MailOutline, PermIdentity, PhoneAndroid, PhotoCameraOutlined } from "@mui/icons-material";
import "./UserEdit.css";

export default function UserEdit(){
    return (
        <div className="userEdit">
            <div className="userEditLeft">
                <div className="userEditLeftTop">
                    <img className="userEditLeftImg" src="https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <div className="userEditLeftTopTitle">
                        <span className="userEditLeftName">Anna Backer</span>
                        <span className="userEditLeftTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userEditLeftBottom">
                    <div className="userEditLeftInfo">
                        <h3 className="userEditLeftInfoTitle">Account Details</h3>
                        <div className="userEditLeftInfoItem">
                            <PermIdentity className="userEditLeftInfoItemIcon" />
                            <span className="userEditLeftInfoItemTitle">annabacker59</span>
                        </div>
                        <div className="userEditLeftInfoItem">
                            <CalendarToday className="userEditLeftInfoItemIcon" />
                            <span className="userEditLeftInfoItemTitle">annabacker59</span>
                        </div>
                        <h3 className="userEditLeftInfoTitle">Contact Details</h3>

                        <div className="userEditLeftInfoItem">
                            <PhoneAndroid className="userEditLeftInfoItemIcon" />
                            <span className="userEditLeftInfoItemTitle">+088 01700-000000</span>
                        </div>
                        <div className="userEditLeftInfoItem">
                            <MailOutline className="userEditLeftInfoItemIcon" />
                            <span className="userEditLeftInfoItemTitle">annabacker@gmail.com</span>
                        </div>
                        <div className="userEditLeftInfoItem">
                            <FmdGoodOutlined className="userEditLeftInfoItemIcon" />
                            <span className="userEditLeftInfoItemTitle">New York, 50000</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="userEditRight">
                <form >
                <div className="userEditRightAvatar">
                    <label htmlFor="avatar" className="userEidtRightAvatarlabel">
                    <img className="userEditRightImg" src="https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <span className="userEditRightAvatarMask"><PhotoCameraOutlined /></span>
                    <input className="userEditRightItemInput" type="file" name="avatar" id="avatar" style={{display: 'none'}} />
                    </label>
                </div>
                <div className="userEditRightItem">
                    <label htmlFor="">Name</label>
                    <input className="userEditRightItemInput" type="text" name="name" placeholder="Name" />
                </div>
                <div className="userEditRightItem">
                    <label htmlFor="">Email</label>
                    <input className="userEditRightItemInput" type="email" name="email" placeholder="Email" />
                </div>
                <div className="userEditRightItem">
                    <label htmlFor="">Phone</label>
                    <input className="userEditRightItemInput" type="text" name="phone" placeholder="Phone" />
                </div>
                <div className="userEditRightItem">
                    <label htmlFor="">Address</label>
                    <input className="userEditRightItemInput" type="text" name="address" placeholder="Address" />
                </div>
                <div className="userEditRightItem">
                    <button className="userEditRightItemBtn">Update</button>
                </div>
                </form>
            </div>
        </div>
    )
}