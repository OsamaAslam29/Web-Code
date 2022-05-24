import React from 'react'
import logo from './pics/download.png'
import phone from './pics/phone.png'
import './navbar.css'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
        <div class="Navbar_Container">
            <div class="logo">
                <img src={logo} alt="error"/>
            </div>
            <div class="menu_Bar">
                <NavLink className="nav" to="/">Home</NavLink>
                <NavLink className="nav" to="/team">Team</NavLink>
                <NavLink className="nav" to="/tutor">Tutor</NavLink>
                <NavLink className="nav" to="/rating">Rating</NavLink>
                <NavLink className="nav" to="/learning">Learning</NavLink>
                <NavLink className="nav" to="/cards">Cards</NavLink>
                <NavLink className="nav" to="/contact">Contact</NavLink>
                
            </div>
       </div>

<div className="phone">


    <div class="icon">
            <img src={phone} alt="error"/>
    </div>
    <div class="content">
            <div class="upper">Available @ </div>
            <div class="lower">444.332.1167  </div>
    </div>
</div>
</nav>
  )
}
