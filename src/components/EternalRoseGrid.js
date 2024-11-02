import React from 'react';
import EternalRoseCard from './EternalRoseCard';
import EternalRose1 from '../images/EternalRose1.JPG';
import EternalRose2 from '../images/EternalRose2.JPG';
import EternalRose3 from '../images/EternalRose3.JPG';
import EternalRose4 from '../images/EternalRose4.JPG';




const eternalRoses = [
    {
        name: 'Eternal Roses1',
        description: 'Orange eternal roses to spark enduring passion and energy',
        price: 29.99,
        image: [EternalRose1],
    },
    {
        name: 'Eternal Roses2',
        description: 'Yellow eternal roses to bring unending joy and friendship',
        price: 24.99,
        image: [EternalRose2],
    },
    {
        name: 'Eternal Roses3',
        description: 'Pink eternal roses to symbolize everlasting love',
        price: 22.99,
        image: [EternalRose3],
    },
    {
        name: 'Eternal Roses4',
        description: 'Blue eternal roses to evoke serene and timeless beauty',
        price: 29.99,
        image: [EternalRose4],
    },
    
];

const EternalRoseGrid = () => {
    return (
        <div>
        <h2 id='EternalRose' className='eternalRose-grid-title'>Eternal Roses</h2>
        <div className=" eternalRose-grid">
            
            {eternalRoses.map((eternalRose, index) => (
                <EternalRoseCard key={index} eternalRose={eternalRose} />
            ))}
        </div>
        </div>  
    );
};

export default EternalRoseGrid;