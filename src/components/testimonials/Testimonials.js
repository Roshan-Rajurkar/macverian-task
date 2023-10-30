import React from 'react';
import './Testmonials.css';
import { IoIosStar } from 'react-icons/io'

const tasty = [
    {
        name: 'John Doe',
        position: "Marketing Manager",
        company: "XYZ",
        img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        rating: 4,
        message: 'UNYN has provided me with incredible opportunities to grow and connect with like-minded individuals.',
    },
    {
        name: 'John Doe',
        position: "Marketing Manager",
        company: "XYZ",
        img: "https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg",
        rating: 4,
        message: 'UNYN has provided me with incredible opportunities to grow and connect with like-minded individuals.',
    },
];

const renderRatingStars = (rating) => {
    const filledStars = Array(rating).fill(<IoIosStar className='star__filled' />);
    const unfilledStars = Array(5 - rating).fill(<IoIosStar className='star__hollow' />);
    return [...filledStars, ...unfilledStars];
};

const Testimonials = () => {
    return (
        <div className='test__container'>
            <h1>Members Testimonials</h1>
            <p>Here what our members have to say about their experience with UNYN</p>

            <div className="test__cards">
                {tasty.map((test, index) => (
                    <div key={index} className="test__card">
                        <div className="test__rating">{renderRatingStars(test.rating)}</div>
                        <p>{test.message}</p>
                        <div className="test__user">
                            <div className="user__image">
                                <img src={test.img} alt="" />
                            </div>
                            <div className="user__data">
                                <span>{test.name}</span>
                                <span className='test__position'>{test.position} {test.company}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
