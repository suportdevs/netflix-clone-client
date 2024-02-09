import { useState } from "react";
import "./NewMovie.css";

export default function NewMovie(){
    const [movie, setMovie] = useState();
    const [brandImg, setBrandImg] = useState(null);
    const [thumbImg, setThumbImg] = useState(null);
    const [featuredImg, setFeaturedImg] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null);
    const [uploaded, setUploaded] = useState(0);

    const handleChangle = (e) => {
        setMovie({...movie, [e.target.name]: e.target.value});
    }
console.log(movie);

    return (
        <div className="newMovie">
            <h3 className="newMovieTitle">New Movie</h3>
            <form className="newMovieForm">
                <div className="newMovieItem">
                    <label htmlFor="brandImg">Brand Image</label>
                    <input className="newMovieItemInput newMovieItemFile" type="file" name="brandImg" onChange={(e) => setBrandImg(e.target.files[0])} />
                </div>
                <div className="newMovieItem">
                    <label htmlFor="thumbImg">Thumbonail Image</label>
                    <input className="newMovieItemInput newMovieItemFile" type="file" name="thumbImg"  onChange={(e) => setThumbImg(e.target.files[0])}/>
                </div>
                <div className="newMovieItem">
                    <label htmlFor="featuredImg">Featured Image</label>
                    <input className="newMovieItemInput newMovieItemFile" type="file" name="featuredImg"  onChange={(e) => setFeaturedImg(e.target.files[0])} />
                </div>
                <div className="newMovieItem">
                    <label htmlFor="title">Title</label>
                    <input className="newMovieItemInput" type="text" name="title" placeholder="Title" onChange={handleChangle}/>
                </div>
                <div className="newMovieItem">
                    <label htmlFor="description">Description</label>
                    <input className="newMovieItemInput" type="text" name="description" placeholder="Description" onChange={handleChangle}/>
                </div>
                <div className="newMovieItem">
                    <label htmlFor="genre">Genre</label>
                    <input className="newMovieItemInput" type="text" name="genre" placeholder="Genre" onChange={handleChangle}/>
                </div>
                <div className="newMovieItem">
                    <label htmlFor="duration">Duration</label>
                    <input className="newMovieItemInput" type="text" name="duration" placeholder="Duration" onChange={handleChangle}/>
                </div>
                <div className="newMovieItem">
                    <label htmlFor="limit">Limit</label>
                    <input className="newMovieItemInput" type="text" name="limit" placeholder="Limit" onChange={handleChangle}/>
                </div>
                <div className="newMovieItem">
                    <label htmlFor="year">Year</label>
                    <input className="newMovieItemInput" type="text" name="year" placeholder="Year" onChange={handleChangle}/>
                </div>
                <div className="newMovieItem">
                    <label htmlFor="type">Type</label>
                    <select className="newMovieItemInput" name="type" onChange={handleChangle}>
                        <option value="Series">Series</option>
                        <option value="Movies">Movies</option>
                    </select>
                </div>
                <div className="newMovieItem">
                    <label htmlFor="trailer">Trailer</label>
                    <input className="newMovieItemInput newMovieItemFile" type="file" name="trailer"  onChange={(e) => setTrailer(e.target.files[0])}/>
                </div>
                <div className="newMovieItem">
                    <label htmlFor="video">Video</label>
                    <input className="newMovieItemInput newMovieItemFile" type="file" name="video" onChange={(e) => setVideo(e.target.files[0])} />
                </div>
                <div className="newMovieItem">
                    {uploaded === 5 ? <button className="newMovieItemBtn">Update</button> : <button className="newMovieItemBtn">Create</button> }
                </div>
            </form>
        </div>
    )
}