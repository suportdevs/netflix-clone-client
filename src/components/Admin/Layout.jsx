import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import TopBar from "../TopBar/TopBar";

export default function Layout(){
    return (
        <>
        <TopBar />
        <div className='container'>
            <Sidebar/>
            <div className="mainContentWrapper">
            <Outlet />
            </div>
        </div>
        </>
    )
}