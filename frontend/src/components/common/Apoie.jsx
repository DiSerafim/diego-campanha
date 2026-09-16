// frontend/src/components/common/Apoie.jsx

import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "./Apoie.css";

const Apoie = () => {
  return (
    <Link
      to="/participe"
      className="apoio-float"
      aria-label="Apoie a campanha"
    >
      <div className="apoio-container">
        {/* Texto acima: APOIE! */}
        <span className="apoio-text-top">APOIE!</span>

        {/* Botão com ícone e texto AQUI */}
        <div className="apoio-button-wrapper">
          <span className="apoio-button">
            <FaHeart className="apoio-icon" />
            <span className="apoio-button-text">AQUI</span>
          </span>
        </div>

        {/* Texto abaixo: É GRÁTIS */}
        <span className="apoio-text-bottom">É GRÁTIS</span>
      </div>
    </Link>
  );
};

export default Apoie;