import React from 'react'
import "./Hero.css"
import logos from "../Assets/pngwing.com.png"
import right from "../Assets/arrow-right-fill.png"
import rightphoto from "../Assets/hero1.jpg"


const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>New Arrivals Only</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>New</p>
                        <img src={logos} alt="" />
                    </div>
                    <p>Collection</p>
                    <p>For Everyone</p>
                </div>
                <div className="hero-latest-btn">

                    <div>Latest Collection</div>
                    <img src={right} alt="" />

                </div>
            </div>
            <div className="hero-right">
                <img src={rightphoto} alt="" />
            </div>
        </div>
    )
}

export default Hero