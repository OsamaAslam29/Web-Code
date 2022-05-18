import React from 'react'
import logo from './pics/download.png'
import phone from './pics/phone.png'
import './navbar.css'

export default function Navbar() {
  return (
    <nav>
        <div class="Navbar_Container">
            <div class="logo">
                <img src={logo} alt="error"/>
            </div>
            <div class="menu_Bar">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Experies</a>
                <a href="#">Services</a>
                <a href="#">Timeline</a>
                <a href="#">Awards</a>
                <a href="#">Media</a>
                <a href="#">Contact</a>
            </div>
       </div>
    <div class="icon">
            <img src={phone} alt="error"/>
    </div>
    <div class="content">
            <div class="upper">Available @ </div>
            <div class="lower">444.332.1167  </div>
    </div>
</nav>
  )
}
