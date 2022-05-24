import React from 'react'
import logo from '../../photos/logo.png'
import '../Home/home.css'

export default function Home() {
  return (
    <header>
        <nav>
            <div className="logo">
                <img src={logo} alt="ERROR" />
            </div>
            <div className="menu">
                <a href="#">Home</a>
                <a href="#">Service</a>
                <a href="#">About</a>
                <a href="#">Portfolio</a>
                <a href="#">Team</a>
                <a href="#">Testimonial</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </div>
            <div className="btn">BUY NOW</div>
        </nav>
        <div className="text">
            <h1 className='creative'>CREATIVE</h1>
           <p className='creative_para'>There are many variations of passages of Lorem Ipsum available <br />
           but the majority have suffered alteration.</p>
           <div className="creative_btn">CONTACT US</div>
        </div>
    </header>
  )
}
