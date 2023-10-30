import React from 'react'
import '../subscribe/Subscribe.css'
import './Footer.css'
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import Copyright from '../copyright/Copyright'
const Footer = () => {
    return (
        <div className='footer__container'>
            <div className='top__footer'>
                <div className="footer__left">
                    <h1>UNYN</h1>
                    <p>Stay up to date on the latest features and releases by joining our newslatter.</p>

                    <div className="footer__signup">
                        <input type="email" name="" id="" placeholder='Enter your email' />
                        <button className='footer-btn'>Subscribe</button>
                    </div>
                    <span>
                        By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.                    </span>
                </div>

                <div className="footer__links footer__vertex">
                    <h3>Quick Links</h3>
                    <a href="">Home</a>
                    <a href="">About us</a>
                    <a href="">Services</a>
                    <a href="">Events</a>
                </div>

                <div className='footer__updates footer__vertex'>
                    <h3>Updates</h3>
                    <a href="">News</a>
                    <a href="">Blogs</a>
                    <a href="">FAQ's</a>
                    <a href="">Contact Us</a>
                </div>

                <div className='footer__follow footer__vertex'>
                    <h3>Follow Us</h3>

                    <div className="social__box">
                        <AiFillTwitterCircle className='social__icon' />
                        <a href="">Twitter</a>
                    </div>
                    <div className="social__box">
                        <BsFacebook className='social__icon' />
                        <a href="">Facebook</a>
                    </div>
                    <div className="social__box">
                        <AiFillInstagram className='social__icon' />
                        <a href="">Instagram</a>
                    </div>
                </div>
            </div>
            <Copyright />
        </div>
    )
}

export default Footer