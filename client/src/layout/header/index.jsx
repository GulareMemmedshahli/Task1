import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
const Header = () => {
  return (
    <div className='header'>
      <div className='headercolor'>
      <div><img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" /> </div>
        <h2>COURSE</h2>
        <div className='link'>
        <Link to="/">HOME</Link>
        <Link to="/add">ADD CUSTOMER</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/courses">COURSES</Link>
        <Link to="/courses">ELEMENTS</Link>
        <Link to="/news">NEWS</Link>
        <Link to="/contact">Contacts</Link>
        </div>
      </div>
       

        <div className='headertel'>
        <i class="fa-solid fa-phone-volume "></i>
        <p>+43 4566 7788 2457</p>
        </div>

    </div>
  )
}

export default Header