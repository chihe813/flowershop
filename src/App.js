import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlowerGrid from './components/FlowerGrid'; 
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import EternalRoseGrid from './components/EternalRoseGrid';
import ContactMe from './components/ContactMe';

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <FlowerGrid />
            <EternalRoseGrid />
            <Testimonials />
            <ContactMe />
            <Footer />
        </div>
    );
}

export default App;