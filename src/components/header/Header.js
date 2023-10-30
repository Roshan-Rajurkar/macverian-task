import React from 'react'
import './Header.css'
import { BiChevronDown } from 'react-icons/bi'
const Header = () => {
    return (
        <div className='nav__container' id='#home'>
            <nav>
                <div>
                    <h1 className='nav__logo'>UNYN</h1>
                </div>
                <div className='nav__links'>
                    <a href="">About us</a>
                    <a href="">Services</a>
                    <a href="">Events</a>
                    <a href="">More  <BiChevronDown /></a>
                </div>
            </nav>
            <div>
                <button className='btn'>Contact us</button>
            </div>
        </div>
    )
}

export default Header