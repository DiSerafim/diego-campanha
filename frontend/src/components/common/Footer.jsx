// frontend/src/components/common/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* ===== MARCA ===== */}
          <div className="footer-brand">
            <h3>Diego Serafim</h3>
            <p>Deputado Estadual • PDT/PA • 12.223</p>
            <p className="footer-slogan">"O Pará pode mais. E vai."</p>
            <div className="footer-cnpj">
              <span>CNPJ da campanha: <strong>68.504.357/0001-40</strong></span>
            </div>
          </div>

          {/* ===== NAVEGAÇÃO ===== */}
          <div className="footer-links">
            <h4>Navegação</h4>
            <Link to="/">Início</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/propostas">Propostas</Link>
            <Link to="/transparencia">Transparência</Link>
            <Link to="/participe">Participe</Link>
          </div>

          {/* ===== REDES SOCIAIS ===== */}
          <div className="footer-social">
            <h4>Redes Sociais</h4>
            <a
              href="https://www.instagram.com/deputado_estadual_12_223/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/diserafim1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.tiktok.com/@porbelem"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </a>
            <a
              href="https://www.youtube.com/@diserafimm"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
            <a
              href="https://x.com/DiSerafim1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter/X
            </a>
          </div>

          {/* ===== CONTATO ===== */}
          <div className="footer-contact">
            <h4>Contato</h4>
            <p className="contact-item">📧 diegoserafim1@gmail.com</p>
            <p className="contact-item">📱 (91) 98514-8873</p>
            <a
              href="https://wa.me/5591985148873"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-footer"
            >
              💬 Fale comigo no WhatsApp
            </a>
            <div className="footer-address">
              <p>📍 Pará, Brasil</p>
            </div>
          </div>
        </div>

        {/* ===== RODAPÉ INFERIOR ===== */}
        <div className="footer-bottom">
          <p>
            © {currentYear} Diego Serafim. Todos os direitos reservados.
          </p>
          <div className="footer-bottom-links">
            <a href="/transparencia" className="footer-transparency-link">
              Prestação de Contas
            </a>
            <span className="footer-divider">|</span>
            <a
              href="https://divulgacandcontas.tse.jus.br/divulga/#/candidato/NORTE/PA/20322002026/140002546437/2026/PA"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-transparency-link"
            >
              Portal da Transparência da TSE
            </a>
          </div>
          <p className="footer-legal">
            Material de campanha eleitoral • Conteúdo gerado com auxílio de IA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;