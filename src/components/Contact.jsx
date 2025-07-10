export default function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-heading-border"></div>

            <div className="contact-content">
                <div className="contact-details">
                    <p className="contact-title">Contact Info</p>
                    <p className="contact-subtext">Contact us and we'll get back to you within 24 hours.</p>
                    <p><i className='bx bx-location-alt-2'></i> Chennai, Tamil Nadu, India</p>
                    <p><i className='bx bx-envelope'></i> admin@tasrnd.in, sales@tasrnd.in</p>
                    <p><i className='bx bx-phone'></i> +91 8939319191</p>
                    <p className="contact-footer">© 2025 TASR&D</p>
                </div>

                <div className="contact-form">
                    <form>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <input type="text" placeholder="Subject" required />
                        <textarea placeholder="Your Message" rows="6" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
