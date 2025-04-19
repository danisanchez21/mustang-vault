// src/App.tsx
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import GalleryView from "./components/GalleryView";
import SplashScreen from "./components/SplashScreen";
import MainMenu from "./components/MainMenu";
import TransitionOverlay from "./components/TransitionOverlay";

function AnimatedRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showTransition, setShowTransition] = useState(false);

  const handleNavigate = (path: string) => {
    setShowTransition(true);
    setTimeout(() => {
      navigate(path);
      setShowTransition(false);
    }, 800);
  };

  const menuItems = [
    {
      title: "Galería",
      subtitle: "Modelos Clásicos",
      image: "/assets/gallery-bg.jpg",
      onClick: () => handleNavigate("/gallery"),
    },
    {
      title: "Comparar",
      subtitle: "Mira las diferencias",
      image: "/assets/compare.webp",
      onClick: () => alert("Comparar aún no implementado"),
    },
    {
      title: "Ajustes",
      subtitle: "Opciones y personalización",
      image: "/assets/ajustes-bg.jpg",
      onClick: () => alert("Ajustes aún no implementado"),
    },
    {
      title: "Historia",
      subtitle: "Línea del tiempo Mustang",
      image: "/assets/history-bg.jpg",
      onClick: () => alert("Historia aún no implementado"),
    },
  ];

  return (
    <>
      <TransitionOverlay isVisible={showTransition} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/main-menu" element={<MainMenu menuItems={menuItems} />} />
          <Route path="/gallery" element={<GalleryView />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
