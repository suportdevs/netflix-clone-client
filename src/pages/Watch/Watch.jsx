import { Reply } from "@mui/icons-material";
import "./Watch.scss";
import { Link, useLocation } from "react-router-dom";

export default function Watch(){
    const {state} = useLocation();
    console.log(state);
    return (
        <div className="watch">
            <Link to='/'>
            <div className="back">
            <Reply /> 
                Back
            </div>
            </Link>
            <video src={state.movie?.video} autoPlay={true} process controls />
        </div>
    )
}