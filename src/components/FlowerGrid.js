import React from 'react';
import FlowerCard from './FlowerCard';
import flowercard1 from '../images/FlowerCard1.JPG';
import flowercard2 from '../images/FlowerCard2.JPG';
import flowercard3 from '../images/FlowerCard3.JPG';
import flowercard4 from '../images/FlowerCard4.JPG';
import flowercard5 from '../images/FlowerCard5.JPG';
import flowercard6 from '../images/FlowerCard6.JPG';
import flowercard7 from '../images/FlowerCard7.JPG';
import flowercard8 from '../images/FlowerCard8.JPG';
import flowercard9 from '../images/FlowerCard9.JPG';
import flowercard10 from '../images/FlowerCard10.JPG';
import flowercard11 from '../images/FlowerCard11.JPG';
import flowercard12 from '../images/FlowerCard12.JPG';
import flowercard13 from '../images/FlowerCard13.JPG';
import flowercard14 from '../images/FlowerCard14.JPG';



const flowers = [
    {
        name: 'Mix1',
        description: 'A colorful tulip to add cheer',
        price: 19.99,
        image: [flowercard1,flowercard2],
    },
    {
        name: 'Mix2',
        description: 'A bold hibiscus to evoke warmth',
        price: 14.99,
        image: [flowercard3],
    },
    {
        name: 'Mix3',
        description: 'A radiant daisy to lift spirits',
        price: 12.99,
        image: [flowercard4],
    },
    {
        name: 'Mix4',
        description: 'A tender mix to calm the mind',
        price: 12.99,
        image: [flowercard5,flowercard6],
    },
    {
        name: 'Mix5',
        description: 'A delicate rose to express love',
        price: 12.99,
        image: [flowercard7,flowercard8],
    },
    {
        name: 'Mix6',
        description: 'Mixed with colorful flower bouquet',
        price: 12.99,
        image: [flowercard9,flowercard10],
    },
    {
        name: 'Mix7',
        description: 'A bold mix to express yourself',
        price: 12.99,
        image: [flowercard11,flowercard12],
    },
    {
        name: 'Mix8',
        description: 'A bright bouquet of flowers',
        price: 12.99,
        image: [flowercard13,flowercard14],
    },

];

const FlowerGrid = () => {
    return (
        <div>
        <h2 id='Flowers' className='flower-grid-title'>Bouquets of flowers</h2>
        <div className=" flower-grid">
            
            {flowers.map((flower, index) => (
                <FlowerCard key={index} flower={flower} />
            ))}
        </div>
        </div>  
    );
};

export default FlowerGrid;