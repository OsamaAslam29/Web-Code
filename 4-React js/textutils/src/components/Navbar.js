import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/textutils">TextUtils</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
       <div className={`htmlform-check htmlform-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="htmlform-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="htmlform-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
    </div>
  </nav>
  )
}


// Navbar.propTypes = {
//    title: PropTypes.string.isRequired,
//    feature: PropTypes.string.isRequired 
// }



// Navbar.defaultProps = {
//   title: 'set title here',
//   feature:'feature text'
//  }