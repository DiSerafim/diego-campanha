// frontend/src/pages/Sobre.jsx

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import fotoCandidato from "../assets/images/urna.png";
import foto1 from "../assets/images/20210326_152109.jpg";
import foto2 from "../assets/images/20210524_145020.jpg";
import foto3 from "../assets/images/20260527091702.jpeg";
import foto4 from "../assets/images/IMG_20171222_102127.jpg";
import foto5 from "../assets/images/IMG_20180111_082758.jpg";

import "./Sobre.css";

const Sobre = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [indiceAtual, setIndiceAtual] = useState(0);

  // Trajetória – descrição
  const trajetoria = [
    {
      ano: "2004–2022",
      descricao:
        "Camelô no centro comercial de Belém, dos 18 anos até o primeiro emprego CLT em 2022 (devido à pandemia).",
    },
    {
      ano: "2020–2021",
      descricao: "Técnico em Desenvolvimento Web pela Trybe (Full Stack).",
    },
    {
      ano: "2022–2023",
      descricao: "Web Designer e Analista de Tráfego em empresas de consórcio.",
    },
    {
      ano: "2023–2024",
      descricao:
        "Marketing digital autônomo para 'W B C BARBOSA' e 'Meu Consórcio'.",
    },
    {
      ano: "2024–Atual",
      descricao: "Motoboy, motorista de app (99/Uber) e comerciante em Belém.",
    },
  ];

  // Fotos para o carrossel
  const fotosCarrossel = [
    { img: foto1, legenda: "2004-2022: Camelô no centro de Belém" },
    { img: foto2, legenda: "2020-2021: Técnico em Desenvolvimento Web" },
    { img: foto3, legenda: "2022-2023: Web Designer e Analista de Tráfego" },
    { img: foto4, legenda: "2023-2024: Marketing Digital Autônomo" },
    { img: foto5, legenda: "2024-Atual: Motoboy e Motorista de App" },
  ];

  // EFEITO PARA PASSAR AS FOTOS AUTOMATICAMENTE A CADA 4 SEGUNDOS
  useEffect(() => {
    const timer = setInterval(() => {
      setIndiceAtual((prev) => (prev + 1) % fotosCarrossel.length);
    }, 1000); // Troque o 4000 por 3000 se quiser que passe mais rápido (3 segundos)

    // Limpa o timer quando o componente for desmontado
    return () => clearInterval(timer);
  }, [fotosCarrossel.length]);

  return (
    <>
      <Helmet>
        <title>Sobre | Diego Serafim - Deputado Estadual</title>
        <meta
          name="description"
          content="Conheça a história, trajetória e compromissos de Diego Serafim, candidato a Deputado Estadual pelo PDT/PA."
        />
      </Helmet>

      <div className="page-sobre">
        <div className="container">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">Sobre Diego Serafim</h1>

            {/* Grid: Foto + Texto */}
            <div className="sobre-grid">
              <div className="sobre-foto">
                <div className="foto-wrapper">
                  <img
                    src={fotoCandidato}
                    alt="Diego Serafim"
                    className="sobre-foto-img"
                  />
                  {/* BADGE NA DIVISA INFERIOR – METADE DENTRO, METADE FORA */}
                  <div className="foto-badge">
                    <span className="foto-badge-cargo">Deputado Estadual</span>
                    <span className="foto-badge-number">12 223</span>
                  </div>
                </div>
              </div>

              <div className="sobre-texto">
                <p>
                  Sou <strong>Diego Serafim</strong>, candidato a Deputado
                  Estadual pelo PDT/PA, número <strong>12.223</strong>.
                </p>
                <p>
                  Sou paraense, filho desta terra que me ensinou o valor do
                  trabalho, da honestidade e do respeito ao próximo.
                </p>
                <p>
                  Acredito que a política pode (e deve) ser feita de forma
                  diferente: com transparência, tecnologia e coragem para
                  enfrentar os problemas de frente.
                </p>
                <p>
                  Meu compromisso é construir, junto com você, um Pará mais
                  desenvolvido e justo, ouvindo suas ideias e lutando por seus
                  direitos.
                </p>
                <blockquote className="sobre-citacao">
                  "O Pará pode mais. E vai. Com tecnologia, transparência e
                  coragem."
                </blockquote>
              </div>
            </div>

            {/* TRAJETÓRIA COM ANOS EM DESTAQUE */}
            <div className="sobre-trajetoria">
              <h3>Minha Trajetória</h3>
              <div className="trajetoria-grid">
                {trajetoria.map((item, index) => (
                  <motion.div
                    key={index}
                    className="trajetoria-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <span className="trajetoria-card-ano">{item.ano}</span>
                    <p className="trajetoria-card-descricao">
                      {item.descricao}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CARROSSEL COVERFLOW COM DESFOQUE NAS LATERAIS */}
            <div className="carrossel-container">
              <h3>Galeria de Fotos</h3>
              <div className="carrossel-coverflow">
                {fotosCarrossel.map((foto, index) => {
                  // Calcula a distância relativa ao índice atual
                  let offset = index - indiceAtual;

                  // Ajusta para o efeito circular (se passar do fim, volta para o início)
                  if (offset > fotosCarrossel.length / 2)
                    offset -= fotosCarrossel.length;
                  if (offset < -fotosCarrossel.length / 2)
                    offset += fotosCarrossel.length;

                  // Define classes baseadas no offset
                  const isCenter = offset === 0;
                  const isLeft = offset < 0;
                  const isRight = offset > 0;
                  // Aplica blur apenas se não for o centro
                  const blurClass = isCenter ? "" : "coverflow-blur";

                  return (
                    <div
                      key={index}
                      className={`coverflow-item ${blurClass} ${
                        isCenter
                          ? "coverflow-center"
                          : isLeft
                          ? "coverflow-left"
                          : "coverflow-right"
                      }`}
                      style={{ "--offset": offset }}
                      onClick={() => setIndiceAtual(index)}
                    >
                      <img
                        src={foto.img}
                        alt={foto.legenda}
                        className="coverflow-img"
                      />
                      <span className="coverflow-legenda">
                        {isCenter ? foto.legenda : ""}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Controles (opcionais)  */}
              <div className="carrossel-controles">
                <button
                  onClick={() =>
                    setIndiceAtual(
                      (indiceAtual - 1 + fotosCarrossel.length) %
                        fotosCarrossel.length
                    )
                  }
                >
                  Anterior
                </button>
                <button
                  onClick={() =>
                    setIndiceAtual((indiceAtual + 1) % fotosCarrossel.length)
                  }
                >
                  Próximo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Sobre;
