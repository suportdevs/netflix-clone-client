import { Reply } from "@mui/icons-material";
import "./Watch.scss";

export default function Watch(){
    return (
        <div className="watch">
            <div className="back">
            <Reply /> 
                Back
            </div>
            <video src={process.env.PUBLIC_URL + '/trailer.mp4'} autoPlay={true} process controls />
        </div>
    )
}