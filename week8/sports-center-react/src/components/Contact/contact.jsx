import "./contact.css";

const Contact = () => {

    return (
        <section id="contact">
        <div className="container content">
            <h2>CONTACT US</h2>
            <p className="class-5p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, explicabo.</p>
        <div className="contact">
            <div className="contact-info">
                <div className="contact-types">
                    <div className="mobile-no">
                        <h4>Mobile Number</h4>
                        <p>+135 773 321 4444</p>
                    </div>
                    <div className="email-adress">
                        <h4>Email Adress</h4>
                        <p>demo@demo.com</p>
                    </div>
                </div>
                <h3>Make An Appointment</h3>
                <input type="text" id="name" placeholder="Your Name" />
                <input type="text" id="email" placeholder="Your Email" />
                <textarea name="message" id="message" placeholder="Your Message" rows="5"></textarea>
            </div>
            <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58702.02288855673!2d-74.54726527321102!3d39.352952006145046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0c2d67d7f1a7b%3A0x617b4e170c6d5854!2sVentnor%20City%2C%20New%20Jersey%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1727938988159!5m2!1str!2str" allowfullscreen="" loading="lazy" className="map"></iframe>
            </div>
        </div>
        </div>
      </section>
    );
    
}

export default Contact;