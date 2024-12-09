import React from 'react'
import "./Offers.css"
import logo from "../Assets/off.jpg"

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>exclusive</h1>
        <h1>offers for you</h1>
        <p>only on best sellers products</p>
        <button>check now</button>
      </div>
      <div className="offers-right">
        <img src={logo} alt="" />
      </div>
    </div>
  )
}

export default Offers