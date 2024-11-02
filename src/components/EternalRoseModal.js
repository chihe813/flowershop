import React from 'react';


const EternalRoseModal = ({ isOpen, onClose, eternalRose }) => {
    if (!isOpen) return null; 

    return (
        <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white',}}>Thanks for purchasing {eternalRose.name} </h2>
            <div className="image-gallery">
                {eternalRose.image && eternalRose.image.length > 0 ? (
                    eternalRose.image.map((image, index) => (
                        <img key={index} src={image} alt={eternalRose.name} className="eternalRose-image" />
                    ))
                ) : (
                    <p>No images available</p>
                )}
            </div>
            
            <button className="close-button" onClick={onClose}>Close</button>
        </div>
    </div>
);
};

export default EternalRoseModal;
