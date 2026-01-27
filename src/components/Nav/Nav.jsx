import React from 'react'
import './nav.scss'
import DateTime from './DateTime'

const Nav = () => {
  return (
    <nav>
      <div className="left">
        <div className="apple-icon">
          <img src="/nav-icons/apple.svg" alt="" />
        </div>
        <div className="nav-item">
          <p>Ameen Shariff</p>
        </div>
        <div className="nac_item">
          <p>File</p>
        </div>
        <div className="nac_item">
          <p>Window</p>
        </div>
        <div className="nac_item">
          <p>Terminal</p>
        </div>
      </div>
      <div className="right">
      <div className="apple-icon">
          <img src="/nav-icons/wifi.svg" alt="" />
        </div>
                  <DateTime/>


      </div>
    </nav>
  )
}

export default Nav
