import "./NewUser.css";

export default function NewUser(){
    return (
        <div className="newUser">
            <h3 className="newUserTitle">New User</h3>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label htmlFor="">Name</label>
                    <input className="newUserItemInput" type="text" name="name" placeholder="Name" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Email</label>
                    <input className="newUserItemInput" type="email" name="email" placeholder="Email" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Password</label>
                    <input className="newUserItemInput" type="password" name="password" placeholder="Password" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Phone</label>
                    <input className="newUserItemInput" type="text" name="phone" placeholder="Phone" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Address</label>
                    <input className="newUserItemInput" type="text" name="address" placeholder="Address" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Gender</label>
                    <div className="newUserInputGroup">
                    <input className="newUserItemInput" type="radio" name="gender" value="male" />
                    <label htmlFor="gender">Male</label>
                    <input className="newUserItemInput" type="radio" name="gender" value="female" />
                    <label htmlFor="gender">Female</label>
                    <input className="newUserItemInput" type="radio" name="gender" value="other" />
                    <label htmlFor="gender">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Active</label>
                    <select className="newUserItemInput" name="active">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="newUserItem">
                    <button className="newUserItemBtn">Update</button>
                </div>
                </form>
        </div>
    )
}