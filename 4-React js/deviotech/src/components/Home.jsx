import React from 'react'
import home from './pics/home.png'
import cap from './pics/cap.png'
import './home.css'

export default function Home() {
  return (
    <div className="container">
        <div className="background_image">
             <img src={home} alt="error" />
        </div>
        <div className="home_content">
            <div className="heading">Home</div>
            <img src={cap}alt="error" />
            <div className="heading">Instructors</div>
        </div>
    </div>

  )
}
