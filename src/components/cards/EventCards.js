import React from 'react';
import '../services/Services.css';
import Mentor from '../../images/mentoring.png'
import Network from '../../images/collaboration.png'
import Collaborate from '../../images/networking.png'

const cards = [
    {
        logo: Mentor,
        title: 'Mentorship Programs',
        description: 'Connect with experienced mentors who will guide you towards success.',
    },
    {
        logo: Network,
        title: 'Networking Events',
        description: 'Expand your network and forge valuable connections with like-minded individual.',
    },
    {
        logo: Collaborate,
        title: 'International Collaborations',
        description: 'Gain global exposure and collaborate with students from different ocuntries.',
    },
];

const EventCards = () => {
    return (
        <div className="cards">
            {cards.map((card, index) => (
                <div className="card-container" key={index}>
                    <img src={card.logo} className="card-image" alt="Card logo" />
                    <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-description">{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventCards;
