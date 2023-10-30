import React, { useState } from 'react';
import './GetInTouch.css';
import { MdLocationOn, MdPhone } from 'react-icons/md';
import { IoMdMail } from 'react-icons/io';
const GetInTouch = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!formData.name || formData.name.trim() === '') {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
            isValid = false;
        }

        if (!formData.message || formData.message.trim() === '') {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(newErrors);

        return isValid;
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch('/send', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                console.log(response);

                if (response.ok) {
                    console.log('Email sent successfully');
                } else {
                    console.log('Error sending email');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            console.log('Form has errors');
        }
    };

    return (
        <div className='touch__container'>
            <div className="touch__left">
                <h1>Get in touch</h1>
                <p><span>Contact with our team</span> to talk about how we can help your business process at scale, or sign up for more info</p>

                <div className="touch__box">
                    <MdLocationOn className='touch__icon' />
                    <span>1-4929, Lane No. 6, Balbirnagar Ext., Shahdara, Delhi 116 82</span>
                </div>
                <div className="touch__box">
                    <MdPhone className='touch__icon' />
                    <span>+91-8888888888</span>
                </div>
                <div className="touch__box">
                    <IoMdMail className='touch__icon' />
                    <span>info@unyn.com</span>
                </div>
            </div>

            <div className="touch__right">
                <h1>Say something</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name..."
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.name && <p className="error">{errors.name}</p>}

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Mail..."
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.email && <p className="error">{errors.email}</p>}

                    <textarea
                        name="message"
                        cols="30"
                        rows="10"
                        placeholder="Message..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.message && <p className="error">{errors.message}</p>}

                    <button type="submit" className='btn'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default GetInTouch;
