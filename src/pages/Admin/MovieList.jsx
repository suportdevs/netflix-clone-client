import { DeleteOutline, EditNote } from "@mui/icons-material";
import "./MovieList.css";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import {productRows} from "../../productData";
import { useState } from "react";

export default function MovieList(){
    const [movies, setMovies] = useState(productRows);

    const handleMovieDelete = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    }

    const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'movie', headerName: 'Movie', width: 250, renderCell: (params) => {
        return (
            <div className="movieListMovie">
                <img className="movieListMovieImg" src={params.row.image} alt="" />
                <span className="movieListName">{params.row.name}</span>
            </div>
        )
    }},
    { field: 'stock', headerName: 'Stock', width: 250 },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'price', headerName: 'Price', width: 150 },
    { field: 'actions', headerName: 'Actions', width: 130, renderCell: (params) => {
        return (
            <div className="movieTableAction">
                <Link to={"movie/edit/" + params.row.id}>
                <EditNote className="movieListIcon edit" />
                </Link>
                <DeleteOutline className="movieListIcon delete" onClick={() => handleMovieDelete(params.row.id)} />
            </div>
        )
    } },
    ];
    return (
        <div className="movieList">
            <div className="movieListTop">
            <h3 className="movieListTitle">Movie List</h3>
            <Link to="/newMovie">
            <button className="movieListCreateBtn">Create</button>
            </Link>
            </div>
            <div className="movieListContent">
            <DataGrid
                rows={movies}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
            </div>
        </div>
    )
}