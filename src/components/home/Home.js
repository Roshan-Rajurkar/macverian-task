import React, { useState } from 'react';
import './Home.css';
import { BiChevronRight } from 'react-icons/bi';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const Home = () => {
    const images = [
        "https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg?w=826&t=st=1698579339~exp=1698579939~hmac=01bcd0a18504e6291bd5a1a36dfb22a6682ab531b4cb4ff3656c75cf71d58e27",
        "https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?w=826&t=st=1698579308~exp=1698579908~hmac=258ae1956b088b22a1a67d69cead06d478268c1c9f1dcba2173783f4b5ca16e9",
        "https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?w=1060&t=st=1698579389~exp=1698579989~hmac=a167a265ba52b683ee9c6df862e339bfda5cb9306e0763e5c5f8750924325997"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const showPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const showNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='home__container'>
            <div className="home__left">
                <h1 className='home__left__heading'>
                    Empowering Youth for a Brighter Future
                </h1>
                <p className='home__left__para'>
                    United Youth Network (UNYN) is a dynamic and impactful international student society committed to nurturing the talents and potential of young individuals across colleges and universities of different countries. Join us today to be a part of our mission to create a brighter and more promising future.                </p>
                <div className='home__left__joins'>
                    <button className="btn join-btn">Join</button>
                    <a href=""><span>Learn More</span> <BiChevronRight /></a>
                </div>
            </div>

            <div className="home__right">
                <img className='home__image' src={images[currentImageIndex]} alt="photos" />
                <div className='home__right__info'>
                    <div className='right__top__para'>
                        <p className='right__top__heading'>Empower the Youth Today</p>
                        <p className='right__bottom__heading'>Unlock Your Potential and Make a Difference.</p>
                    </div>

                    <div className='right__bottom__para'>
                        <div className='right__bottom__goals'>
                            {images.map((image, index) => (
                                <span
                                    key={index}
                                    className={`span-icon ${index === currentImageIndex ? 'active-image' : ''}`}
                                ></span>
                            ))}
                        </div>

                        <div className='right__buttons'>
                            <button className='arrow-btn' onClick={showPreviousImage}>
                                <BsArrowLeftCircle className='arrow-icons' />
                            </button>
                            <button className='arrow-btn' onClick={showNextImage}>
                                <BsArrowRightCircle className='arrow-icons' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
