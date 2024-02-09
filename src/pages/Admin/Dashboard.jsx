import "./Dashboard.css";
import FeaturedInfo from "../../components/Admin/FeaturedInfo";
import Chart from "../../components/Admin/Chart";
import WidgetSm from "../../components/Admin/WidgetSm";
import WidgetLg from "../../components/Admin/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import { useGetUserStatsQuery } from "../../services/webApi";

export default function Dashboard(){
    const [stats, setStats] = useState([]);
    const MONTHS = useMemo(() => [
        'Jan',
        'Feb',
        "Mar",
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ], []);

    const {data: userStats, isSuccess} = useGetUserStatsQuery();
    useEffect(() => {
        (isSuccess && userStats) && userStats.map((item) => 
            setStats((prev) => [
                ...prev,
                {name: MONTHS[item._id - 1], 'New User': item.total},
            ])
        )
    }, [MONTHS, isSuccess]);

    return (
        <div className="dashboard">
            <FeaturedInfo />
            <Chart title="User Analytices" data={stats} dataKey="New User" grid/>
            <div className="widget">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}