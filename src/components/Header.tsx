import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/Logo/DR.png";
import "../styles/Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={isScrolled ? "scrolled" : ""}>
        <div className="header-content">
          <Link to="/" className="logo">
            <img src={Logo} />
          </Link>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          {isMobileMenuOpen && (
            <nav className="mobile-menu">
              <button
                className="mobile-menu-close"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/spirits" onClick={() => setIsMobileMenuOpen(false)}>
                Spirits
              </Link>
              <Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </nav>
          )}
          <nav className="desktop-menu">
            <Link to="/spirits">Spirits</Link>

            <Link to="/about-us">About Us</Link>
          </nav>

          <div className="header-right">
            <Link to="/contact-us" className="outline-button">
              Contact Us
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
