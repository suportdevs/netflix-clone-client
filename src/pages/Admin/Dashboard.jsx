import "./Dashboard.css";
import FeaturedInfo from "../../components/Admin/FeaturedInfo";
import Chart from "../../components/Admin/Chart";
import { userData } from "../../userData";
import WidgetSm from "../../components/Admin/WidgetSm";
import WidgetLg from "../../components/Admin/WidgetLg";

export default function Dashboard(){
    return (
        <div className="home">
            hi
            <FeaturedInfo />
            <Chart title="User Analytices" data={userData} dataKey="Active User" grid/>
            <div className="widget">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}