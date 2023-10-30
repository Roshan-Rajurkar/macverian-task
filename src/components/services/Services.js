import React from 'react'
import '../home/Home.css'
import './Services.css'
import EventCards from '../cards/EventCards';
import { BiChevronRight } from 'react-icons/bi'
const Services = () => {
    return (
        <div className='services__container'>
            <div className="services__container__top">
                <h5>Empower</h5>
                <h1>Unlock Your Potential With UNYN</h1>
                <p>At UNY, we offer a range of impactful programs and events designed to empower young individuals. From mentorship programs to networking events and international collaborations, we provide the resources and support needed to help you thrive.</p>
            </div>
            <div className="services__container__bottom">
                <EventCards />
            </div>

            <div className='home__left__joins join__service'>
                <button className="btn join-btn">Join</button>
                <a href=""><span>Learn More</span> <BiChevronRight /></a>
            </div>
        </div>
    )
}

export default Services;