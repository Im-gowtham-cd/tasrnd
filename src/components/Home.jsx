import { useState, useEffect } from 'react';
import {
    FaFacebookF, FaTwitter, FaGooglePlusG, FaPinterestP, FaInstagram, FaRss,
    FaEnvelope, FaPhoneAlt, FaTools, FaNetworkWired, FaCogs, FaFlask
} from 'react-icons/fa';

const messages = [
    "Welcome to TAS Research & Developers",
    "A team of Terminal Automation Experts",
    "Industrial Equipments Supplier"
];

export default function Home() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-container">
            <h1 className="home-heading">TAS R&D</h1>

            <div className="home-content">
                <h1 className="carousel-title">{messages[index]}</h1>
                <p className="intro-text">
                    TAS Research & Developers is a leading solution provider in Terminal Automation,
                    Industrial Instrumentation, and Embedded Solutions. We are committed to delivering
                    high-performance hardware and software systems tailored to modern industry needs.
                </p>
                <a href="#portfolio">
                    <button className="product-button">Our Products</button>
                </a>
            </div>

            <div className="features">
                <h2>What We Offer</h2>
                <div className="feature-grid">
                    <div className="feature-card">
                        <FaTools className="feature-icon" />
                        <h3>Terminal Automation</h3>
                        <p>Seamless automation of fuel terminals, control systems & workflows.</p>
                    </div>
                    <div className="feature-card">
                        <FaNetworkWired className="feature-icon" />
                        <h3>Industrial IoT</h3>
                        <p>Smart connectivity for industrial sensors and controllers.</p>
                    </div>
                    <div className="feature-card">
                        <FaCogs className="feature-icon" />
                        <h3>Embedded Systems</h3>
                        <p>Custom firmware and board-level solutions for industrial use cases.</p>
                    </div>
                    <div className="feature-card">
                        <FaFlask className="feature-icon" />
                        <h3>R&D & Testing</h3>
                        <p>In-house product research, development, and quality testing.</p>
                    </div>
                </div>
            </div>

            <div className="contact-info">
                <p><FaPhoneAlt className="icon" /> +91 8939319191</p>
                <p><FaEnvelope className="icon" /> admin@tasrnd.in, sales@tasrnd.in</p>
            </div>

            <div className="social-media">
                <p>Follow Us</p>
                <div className="icons">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaGooglePlusG />
                    <FaPinterestP />
                    <FaInstagram />
                    <FaRss />
                </div>
            </div>
        </div>
    );
}
