import { DeleteOutline, EditNote } from "@mui/icons-material";
import "./MovieList.css";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import {movies} from "../../productData";
import { useEffect, useState } from "react";
import { useDeleteMovieMutation, useGetMoviesQuery } from "../../services/movieApi";
import { useDispatch, useSelector } from "react-redux";
import { deleteStoredMovie, getMovies } from "../../services/movieSlice";

export default function MovieList(){
    const dispatch = useDispatch();
    const {data: movieArray, isLoading, isSuccess} = useGetMoviesQuery();
    const [deleteMovie, {isLoading: isDeleteLoading, isSuccess: isDeleteSuccess}] = useDeleteMovieMutation();

    useEffect(() => {
        isSuccess && dispatch(getMovies(movieArray));
    }, [dispatch,isSuccess]);

    const movies = useSelector((state) => state.movie.movies);

    const handleMovieDelete = async (id) => {
        await deleteMovie(id).unwrap();
        isDeleteLoading && dispatch(deleteStoredMovie(id));
    }

    const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    { field: 'movie', headerName: 'Movie', width: 250, renderCell: (params) => {
        return (
            <div className="movieListMovie">
                <img className="movieListMovieImg" src={params.row.brandImg} alt="" />
                <span className="movieListName">{params.row.title}</span>
            </div>
        )
    }},
    { field: 'genre', headerName: 'Genre', width: 250 },
    { field: 'limit', headerName: 'Limit', width: 150 },
    { field: 'year', headerName: 'Year', width: 150 },
    { field: 'actions', headerName: 'Actions', width: 130, renderCell: (params) => {
        return (
            <div className="movieTableAction">
                <Link to={"movie/edit/" + params.row._id}>
                <EditNote className="movieListIcon edit" />
                </Link>
                <DeleteOutline className="movieListIcon delete" onClick={() => handleMovieDelete(params.row._id)} />
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
                    paginationModel: { page: 0, pageSize: 10 },
                },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                getRowId={(row) => row._id}
            />
            </div>
        </div>
    )
}