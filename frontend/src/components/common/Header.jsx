// frontend/src/components/common/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <Link to="/" className="logo">
          <span className="logo-name">Diego Serafim</span>
          <span className="logo-sub">Deputado Estadual</span>
          <span className="logo-number">12 223</span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`hamburger ${isMenuOpen ? "open" : ""}`} />
        </button>

        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <NavLink to="/" end onClick={() => setIsMenuOpen(false)}>
            Início
          </NavLink>
          <NavLink to="/sobre" onClick={() => setIsMenuOpen(false)}>
            Sobre
          </NavLink>
          <NavLink to="/propostas" onClick={() => setIsMenuOpen(false)}>
            Propostas
          </NavLink>
          <NavLink to="/transparencia" onClick={() => setIsMenuOpen(false)}>
            Transparência
          </NavLink>
          <Link
            to="/participe"
            className="btn-voluntario"
            onClick={() => setIsMenuOpen(false)}
          >
            Participe
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
