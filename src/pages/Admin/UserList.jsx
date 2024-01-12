import { DeleteOutline, EditNote } from "@mui/icons-material";
import "./UserList.css";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import {userRows} from "../../utilies/userData";
import { useState } from "react";

export default function UserList(){
    const [users, setUsers] = useState(userRows);

    const handleUserDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
    }

    const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'User', width: 250, renderCell: (params) => {
        return (
            <div className="userListUser">
                <img className="userListUserImg" src={params.row.avatar} alt="" />
                <span className="userListUsername">{params.row.username}</span>
            </div>
        )
    }},
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'transactions', headerName: 'Transactions', width: 150 },
    { field: 'actions', headerName: 'Actions', width: 130, renderCell: (params) => {
        return (
            <div className="userTableAction">
                <Link to={"/user/" + params.row.id}>
                <EditNote className="userListIcon edit" />
                </Link>
                <DeleteOutline className="userListIcon delete" onClick={() => handleUserDelete(params.row.id)} />
            </div>
        )
    } },
    ];
    return (
        <div className="userList">
            <div className="userListTop">
                <h3 className="userListTitle">User List</h3>
                <Link to="/newUser">
                    <button className="userCreateBtn">Create</button>
                </Link>
            </div>
            <div className="userListContent">
            <DataGrid
                rows={users}
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