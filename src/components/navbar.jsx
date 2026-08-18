import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [propertiesOpen, setPropertiesOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="Gajalakshmi Real Estate Pvt. Ltd." />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation */}
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>

          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          {/* Properties Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setPropertiesOpen(true)}
            onMouseLeave={() => setPropertiesOpen(false)}
          >
            <button
              className="dropdown-button"
              onClick={() => setPropertiesOpen(!propertiesOpen)}
            >
              Properties
              <FaChevronDown />
            </button>

            {propertiesOpen && (
              <div className="dropdown-menu">
                <Link to="/flats" onClick={() => setMenuOpen(false)}>
                  Flats
                </Link>

                <Link to="/plots" onClick={() => setMenuOpen(false)}>
                  Plots
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/legal-documents"
            onClick={() => setMenuOpen(false)}
          >
            Legal Documents
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;