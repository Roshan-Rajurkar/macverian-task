import React from 'react'
import './Subscribe.css'
const Subscribe = () => {
    return (
        <div className='subscribe__container'>
            <div className="subscribe__left">
                <h1>Stay Updated with UNYN Newsletter</h1>
                <p>Gets the latest updates, news and exciting opportunities for UNYN.</p>

                <div className="subscribe__signup">
                    <input type="email" name="" id="" placeholder='Enter your email' />
                    <button className='sign-btn'>Sign up</button>
                </div>
                <span>
                    By signing up, you agree to our Term and Conditions</span>
            </div>
            <div className="subscribe__right">
                <img src="https://img.freepik.com/free-photo/young-friends-park_53876-46877.jpg?size=626&ext=jpg&ga=GA1.1.2050246127.1696511855&semt=sph" alt="" />
            </div>
        </div>
    )
}

export default Subscribe