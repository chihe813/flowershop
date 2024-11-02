import React, { useState } from 'react';
import Modal from './FlowerModal';

const FlowerCard = ({ flower }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(flower.image[0]);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleMouseEnter = () => {
        if (flower.image.length > 1) {
            setCurrentImage(flower.image[1]);
        }
    };

    const handleMouseLeave = () => {
        setCurrentImage(flower.image[0]);
    };

    return (
        <div className="flower-card">
            <img 
                src={currentImage} 
                alt={flower.name} 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
            />
            <p className='name'>{flower.name}</p>
            <p className='description'>{flower.description}</p>
            <p className="price">${flower.price}</p>
            <button className="order-button" onClick={openModal}>Order</button>
            <Modal isOpen={isOpen} onClose={closeModal} flower={flower} />
        </div>
    );
};

export default FlowerCard;