import "./NewProduct.css";

export default function NewProduct(){
    return (
        <div className="newProduct">
            <h3 className="newProductTitle">New Product</h3>
            <form className="newProductForm">
                <div className="newProductItem">
                    <label htmlFor="image">Image</label>
                    <input className="newProductItemInput newProductItemFile" type="file" name="image" />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Name</label>
                    <input className="newProductItemInput" type="text" name="name" placeholder="Name" />
                </div>
                <div className="newProductItem">
                    <label htmlFor="description">Description</label>
                    <input className="newProductItemInput" type="text" name="description" placeholder="Description" />
                </div>
                <div className="newProductItem">
                    <label htmlFor="stock">Stock</label>
                    <input className="newProductItemInput" type="text" name="stock" placeholder="Stock" />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Active</label>
                    <select className="newProductItemInput" name="active">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="newProductItem">
                    <button className="newProductItemBtn">Update</button>
                </div>
                </form>
        </div>
    )
}