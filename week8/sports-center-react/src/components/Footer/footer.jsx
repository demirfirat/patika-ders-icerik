import "./footer.css";

const Footer = () => {

    return (
        <footer id="footer">
        <div className="footer container content">
            <img src="photos/logo.png" alt="Logo" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit autem est repellendus quaerat, quae ab obcaecati numquam ipsa hic ad magnam officiis at rerum qui tempora expedita cum optio repellat, minima ratione nihil? Tempore, obcaecati!</p>
        </div>
        <div className="links container content">
            <div className="information">
                <h3>Information</h3>
                <a href="#">About Us</a>
                <a href="#">Classes</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </div>
            <div className="helpful">
                <h3>Helpful Links</h3>
                <a href="#">Services</a>
                <a href="#">Supports</a>
                <a href="#">Terms & Condition</a>
                <a href="#">Privacy Policy</a>
            </div>
        </div>
      </footer>
    );
}

export default Footer;