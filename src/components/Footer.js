import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
    return (
        <footer id="footer" className="footer-section">
            <div className="footer-content">
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/kennylee813" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin " aria-hidden="true"> KENNY</i>
                    </a>
                    <span className="phone-icon" style={{ marginLeft: '20px' }}>
                        <i className="fas fa-phone" aria-hidden="true"> +48 735-096-521</i>
                    </span>
                </div>
                <p className="shop-name">© 2024 Kenny's Flower Shop</p>
            </div>
        </footer>
    );
}

export default Footer;