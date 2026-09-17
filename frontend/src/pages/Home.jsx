// frontend/src/pages/Home.jsx

import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaTiktok,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import CardEixo from "../components/ui/CardEixo";
import fotoCandidato from "../assets/images/urna.png";
import "./Home.css";

const eixos = [
  {
    id: "saude",
    icon: "🏥",
    title: "SAÚDE",
    description: "Tecnologia e gestão para uma saúde que funciona para todos.",
    link: "/propostas/saude",
  },
  {
    id: "obras",
    icon: "🏗️",
    title: "OBRAS",
    description:
      "Infraestrutura inteligente para desenvolver todas as regiões do Pará.",
    link: "/propostas/obras",
  },
  {
    id: "trabalho",
    icon: "💼",
    title: "TRABALHO",
    description:
      "Mais oportunidades, apoio ao empreendedor e geração de renda.",
    link: "/propostas/trabalho",
  },
  {
    id: "seguranca",
    icon: "🛡️",
    title: "SEGURANÇA",
    description:
      "Tecnologia e investimento para um Pará mais seguro para todos.",
    link: "/propostas/seguranca",
  },
];

const contatos = [
  {
    id: "whatsapp",
    icon: FaWhatsapp,
    label: "WhatsApp",
    link: "https://wa.me/5591985148873",
    color: "#25D366",
  },
  {
    id: "facebook",
    icon: FaFacebook,
    label: "Facebook",
    link: "https://www.facebook.com/diserafim1",
    color: "#1877F2",
  },
  {
    id: "instagram",
    icon: FaInstagram,
    label: "Instagram",
    link: "https://www.instagram.com/deputado_estadual_12_223/",
    color: "#E4405F",
  },
  {
    id: "email",
    icon: FaEnvelope,
    label: "E-mail",
    link: "mailto:diegoserafim1@gmail.com",
    color: "#EA4335",
  },
  {
    id: "tiktok",
    icon: FaTiktok,
    label: "TikTok",
    link: "https://www.tiktok.com/@porbelem",
    color: "#000000",
  },
  {
    id: "youtube",
    icon: FaYoutube,
    label: "YouTube",
    link: "https://www.youtube.com/@diserafimm",
    color: "#FF0000",
  },
  {
    id: "twitter",
    icon: FaTwitter,
    label: "Twitter/X",
    link: "https://x.com/DiSerafim1",
    color: "#000000",
  },
];

const Home = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [eixosRef, eixosInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const carouselRef = useRef(null);
  const autoScrollInterval = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  // ========== EFEITO DE DIGITAÇÃO (TYPING) ==========
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText1 = "O PARÁ PODE MAIS. ";
  const fullText2 = "E VAI.";
  const fullTitle = fullText1 + fullText2;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullTitle.length) {
        setDisplayedText(fullTitle.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
        setIsTypingComplete(true);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // ========== CARROSSEL ==========
  const scrollToNextItem = () => {
    const container = carouselRef.current;
    if (!container) return;
    const firstItem = container.querySelector(".social-carousel-item");
    if (!firstItem) return;
    const itemWidth = firstItem.offsetWidth + 20;
    const maxScroll = container.scrollWidth - container.clientWidth;
    let nextScroll = container.scrollLeft + itemWidth;
    if (nextScroll >= maxScroll) {
      nextScroll = 0;
    }
    container.scrollTo({ left: nextScroll, behavior: "smooth" });
  };

  const startAutoScroll = () => {
    if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
    autoScrollInterval.current = setInterval(scrollToNextItem, 5000);
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
  };

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;
    startAutoScroll();

    const handleInteractionStart = () => {
      setIsInteracting(true);
      stopAutoScroll();
    };

    const handleInteractionEnd = () => {
      setIsInteracting(false);
      setTimeout(() => {
        if (!isHovering && !isInteracting) {
          startAutoScroll();
        }
      }, 5000);
    };

    container.addEventListener("mousedown", handleInteractionStart);
    container.addEventListener("touchstart", handleInteractionStart);
    container.addEventListener("mouseup", handleInteractionEnd);
    container.addEventListener("touchend", handleInteractionEnd);
    return () => {
      stopAutoScroll();
      container.removeEventListener("mousedown", handleInteractionStart);
      container.removeEventListener("touchstart", handleInteractionStart);
      container.removeEventListener("mouseup", handleInteractionEnd);
      container.removeEventListener("touchend", handleInteractionEnd);
    };
  }, [isHovering, isInteracting]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    stopAutoScroll();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (!isInteracting) {
      setTimeout(() => {
        if (!isHovering && !isInteracting) {
          startAutoScroll();
        }
      }, 1000);
    }
  };

  return (
    <>
      <Helmet>
        <title>DiegoSerafim - DeputadoEstadual | PDT/PA</title>
        <meta
          name="description"
          content="Diego Serafim, Deputado Estadual, PDT, Pará. Tecnologia, transparência e coragem."
        />
        <meta property="og:title" content="Diego Serafim - Deputado Estadual" />
        <meta
          property="og:description"
          content="Tecnologia, Transparência e Coragem para transformar o Pará."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="hero">
        <div className="container hero-grid">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, x: -30 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="hero-text"
          >
            {/* BADGE COM PONTO VERDE PISCANDO */}
            <span className="hero-badge">
              <span className="badge-dot"></span>
              PDT · Deputado Estadual pelo Pará
            </span>

            {/* TÍTULO COM EFEITO DE DIGITAÇÃO */}
            <h1 className="hero-title">
              {isTypingComplete ? (
                <>
                  O PARÁ PODE MAIS. <span className="highlight">E VAI.</span>
                </>
              ) : (
                displayedText
              )}
              <span className="typing-cursor">
                {isTypingComplete ? "" : "|"}
              </span>
            </h1>

            <p className="hero-subtitle">
              Tecnologia, Transparência e Coragem para transformar os{" "}
              <span>144 municípios</span> do Pará.
            </p>

            <div className="hero-buttons">
              <Link to="/propostas" className="btn-primary">
                CONHEÇA AS PROPOSTAS
              </Link>
            </div>

            {/* NÚMEROS ABAIXO DO BOTÃO */}
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">144</span>
                <span className="stat-label">Municípios</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">Eixos de ação</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">12 223</span>
                <span className="stat-label">Vote rumo à vitória</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-foto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="foto-wrapper">
              <img
                src={fotoCandidato}
                alt="Diego Serafim"
                className="foto-candidato floating"
              />
              <div className="foto-overlay" />
              <div className="foto-cta">
                <span className="foto-cta-text">FALE COMIGO</span>
              </div>
            </div>

            <div className="foto-social">
              <span className="social-label">Me dê seu apoio 🙌 ✊</span>
              <div
                className="social-carousel-wrapper"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="social-carousel" ref={carouselRef}>
                  {contatos.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.id}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-carousel-item"
                        aria-label={social.label}
                        style={{ "--social-color": social.color }}
                      >
                        <Icon className="social-icon" />
                        <span className="social-name">{social.label}</span>
                      </a>
                    );
                  })}
                  {contatos.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={`dup-${social.id}`}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-carousel-item"
                        aria-label={social.label}
                        style={{ "--social-color": social.color }}
                      >
                        <Icon className="social-icon" />
                        <span className="social-name">{social.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="carousel-indicators">
                {contatos.map((_, index) => (
                  <span key={index} className="indicator-dot" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <div className="hero-glow" />
      </section>

      <section className="eixos-section" ref={eixosRef}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={eixosInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            OS 4 EIXOS QUE VÃO TRANSFORMAR O PARÁ
          </motion.h2>
          <div className="eixos-grid">
            {eixos.map((eixo, index) => (
              <motion.div
                key={eixo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={eixosInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CardEixo {...eixo} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
