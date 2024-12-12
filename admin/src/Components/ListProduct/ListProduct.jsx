import React, { useEffect, useState } from 'react'
import logo from "../../assets/remove.png"
import "./ListProduct.css"

const ListProduct = () => {
    const [allproducts, setallproducts] = useState([]);
    const fetchInfo = async () => {
        await fetch('https://westeros-backend.onrender.com/allproducts').then((resp) => resp.json()).then((data) => { setallproducts(data) })
    }
    useEffect(() => {
        fetchInfo()
    }, [])
    const removeproduct = async (id) => {
        await fetch('https://westeros-backend.onrender.com/removeproduct', {
            method: 'POST',
            headers: {
                Accept: 'aplication/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id })
        })
        await fetchInfo()
    }
    return (
        <div className='listproduct'>
            <h1>All Product List</h1>
            <div className='list-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Old_price</p>
                <p>New_price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproduct">
                <hr />
                {allproducts.map((product, index) => {
                    return <><div key={index} className='list-product-format list-main'>
                        <img src={product.image} alt="" className="product-icon" />
                        <p>{product.name}</p>
                        <p>${product.old_price}</p>
                        <p>${product.new_price}</p>
                        <p>{product.category}</p>
                        <img onClick={() => { removeproduct(product.id) }} className='listproduct-remove' src={logo} alt="" />
                    </div>
                        <hr />
                    </>
                })}
            </div>
        </div>
    )
}

export default ListProduct
