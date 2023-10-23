import React from 'react'
import PropTypes from 'prop-types'
import  {useState} from 'react'
import { Link } from 'react-router-dom'



export default function Navbar(props) {
  // var style ={
  //   color:black,
  //   background:White ,
  // }
  return (
  <>
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="#">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">{props.info}</Link>
      </li>
    </ul>
    <div className={`custom-control custom-switch text-${props.mode==='light'?"dark":"light"}`}>
  <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.toggle}/>
  <label className="custom-control-label" htmlFor="customSwitch1">Enable Dark Mode</label>
</div>

  </div>
</nav>
  </>
  )
}
