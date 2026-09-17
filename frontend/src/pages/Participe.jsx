// frontend/src/pages/Participe.jsx

import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "react-image-crop/dist/ReactCrop.css";
import molduraExemplo from "../assets/images/moldura-foto-perfil-eu-apoio.png";
import "./Participe.css";

const Participe = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // ===== ESTADOS DE IMAGEM =====
  const [image, setImage] = useState(null); // imagem original (objeto Image)
  const [imageUrl, setImageUrl] = useState(null); // URL para preview
  const [imageFinal, setImageFinal] = useState(null); // imagem após crop

  // ===== ESTADOS DE MOLDURA =====
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // ===== ESTADOS DE CROP =====
  const [showCrop, setShowCrop] = useState(false);
  const [crop, setCrop] = useState({ unit: "%", width: 80, aspect: 1 });

  // ===== REFS DOS CANVAS =====
  const canvasRef = useRef(null); // canvas oculto para download (1080x1080)
  const previewCanvasRef = useRef(null); // canvas visível para prévia (400x400)

  // ===== ESTADOS DE DOWNLOAD =====
  const [gerando, setGerando] = useState(false);
  const [baixando, setBaixando] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const [modo, setModo] = useState("ajuste"); // "crop" ou "ajuste"

  // ===== FORMULÁRIO =====
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    bairro: "",
    convidadoPor: "",
  });

  // ============================================================
  // 1. FUNÇÕES DE CROP
  // ============================================================
  const getCroppedImg = (image, crop) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Usar as dimensões naturais da imagem (não as exibidas)
    const naturalWidth = image.naturalWidth || image.width;
    const naturalHeight = image.naturalHeight || image.height;

    const scaleX = naturalWidth / image.width;
    const scaleY = naturalHeight / image.height;

    const cropWidth = crop.width * scaleX;
    const cropHeight = crop.height * scaleY;
    const cropX = crop.x * scaleX;
    const cropY = crop.y * scaleY;

    canvas.width = cropWidth;
    canvas.height = cropHeight;

    ctx.drawImage(
      image,
      cropX,
      cropY,
      cropWidth,
      cropHeight,
      0,
      0,
      cropWidth,
      cropHeight
    );

    return canvas.toDataURL("image/png");
  };

  // ============================================================
  // FUNÇÃO DE CROP
  // ============================================================
  const handleCropComplete = () => {
    if (!image) return;
    const croppedDataUrl = getCroppedImg(image, crop);
    const croppedImg = new Image();
    croppedImg.onload = () => {
      // Armazena a imagem cortada
      setImageFinal(croppedImg);
      setShowCrop(false);
      // Reset zoom e posição
      setScale(1);
      setPosition({ x: 0, y: 0 });
      // Força a atualização da prévia
      setTimeout(() => desenharPreview(), 50);
    };
    croppedImg.onerror = () => {
      alert("Erro ao processar a imagem cortada.");
    };
    croppedImg.src = croppedDataUrl;
  };

  // ============================================================
  // 2. UPLOAD
  // ============================================================
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        setImage(img);
        setImageUrl(event.target.result);
        setShowCrop(true);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  // ============================================================
  // PRÉVIA DINÂMICA
  // ============================================================
  const desenharPreview = () => {
    const canvas = previewCanvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;

    const LARGURA = 400;
    const ALTURA = 400;
    canvas.width = LARGURA;
    canvas.height = ALTURA;

    ctx.clearRect(0, 0, LARGURA, ALTURA);

    const foto = imageFinal || image;
    if (!foto) return;

    // Desenhar a foto preenchendo todo o canvas (sem distorção)
    // Usamos a proporção da foto para ajustar ao canvas
    const fotoAspect = foto.width / foto.height;
    const canvasAspect = LARGURA / ALTURA;

    let drawW, drawH;
    if (fotoAspect > canvasAspect) {
      drawW = LARGURA * scale;
      drawH = drawW / fotoAspect;
    } else {
      drawH = ALTURA * scale;
      drawW = drawH * fotoAspect;
    }

    const x = (LARGURA - drawW) / 2 + position.x;
    const y = (ALTURA - drawH) / 2 + position.y;

    ctx.drawImage(foto, x, y, drawW, drawH);

    // Moldura PNG
    const molduraImg = new Image();
    molduraImg.src = molduraExemplo;
    molduraImg.onload = () => {
      ctx.drawImage(molduraImg, 0, 0, LARGURA, ALTURA);
    };
    if (molduraImg.complete) {
      ctx.drawImage(molduraImg, 0, 0, LARGURA, ALTURA);
    }
  };

  // Atualiza prévia sempre que foto, zoom ou posição mudarem
  useEffect(() => {
    if (image || imageFinal) {
      desenharPreview();
    }
  }, [image, imageFinal, scale, position]);

  // ============================================================
  // 4. DOWNLOAD (ALTA RESOLUÇÃO)
  // ============================================================
  // ============================================================
  // DOWNLOAD (ALTA RESOLUÇÃO) – CORRIGIDO
  // ============================================================
  const desenharMoldura = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;

    const LARGURA = 1080;
    const ALTURA = 1080;
    canvas.width = LARGURA;
    canvas.height = ALTURA;

    ctx.clearRect(0, 0, LARGURA, ALTURA);

    const foto = imageFinal || image;
    if (!foto) return;

    const fotoAspect = foto.width / foto.height;
    const canvasAspect = LARGURA / ALTURA;

    let drawW, drawH;
    if (fotoAspect > canvasAspect) {
      drawW = LARGURA * scale;
      drawH = (LARGURA * scale) / fotoAspect;
    } else {
      drawH = ALTURA * scale;
      drawW = ALTURA * scale * fotoAspect;
    }

    const x = (LARGURA - drawW) / 2 + position.x * (1080 / 400);
    const y = (ALTURA - drawH) / 2 + position.y * (1080 / 400);

    ctx.drawImage(foto, x, y, drawW, drawH);

    const molduraImg = new Image();
    molduraImg.src = molduraExemplo;
    molduraImg.onload = () => {
      ctx.drawImage(molduraImg, 0, 0, LARGURA, ALTURA);
    };
    if (molduraImg.complete) {
      ctx.drawImage(molduraImg, 0, 0, LARGURA, ALTURA);
    }
  };

  // ============================================================
  // 5. DRAG (ARRASTE)
  // ============================================================
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // ============================================================
  // 6. GERAR E BAIXAR
  // ============================================================
  const gerarImagem = () => {
    const foto = imageFinal || image;
    if (!foto) {
      alert("Por favor, selecione uma foto primeiro.");
      return;
    }
    setGerando(true);
    setTimeout(() => {
      try {
        desenharMoldura();
        setGerando(false);
        setBaixando(true);
        setShowDownloadModal(true); // Abre o modal
      } catch (err) {
        alert("Erro ao gerar a imagem.");
        setGerando(false);
      }
    }, 300);
  };

  const baixarImagem = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `minha-foto-12223.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    setBaixando(false);
    setShowDownloadModal(false); // Fecha o modal
    // Reset
    setImage(null);
    setImageUrl(null);
    setImageFinal(null);
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setForm({ nome: "", whatsapp: "", bairro: "", convidadoPor: "" });
  };

  // ============================================================
  // 7. FORMULÁRIO
  // ============================================================
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ============================================================
  // 8. RESETAR AJUSTES
  // ============================================================
  const resetAjustes = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // ============================================================
  // 9. JSX
  // ============================================================
  const fotoPreview = imageFinal || image;

  return (
    <>
      <Helmet>
        <title>Gerar Foto Perfil | Diego Serafim - Deputado Estadual</title>
        <meta
          name="description"
          content="Crie sua foto de perfil com a moldura da campanha de Diego Serafim."
        />
        <meta property="og:title" content="Diego Serafim - Deputado Estadual" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="page-gerador">
        <div className="container">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">Gerar Foto de Perfil</h1>
            <p className="page-subtitle">
              Apoie a campanha colocando a moldura de Diego Serafim na sua foto
              de perfil. Compartilhe com a sua rede e mostre seu apoio!
            </p>

            <div className="gerador-grid">
              {/* ===== LADO ESQUERDO ===== */}
              <div className="gerador-esquerdo">
                {/* Upload */}
                <div className="upload-area">
                  {!imageUrl ? (
                    <div className="upload-placeholder">
                      <span className="upload-icon">📸</span>
                      <p>Clique para escolher sua foto</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="upload-input"
                      />
                    </div>
                  ) : (
                    <div className="preview-area">
                      <img
                        src={imageUrl}
                        alt="Preview da sua foto"
                        className="preview-foto"
                      />
                      <button
                        className="btn-trocar-foto"
                        onClick={() => {
                          setImage(null);
                          setImageUrl(null);
                          setImageFinal(null);
                          resetAjustes();
                        }}
                      >
                        Trocar foto
                      </button>
                    </div>
                  )}
                </div>

                {/* Formulário */}
                {/* <div className="form-area">
                  <h3>Seus dados</h3>
                  <form>
                    <input
                      type="text"
                      name="nome"
                      placeholder="Nome (como te chamam)"
                      value={form.nome}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="tel"
                      name="whatsapp"
                      placeholder="WhatsApp (00) 00000-0000"
                      value={form.whatsapp}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="bairro"
                      placeholder="Seu bairro"
                      value={form.bairro}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="convidadoPor"
                      placeholder="Quem te convidou?"
                      value={form.convidadoPor}
                      onChange={handleChange}
                    />
                  </form>
                  <p className="form-obs">
                    Ao gerar a foto, você autoriza o uso dos dados para
                    acompanhamento da campanha.
                  </p>
                </div> */}

                <button
                  className="btn-gerar"
                  onClick={gerarImagem}
                  disabled={!fotoPreview || gerando}
                >
                  {gerando ? "Gerando..." : "Gerar e baixar sua foto"}
                </button>
              </div>

              {/* ===== LADO DIREITO ===== */}
              <div className="gerador-direito">
                <div className="moldura-preview">
                  <h3>Prévia da sua foto com moldura</h3>
                  <div className="canvas-preview-wrapper">
                    {fotoPreview ? (
                      <canvas
                        ref={previewCanvasRef}
                        className="preview-canvas"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        style={{ cursor: isDragging ? "grabbing" : "grab" }}
                      />
                    ) : (
                      <div className="moldura-placeholder">
                        <span>📸</span>
                        <p>Faça upload da sua foto para ver a prévia</p>
                      </div>
                    )}
                  </div>
                  {/* Controles de zoom e reset */}
                  <div className="controls-area">
                    <div className="zoom-controls">
                      <span>🔍</span>
                      <input
                        type="range"
                        min="30"
                        max="200"
                        value={Math.round(scale * 100)}
                        onChange={(e) =>
                          setScale(parseFloat(e.target.value) / 100)
                        }
                      />
                      <span>{Math.round(scale * 100)}%</span>
                      <button
                        className="btn-reset"
                        onClick={resetAjustes}
                        disabled={showCrop}
                      >
                        Reset
                      </button>
                    </div>
                    <p className="drag-hint">
                      💡 Arraste a imagem para reposicionar
                    </p>
                  </div>
                  <p className="moldura-descricao">
                    Sua foto será sobreposta com a moldura oficial da campanha,
                    com o número <strong>12.223</strong> e o texto{" "}
                    <strong>"EU APOIO"</strong>.
                  </p>
                </div>

                {/* Canvas oculto para download */}
                <canvas ref={canvasRef} style={{ display: "none" }} />

                {/* Área de download */}
                {/* ===== MODAL DE DOWNLOAD (OVERLAY GLOBAL) ===== */}
                {showDownloadModal && (
                  <div className="download-modal">
                    <div className="download-modal-content">
                      <p>✅ Imagem pronta!</p>
                      <div className="download-modal-buttons">
                        <button className="btn-baixar" onClick={baixarImagem}>
                          Baixar imagem
                        </button>
                        <button
                          className="btn-compartilhar"
                          onClick={() => {
                            const url = window.location.href;
                            window.open(
                              `https://wa.me/?text=Eu apoiei a campanha de Diego Serafim! Faça você também: ${url}`,
                              "_blank"
                            );
                          }}
                        >
                          Compartilhar
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {modo === "ajuste" && (
        <div className="controls-area">{/* controles de zoom e drag */}</div>
      )}
      {modo === "crop" && (
        <button onClick={() => setShowCrop(true)}>Recortar imagem</button>
      )}

      {/* ===== MODAL DE CROP (OVERLAY GLOBAL) ===== */}
      {/* {showCrop && (
        <div className="crop-modal">
          <div className="crop-modal-content">
            <h3>Ajuste sua foto</h3>
            <ReactCrop crop={crop} onChange={setCrop}>
              <img src={imageUrl} alt="Crop" />
            </ReactCrop>
            <div className="crop-buttons">
              <button className="btn-crop-aplicar" onClick={handleCropComplete}>
                Aplicar
              </button>
              <button
                className="btn-crop-cancelar"
                onClick={() => {
                  setShowCrop(false);
                  setImage(null);
                  setImageUrl(null);
                }}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Participe;
