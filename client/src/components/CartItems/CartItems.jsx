import React, { useContext } from 'react'
import "./CartItems.css"
import logo from "../Assets/w-logo-blue.png"
import remove from "../Assets/remove.png"
import { ShopContext } from '../../Context/ShopContext'

const CartItems = () => {
    const { GetTotalAmount, all_products, CartItems, RemoveFromCart } = useContext(ShopContext);
    return (
        <div className='cartitems'>
            <div className="cartitem-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
            </div>
            <hr />
            {all_products.map((e) => {
                if (CartItems[e.id] > 0) {
                    return <div>
                        <div className='cartitem-format cartitem-format-main'>
                            <img src={e.image} alt="" className='cardicon-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='card-quantity'>{CartItems[e.id]}</button>
                            <p>${e.new_price * CartItems[e.id]}</p>
                            <img src={remove} className='carditem-remove' onClick={() => { RemoveFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="cartitem-down">
                <div className="cart-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cart-total-item">
                            <p>subTotal</p>
                            <p>${GetTotalAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cart-total-item">
                            <h3>Total</h3>
                            <h3>${GetTotalAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="promocode">
                    <p>if you have promocode, Enter it here</p>
                    <div className="card-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartItems