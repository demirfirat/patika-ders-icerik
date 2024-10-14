import { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
    const [activeSection, setActiveSection] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
  
    // Scroll kontrol fonksiyonu
    const checkScroll = () => {
      const header = document.getElementById('header');
      
      if (window.innerWidth > 280) {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };
  
    // Bölüm kontrol fonksiyonu
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
        }
      });
  
      setActiveSection(currentSection);
    };
  
    // useEffect ile component mount/unmount işlemleri
    useEffect(() => {
      window.addEventListener('scroll', checkScroll);
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', checkScroll);
      
      // Component unmount olduğunda event listener'ları kaldır
      return () => {
        window.removeEventListener('scroll', checkScroll);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }, []);
  
    return (
      <header id="header" className={`navbar fixed-top ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container content">
          <div className="logo">
            <img src="photos/logo.png" alt="Logo" />
          </div>
          <nav id="navbar" className="navbar navbar-expand-lg">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-nav"
              aria-controls="navbar-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar-nav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#hero" className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#classes" className={`nav-link ${activeSection === 'classes' ? 'active' : ''}`}>
                    Classes
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#trainer" className={`nav-link ${activeSection === 'trainer' ? 'active' : ''}`}>
                    Trainer
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#review" className={`nav-link ${activeSection === 'review' ? 'active' : ''}`}>
                    Review
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>
                    Contact
                  </a>
                </li>
                <button className="btn" id="join-btn" type="button">
                  Join Us
                </button>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;