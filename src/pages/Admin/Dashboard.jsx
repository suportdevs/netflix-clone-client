import "./Dashboard.css";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import Chart from "../../components/Chart/Chart";
import { userData } from "../../utilies/userData";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";

export default function Dashboard(){
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart title="User Analytices" data={userData} dataKey="Active User" grid/>
            <div className="widget">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}