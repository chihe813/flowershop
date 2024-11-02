import React, { useEffect, useState} from 'react';
import flower1 from '../images/flower001.jpg';
import flower2 from '../images/flower002.jpg';
import flower3 from '../images/flower003.jpg';
import flower4 from '../images/flower004.jpg';
import flower5 from '../images/flower005.jpg';


const flowers = [flower1, flower2, flower3, flower4, flower5];


function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % flowers.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id='hero'
            className="slideshow"
            style={{
                backgroundImage: `url(${flowers[currentIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '45vh',
                transition: 'background-image 1s ease-in-out',    
            }}
        >
            <h1>Welcome to Our Flower Shop</h1>
            
            <p style={{backgroundColor: 'yellow',
                 background: 'linear-gradient(to right, rgba(255, 255, 0, 1), rgba(255, 255, 255, 0.5))',
                 borderRadius:'5px',
                 paddingLeft:'5px',
                 paddingRight:'5px',
            }}> Excellent rate 4.8/5.0! </p>
            <p>Order flower delivery or pickup on the same day!</p>
            </div>
            
        
    );
}

export default Hero;