import { useState } from "react";
import "./NewMovie.css";

export default function NewMovie(){
    const [movie, setMovie] = useState();
    const [thumbImg, setThumbImg] = useState(null);
    const [featuredImg, setFeaturedImg] = useState(null);

    return (
        <div className="newMovie">
            <h3 className="newMovieTitle">New Movie</h3>
            <form className="newMovieForm">
                <div className="newMovieItem">
                    <label htmlFor="brandImg">Brand Image</label>
                    <input className="newMovieItemInput newMovieItemFile" type="file" name="brandImg" />
                </div>
                <div className="newMovieItem">
                    <label htmlFor="thumbImg">Thumbonail Image</label>
                    <input className="newMovieItemInput newMovieItemFile" type="file" name="thumbImg" />
                </div>
                <div className="newMovieItem">
                    <label htmlFor="featuredImg">Featured Image</label>
                    <input className="newMovieItemInput newMovieItemFile" type="file" name="featuredImg" />
                </div>
                <div className="newMovieItem">
                    <label htmlFor="title">Title</label>
                    <input className="newMovieItemInput" type="text" name="title" placeholder="Title" />
                </div>
                <div className="newMovieItem">
                    <label htmlFor="description">Description</label>
                    <input className="newMovieItemInput" type="text" name="description" placeholder="Description" />
                </div>
                <div className="newMovieItem">
                    <label htmlFor="genre">Genre</label>
                    <input className="newMovieItemInput" type="text" name="genre" placeholder="Genre" />
                </div>
                <div className="newMovieItem">
                    <label htmlFor="duration">Duration</label>
                    <input className="newMovieItemInput" type="text" name="duration" placeholder="Duration" />
                </div>
                <div className="newMovieItem">
                    <label htmlFor="limit">Limit</label>
                    <input className="newMovieItemInput" type="text" name="limit" placeholder="Limit" />
                </div>
                <div className="newMovieItem">
                    <label htmlFor="year">Year</label>
                    <input className="newMovieItemInput" type="text" name="year" placeholder="Year" />
                </div>
                <div className="newMovieItem">
                    <label htmlFor="type">Type</label>
                    <select className="newMovieItemInput" name="type">
                        <option value="Series">Series</option>
                        <option value="Movies">Movies</option>
                    </select>
                </div>
                <div className="newMovieItem">
                    <label htmlFor="trailer">Trailer</label>
                    <input className="newMovieItemInput newMovieItemFile" type="file" name="trailer" />
                </div>
                <div className="newMovieItem">
                    <label htmlFor="video">Video</label>
                    <input className="newMovieItemInput newMovieItemFile" type="file" name="video" />
                </div>
                <div className="newMovieItem">
                    <button className="newMovieItemBtn">Update</button>
                </div>
                </form>
        </div>
    )
}