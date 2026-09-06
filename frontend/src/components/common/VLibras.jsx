// frontend/src/components/common/VLibras.jsx
import React, { useEffect } from "react";

const VLibras = () => {
  useEffect(() => {
    let resizeListener = null;

    const aplicarEstilos = (shadowRoot) => {
      if (!shadowRoot) return;

      // Verifica se o estilo já foi injetado
      if (shadowRoot.querySelector("#vlibras-custom-style")) return;

      // Cria um <style> e injeta no Shadow Root
      const style = document.createElement("style");
      style.id = "vlibras-custom-style";
      style.textContent = `
        #vlibras-access {
          position: fixed !important;
          bottom: 240px !important;
          right: calc(50% - 600px + 30px) !important;
          z-index: 998 !important;
          top: auto !important;
          width: 44px !important;
          height: 44px !important;
        }

        #vlibras-button {
          width: 44px !important;
          height: 44px !important;
          right: 0 !important;
          position: absolute !important;
        }

        #vlibras-button img {
          width: 100% !important;
          height: 100% !important;
          object-fit: contain !important;
        }

        #vlibras-popup {
          display: none !important;
        }

        /* ===== BREAKPOINT 1200px ===== */
        @media (max-width: 1200px) {
          #vlibras-access {
            right: 30px !important;
          }
        }

        /* ===== TABLET (768px) ===== */
        @media (max-width: 768px) {
          #vlibras-access {
            bottom: 200px !important;
            right: 15px !important;
            width: 40px !important;
            height: 40px !important;
          }
          #vlibras-button {
            width: 40px !important;
            height: 40px !important;
          }
        }

        /* ===== MOBILE (480px) ===== */
        @media (max-width: 480px) {
          #vlibras-access {
            bottom: 175px !important;
            right: 15px !important;
            width: 38px !important;
            height: 38px !important;
          }
          #vlibras-button {
            width: 38px !important;
            height: 38px !important;
          }
        }
      `;

      shadowRoot.appendChild(style);
    };

    const initVLibras = () => {
      if (window.VLibras) {
        new window.VLibras.Widget({
          rootPath: "https://vlibras.gov.br/app",
          avatar: "guga",
          position: "right",
          opacity: 0.9,
        });

        // Aguarda o wrapper ser criado
        const observer = new MutationObserver(() => {
          const wrapper = document.getElementById("vlibras-access-wrapper");
          if (wrapper && wrapper.shadowRoot) {
            observer.disconnect();
            aplicarEstilos(wrapper.shadowRoot);

            resizeListener = () => {};
            window.addEventListener("resize", resizeListener);
          }
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });

        // Fallback: verificar a cada 500ms
        const fallback = setInterval(() => {
          const wrapper = document.getElementById("vlibras-access-wrapper");
          if (wrapper && wrapper.shadowRoot) {
            clearInterval(fallback);
            observer.disconnect();
            aplicarEstilos(wrapper.shadowRoot);
          }
        }, 500);

        // Cleanup
        return () => {
          clearInterval(fallback);
          observer.disconnect();
          if (resizeListener) {
            window.removeEventListener("resize", resizeListener);
          }
        };
      }
    };

    // Verifica se o script do VLibras já foi carregado
    if (window.VLibras) {
      initVLibras();
    } else {
      const checkScript = setInterval(() => {
        if (window.VLibras) {
          clearInterval(checkScript);
          initVLibras();
        }
      }, 200);
      return () => clearInterval(checkScript);
    }
  }, []);

  return null;
};

export default VLibras;
