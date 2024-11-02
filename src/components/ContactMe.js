import React, { useState } from 'react';


function ContactMe() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your submission! We will contact you soon.');
        setFormData({
            name: '',
            email: '',
            phone: ''
        });       
        setIsOpen(false);
    };

    return (
        <div className={`contact-me-container ${isOpen ? 'open' : ''}`}>
            <button className="contact-me-button" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'X' : 'Contact us'}
            </button>
            {isOpen && (
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h3>Information:</h3>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
}

export default ContactMe;