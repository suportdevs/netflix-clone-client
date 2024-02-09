import { useState } from "react";
import "./NewMovie.css";
import { initializeApp } from "firebase/app";
// import storage from "../../../firebase";
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGEING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

initializeApp(firebaseConfig);

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

    const storage = getStorage();

    // Create the file metadata
    /** @type {any} */
    const metadata = {
    contentType: 'image/jpeg/jpg/png/mp4'
    };

    const upload = (items) => {
        items.forEach((item) => {
            // Upload file and metadata to the object 'images/mountains.jpg'
            const fileName = new Date().getTime() + item.label + item.file.name;
            const storageRef = ref(storage, `/movies/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, item.file, metadata);
            
            uploadTask.on("state_changed", (snapshot) => {
                const uploadPercent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Upload is ${uploadPercent} % done`);
                switch (snapshot.state) {
                    case 'paused':
                      console.log('Upload is paused');
                      break;
                    case 'running':
                      console.log('Upload is running');
                      break;
                  }
            }, (error) => {
                console.log(error);
                switch (error.code) {
                    case 'storage/unauthorized':
                      // User doesn't have permission to access the object
                      break;
                    case 'storage/canceled':
                      // User canceled the upload
                      break;
              
                    // ...
              
                    case 'storage/unknown':
                      // Unknown error occurred, inspect error.serverResponse
                      break;
                  }
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                    setMovie((prev) => {
                        return {...prev, [item.label]: url}
                    });
                    setUploaded((prev) => prev + 1);
                })
            })
        })
    }

    const handleUpload = (e) => {
        e.preventDefault();
        upload([
            {file: brandImg, lable: "brandImg"},
            {file: thumbImg, label: "thumbImg"},
            {file: featuredImg, label: "featuredImg"},
            {file: trailer, label: "trailer"},
            {file: video, label: "video"}
        ]);
    }

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
                    {uploaded === 5 ? <button className="newMovieItemBtn" >Create</button> : <button className="newMovieItemBtn" onClick={handleUpload}>Upload</button> }
                </div>
            </form>
        </div>
    )
}