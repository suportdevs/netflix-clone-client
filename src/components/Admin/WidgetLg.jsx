import { useGetUsersQuery } from "../../services/webApi";
import "./WidgetLg.css";

export default function WidgetLg(){
        const {data: users = [], isLoading, isSuccess} = useGetUsersQuery();

    const Button = ({type}) => {
        return <button className={"btn " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <div className="widgetLgList">
                <table className="widgetLgTable">
                    <thead>
                        <tr>
                            <th className="widgetLgTh">Customer</th>
                            <th className="widgetLgTh">Date</th>
                            <th className="widgetLgTh">Amout</th>
                            <th className="widgetLgTh">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (isLoading && !isSuccess) ?<tr><td>Loading...</td></tr> : users.map((user) => (
                                <tr key={user._id}>
                                    <td className="widgetLgTd widgetLgCustomer">
                                        <img src={user.avatar || 'https://wallpapers.com/images/hd/netflix-profile-pictures-10-x-10-qo9h82134t9nv0j0.jpg'} alt={user.username} className="widgetLgImg"/>
                                        <span className="widgetLgTdTitle">{user.username}</span>
                                    </td>
                                    <td className="widgetLgTd widgetLgTdGray">
                                        {user.createdAt}
                                    </td>
                                    <td className="widgetLgTd widgetLgTdGray">
                                        $200
                                    </td>
                                    <td className="widgetLgTd">
                                    <Button type="Approved" />
                                    </td>
                                </tr>
                            ))
                            }
                    </tbody>
                </table>
            </div>
        </div>
    )
}