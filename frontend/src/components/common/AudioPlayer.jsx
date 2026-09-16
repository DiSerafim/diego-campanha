// frontend/src/components/common/AudioPlayer.jsx
import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import "./AudioPlayer.css";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const isFirstLoad = useRef(true);

  const audioSrc = "/assets/audio/e-o-serafim-4-piseiro.mp3";

  // ===== PLAY/PAUSE =====
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.warn("Erro ao tocar:", err));
    }
  };

  // ===== TOCAR NO PRIMEIRO CLIQUE DO USUÁRIO =====
  useEffect(() => {
    const tryAutoplayOnInteraction = () => {
      if (isFirstLoad.current && audioRef.current) {
        isFirstLoad.current = false;
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            console.log("🎵 Música iniciada após interação do usuário");
          })
          .catch((err) => {
            console.warn("Autoplay ainda bloqueado:", err);
          });
      }
    };

    // Aguarda o primeiro clique/touch no documento
    document.addEventListener("click", tryAutoplayOnInteraction);
    document.addEventListener("touchstart", tryAutoplayOnInteraction);

    return () => {
      document.removeEventListener("click", tryAutoplayOnInteraction);
      document.removeEventListener("touchstart", tryAutoplayOnInteraction);
    };
  }, []);

  // ===== TENTATIVA INICIAL (FALLBACK) =====
  useEffect(() => {
    const tryInitialPlay = () => {
      if (audioRef.current && isFirstLoad.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            isFirstLoad.current = false;
            console.log("🎵 Música iniciada automaticamente (raro)");
          })
          .catch(() => {
            // Silenciosamente falha – aguardará o primeiro clique
          });
      }
    };

    // Pequeno delay para garantir que o áudio carregou
    setTimeout(tryInitialPlay, 1000);
  }, []);

  return (
    <div className="audio-player-wrapper">
      <button
        className="play-pause-btn"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pausar música" : "Tocar música"}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="auto"
        onError={() => console.error("❌ Erro ao carregar áudio")}
      />
    </div>
  );
};

export default AudioPlayer;
