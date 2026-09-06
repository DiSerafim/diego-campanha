// frontend/src/pages/Propostas.jsx

import React from "react";
import { Helmet } from "react-helmet-async";
import CardEixo from "../components/ui/CardEixo";
import "./Propostas.css";

const eixos = [
  {
    id: "saude",
    icon: "🏥",
    title: "Saúde",
    description:
      "Fim das filas invisíveis e mapeamento de leitos. Lei do WhatsApp para exames e painel público de filas.",
    link: "/propostas/saude",
  },
  {
    id: "obras",
    icon: "🏗️",
    title: "Obras",
    description:
      "Chega de obra eterna! Limite de 3 obras por empresa, educação tecnológica e meritocracia no serviço público.",
    link: "/propostas/obras",
  },
  {
    id: "trabalho",
    icon: "💼",
    title: "Trabalho",
    description:
      "Escola técnica em cada um dos 144 municípios. Qualificação profissional para estudantes.",
    link: "/propostas/trabalho",
  },
  {
    id: "seguranca",
    icon: "🛡️",
    title: "Segurança",
    description:
      "Fundo de Reparação à Vítima: 80% do prejuízo adiantado. O criminoso paga o que deve.",
    link: "/propostas/seguranca",
  },
];

const variantesDeCores = ["verde", "amarelo", "azul", "vermelho"];

const Propostas = () => {
  return (
    <>
      <Helmet>
        <title>Propostas | Diego Serafim - Deputado Estadual</title>
        <meta
          name="description"
          content="Conheça as 4 propostas de Diego Serafim para o Pará: Saúde, Obras, Trabalho e Segurança."
        />
      </Helmet>

      <div className="page-propostas">
        <div className="container">
          <h1 className="page-title">Nossas Propostas</h1>
          <p className="page-subtitle">
            Quatro eixos para transformar o Pará com tecnologia, transparência e
            coragem.
          </p>
          <div className="propostas-grid">
            {/* 2. index para a posição de cada card */}
            {eixos.map((eixo, index) => (
              <CardEixo 
                key={eixo.id} 
                {...eixo} 
                colorVariant={variantesDeCores[index]} // Cor mapeada pelo índice
              />
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Propostas;
