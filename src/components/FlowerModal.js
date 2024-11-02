import React from 'react';


const FlowerModal = ({ isOpen, onClose, flower }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2 style={{color: 'white',}}>Thanks for purchasing {flower.name} !!</h2>
                <div className="image-gallery">
                    {flower.image && flower.image.length > 0 ? (
                        flower.image.map((image, index) => (
                            <img key={index} src={image} alt={flower.name} className="flower-image" />
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

export default FlowerModal;

