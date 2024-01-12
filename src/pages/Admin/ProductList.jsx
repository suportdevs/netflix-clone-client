import { DeleteOutline, EditNote } from "@mui/icons-material";
import "./ProductList.css";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import {productRows} from "../../utilies/productData";
import { useState } from "react";

export default function ProductList(){
    const [products, setProducts] = useState(productRows);

    const handleProductDelete = (id) => {
        setProducts(products.filter(product => product.id !== id));
    }

    const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'product', headerName: 'Product', width: 250, renderCell: (params) => {
        return (
            <div className="productListProduct">
                <img className="productListProductImg" src={params.row.image} alt="" />
                <span className="productListName">{params.row.name}</span>
            </div>
        )
    }},
    { field: 'stock', headerName: 'Stock', width: 250 },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'price', headerName: 'Price', width: 150 },
    { field: 'actions', headerName: 'Actions', width: 130, renderCell: (params) => {
        return (
            <div className="productTableAction">
                <Link to={"product/edit/" + params.row.id}>
                <EditNote className="productListIcon edit" />
                </Link>
                <DeleteOutline className="productListIcon delete" onClick={() => handleProductDelete(params.row.id)} />
            </div>
        )
    } },
    ];
    return (
        <div className="productList">
            <div className="productListTop">
            <h3 className="productListTitle">Product List</h3>
            <Link to="/newProduct">
            <button className="productListCreateBtn">Create</button>
            </Link>
            </div>
            <div className="productListContent">
            <DataGrid
                rows={products}
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