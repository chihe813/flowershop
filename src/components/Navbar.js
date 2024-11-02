import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbarstyle fixed-top nav-theme">
            <div className="container-fluid">
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item nav-button">
                            <a className="nav-link" href="#hero">Home</a>
                        </li>
                        <li className="nav-item nav-button">
                            <a className="nav-link" href="#Flowers">Bouquets of flowers</a>
                        </li>
                        <li className="nav-item nav-button">
                            <a className="nav-link" href="#EternalRose">Eternal Roses</a>
                        </li>
                        <li className="nav-item nav-button">
                            <a className="nav-link" href="#testimonials">Testimonials</a>
                        </li>
                        <li className="nav-item nav-button">
                            <a className="nav-link" href="#footer">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;