// frontend/src/components/ui/CardEixo.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./CardEixo.css";

const CardEixo = ({ icon, title, description, link }) => {
  return (
    <div className="card-eixo">
      <div className="card-eixo-icon">{icon}</div>
      <h3 className="card-eixo-title">{title}</h3>
      <p className="card-eixo-description">{description}</p>
      <Link to={link} className="card-eixo-link">
        Saiba mais →
      </Link>
    </div>
  );
};

export default CardEixo;
