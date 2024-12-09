import React from 'react'
import "./Footer.css"
import logo from"../Assets/pngwing.com.png"
import tele from "../Assets/telegram.png"
import insta from "../Assets/instagram.png"
import you from "../Assets/youtube1.png"


const Footter = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" />
            <p>Westeros</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className="footer-icons-con">
                <img src={tele} alt="" />
            </div>
            <div className="footer-icons-con">
                <img src={insta} alt="" />
            </div>
            <div className="footer-icons-con">
                <img src={you} alt="" />
            </div>
           
        </div>
        <div className="footer-copyright">
            <hr />
            <p>copyright @ 2024 Westeros-All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footter