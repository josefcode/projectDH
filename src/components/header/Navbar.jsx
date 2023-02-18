import React from 'react'
import { SearchBox } from '../search-box/SearchBox'
import './styles.css'

export default function navbar() {
  return (

<header className='navbar-header'>
    <nav className = "navbar">
      <div>
      <img className = "navbar-logo" src ="https://img.icons8.com/external-wanicon-lineal-color-wanicon/512/external-travel-summertime-wanicon-lineal-color-wanicon.png" alt ="travelLogos"/>
      </div>
      <div className='navbar-btn'>
        <button className='login-btn'>Login</button>
        <button className='login-btn'>login up</button>
      </div>
    </nav>
    <SearchBox />
    </header>
  )
}
