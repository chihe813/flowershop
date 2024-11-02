import React, { useState } from 'react';
import Modal from './EternalRoseModal';

const EternalRoseCard = ({ eternalRose }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(eternalRose.image[0]); 

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleMouseEnter = () => {
        if (eternalRose.image.length > 1) {
            setCurrentImage(eternalRose.image[1]);
        }
    };

    const handleMouseLeave = () => {
        setCurrentImage(eternalRose.image[0]);
    };

    return (
        <div className="eternalRose-card">
            <img 
                src={currentImage} 
                alt={eternalRose.name} 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
            />
            <p className='name'>{eternalRose.name}</p>
            <p className='description'>{eternalRose.description}</p>
            <p className="price">${eternalRose.price}</p>
            <button className="order-button" onClick={openModal}>Order</button>
            <Modal isOpen={isOpen} onClose={closeModal} eternalRose={eternalRose} />
        </div>
    );
};

export default EternalRoseCard;