// frontend/src/App.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import WhatsAppFloat from "./components/common/WhatsAppFloat";

// Lazy loading para carregamento rápido
const Home = lazy(() => import("./pages/Home"));
const Sobre = lazy(() => import("./pages/Sobre"));
const Propostas = lazy(() => import("./pages/Propostas"));
const PropostasDetalhe = lazy(() => import("./pages/PropostasDetalhe"));
const Transparencia = lazy(() => import("./pages/Transparencia"));
const Participe = lazy(() => import("./pages/Participe"));
import VLibras from "./components/common/VLibras";
import AudioPlayer from './components/common/AudioPlayer'

// Componente de loading (skeleton)
const PageLoader = () => (
  <div className="container" style={{ padding: "60px 0", textAlign: "center" }}>
    <p>Carregando...</p>
  </div>
);

function App() {
  return (
    <>
      <VLibras />
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/propostas" element={<Propostas />} />
            <Route path="/propostas/:eixo" element={<PropostasDetalhe />} />
            <Route path="/transparencia" element={<Transparencia />} />
            <Route path="/participe" element={<Participe />} />
          </Routes>
        </Suspense>
      </Layout>
      <AudioPlayer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
