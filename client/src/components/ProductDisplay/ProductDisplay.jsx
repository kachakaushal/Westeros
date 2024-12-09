import React, { useContext } from 'react'
import "./ProductDisplay.css"
import logo from "../Assets/star.jpg"
import logo1 from "../Assets/star1.jpg"
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext)

    return (
        <div className='productdisplay'>
            <div className="pdisplay-left">
                <div className="pdisplay-img">
                    <img className='pdisplay-m-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="pdisplay-right">
                <h1>{product.name}</h1>
                <div className="pdisplay-right-star">
                    <img src={logo} className='star' alt="" />
                    <img src={logo} className='star' alt="" />
                    <img src={logo} className='star' alt="" />
                    <img src={logo} className='star' alt="" />
                    <img src={logo1} className='star' alt="" />
                    <p>122</p>
                </div>
                <div className="pdisplay-right-prices">
                    <div className="pdisplay-right-price-old">${product.old_price}</div>
                    <div className="pdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="pdisplay-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga alias, officiis eum minus perferendis nesciunt veniam ipsum odio, temporibus minima iste deleniti incidunt aliquid voluptates rerum dicta? Delectus, repellendus doloribus.</div>
                <div className="pdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="pdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>Add to Cart</button>
                <p className='pdisplay-right-category'><span>Category:</span>Women,T-shirt,Crop top</p>
                <p className='pdisplay-right-category'><span>Tags:</span>Morden,Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay