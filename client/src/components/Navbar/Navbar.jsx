import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logos from "../Assets/pngwing.com.png"
import carts from "../Assets/shopping-cart-1105049_1280.png"
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  const { GetTotalCartItem } = useContext(ShopContext)
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logos} alt="" />
        <p>Westeros</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: "none" }} to="/">shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: "none" }} to="/mens">men</Link>{menu === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: "none" }} to="/womens">women</Link>{menu === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: "none" }} to="/kids">kid</Link>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token') ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button> : <Link to="/login"><button>Login</button></Link>}
        <Link to="/cart"><img src={carts} alt="" /></Link>
        <div className="nav-cart-count">{GetTotalCartItem()}</div>
      </div>
    </div>
  )
}

export default Navbar