import React, { useState } from 'react';
import user1 from '../images/user1.JPG';

const comments = [
    {
        id: 1,
        name: 'Alice Johnson',
        date: '2024-10-29',
        text: 'This is a great product! Highly recommend it.',
        profilePicture: user1, 
        rating: 5,
    },
    {
        id: 2,
        name: 'Bob Smith',
        date: '2024-10-25',
        text: 'I loved using this! Will buy again.',
        profilePicture: user1,
        rating: 4,
    },
    {
        id: 3,
        name: 'Charlie Brown',
        date: '2024-10-22',
        text: 'Not what I expected, but still decent.',
        profilePicture: user1, 
        rating: 5,
    },
    {
        id: 4,
        name: 'Diana Prince',
        date: '2024-10-17',
        text: 'Absolutely fantastic! Exceeded my expectations.',
        profilePicture: user1,
        rating: 5,
    },
    {
        id: 5,
        name: 'Ethan Hunt',
        date: '2024-10-15',
        text: 'Good product, but it could use some improvements.',
        profilePicture: user1,
        rating: 5,
    },
    {
        id: 6,
        name: 'Fiona Gallagher',
        date: '2024-10-14',
        text: 'It was okay, nothing special. Wouldn’t buy again.',
        profilePicture: user1,
        rating: 5,
    },
    {
        id: 7,
        name: 'George Smith',
        date: '2024-10-14',
        text: 'I had a great experience with this product. Highly recommend!',
        profilePicture: user1,
        rating: 5,
    },
    {
        id: 8,
        name: 'Hannah Baker',
        date: '2024-10-12',
        text: 'Not worth the price. I expected better quality.',
        profilePicture: user1,
        rating: 4,
    }
];

const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <span key={i} className={i < rating ? 'star filled' : 'star empty'}>
                ★
            </span>
        );
    }
    return stars;
};




const Testimonials = () => {
const [visibleCount, setVisibleCount] = useState(3);

    const loadMoreComments = () => {
        setVisibleCount((prevCount) => prevCount + 3);
    };
    return (
        <div>
        
           <h2 id='testimonials' className='TestimonialsTitle'>Comments ({comments.length})</h2> 
        
        <div className="comment-section">
            
            {comments.slice(0, visibleCount).map((comment) => (
                <div key={comment.id} className="comment">
                    <img
                        src={comment.profilePicture}
                        alt={`${comment.name}'s profile`}
                        className="profile-picture"
                    />
                    <div className="comment-details">
                    <div className="user-info">
                            <h4>{comment.name}</h4>
                            <div className="stars">{renderStars(comment.rating)}</div>
                        </div>
                        <p>{comment.date}</p>
                        <p>{comment.text}</p>
                        
                    </div>
                </div>
            ))}
            {visibleCount < comments.length && (
                <button onClick={loadMoreComments} className="load-more-button">
                    Load More...
                </button>
            )}
        </div>
        </div>
    );
};

export default Testimonials;