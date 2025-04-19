// src/App.tsx
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import GalleryView from "./components/GalleryView";
import SplashScreen from "./components/SplashScreen";
import MainMenu from "./components/MainMenu";

function App() {
  const menuItems = [
    {
      title: "Galería",
      subtitle: "Modelos Clásicos",
      image: "/assets/gallery-bg.jpg",
      onClick: () => window.location.href = "/gallery",
    },
    {
      title: "Comparar",
      subtitle: "Mira las diferencias",
      image: "/assets/violet-cyberpunk-background2.jpg",
      onClick: () => alert("Comparar aún no implementado"),
    },
    {
      title: "Ajustes",
      subtitle: "Opciones y personalización",
      image: "/assets/menu-bg.jpg",
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
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/main-menu" element={<MainMenu menuItems={menuItems} />} />
        <Route path="/gallery" element={<GalleryView />} />
      </Routes>
    </Router>
  );
}

export default App;
