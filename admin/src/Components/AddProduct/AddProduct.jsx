import React, { useState } from 'react'
import "./AddProduct.css"
import img1 from "../../assets/uplord.webp"

const AddProduct = () => {
    const [image, setimage] = useState(false)
    const [ProductDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: ""
    })
    const image_handler = (e) => {
        setimage(e.target.files[0])
    }
    const changeHendler = (e) => {
        setProductDetails({ ...ProductDetails, [e.target.name]: e.target.value })
    }
    const Add_Product = async (req, res) => {
        console.log(ProductDetails);
        let responceData;
        let product = ProductDetails;
        let formData = new FormData();
        formData.append('product', image);

        await fetch('https://westeros-backend.onrender.com/uplord', {
            method: 'POST',
            headers: {
                Accept: 'application/json'
            },
            body: formData,
        }).then((resp) => resp.json()).then((data) => { responceData = data });
        if (responceData.success) {
            product.image = responceData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            }).then((resp) => resp.json()).then((data) => {
                data.success ? alert("Product Added") : alert("fail")
            })
        }
    }
    return (
        <div className='addproduct'>
            <div className="add-productfield">
                <p>Product Title</p>
                <input value={ProductDetails.name} onChange={changeHendler} type="text" name='name' placeholder='type here' />
            </div>
            <div className="add-price">
                <div className="add-productfield">
                    <p>Price</p>
                    <input value={ProductDetails.old_price} onChange={changeHendler} type="text" name='old_price' placeholder='type here' />
                </div>
                <div className="add-productfield">
                    <p>offer Price</p>
                    <input value={ProductDetails.new_price} onChange={changeHendler} type="text" name='new_price' placeholder='type here' />
                </div>
            </div>
            <div className="add-productfield">
                <p>Product Category</p>
                <select name="category" value={ProductDetails.category} onChange={changeHendler} className='addproduct-selector'>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className="add-prodductfield">
                <label htmlFor="file-input">
                    <img src={image ? URL.createObjectURL(image) : img1} alt="" className='add-thumbnail' />
                </label>
                <input type="file" onChange={image_handler} id='file-input' name='image' hidden />
            </div>
            <button onClick={() => { Add_Product() }} className='addproductbutton'>Add</button>
        </div>
    )
}

export default AddProduct
