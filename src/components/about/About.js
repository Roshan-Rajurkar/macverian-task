import React from 'react'
import './About.css'
const About = () => {
    return (
        <div className='about__container'>
            <div className="about__top">
                <div className="about__top__left">
                    <p>Empowering Youth for a Brighter Future: <span> UNYN's Impact on Youth Individuals</span></p>
                </div>
                <div className="about__top__right">
                    <p>United Youth Network (UNYN) is dedicated to empowering young Individuals by providing them with opportunities for growth and development. Through our international student society, we aim to nurture their talents and unlock their full potential. By investing in the youth today, we believe that we can create o brighter and more promising future for tomorrow.</p>
                </div>
            </div>
            <div className="about__bottom">
                <img src="https://img.freepik.com/free-photo/happy-student-with-note-books-backpack-smiling-while-standing_8353-6388.jpg?w=826&t=st=1698581238~exp=1698581838~hmac=247c07595b2c15d30e3a587a6e3baf2fb31b2f272419176663a2c5a4c316559b" alt="" />
            </div>
        </div>
    )
}

export default About