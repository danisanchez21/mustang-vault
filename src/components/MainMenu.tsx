import { useNavigate } from "react-router-dom";
import GridMotion from "./GridMotion";
import galleryImg from "/public/assets/gallery-bg.jpg";
import compareImg from "/public/assets/menu-bg.jpg";
import settingsImg from "/public/assets/splash-bg.jpg";
import historyImg from "/public/assets/history-bg.jpg";

export default function MainMenu() {
    const navigate = useNavigate();

    const menuItems = [
        {
            title: "Galería",
            subtitle: "Modelos Clásicos",
            image: galleryImg,
            onClick: () => navigate("/gallery"),
        },
        {
            title: "Comparar",
            subtitle: "Mira las diferencias",
            image: compareImg,
            onClick: () => alert("Comparar aún no disponible"),
        },
        {
            title: "Ajustes",
            subtitle: "Opciones y personalización",
            image: settingsImg,
            onClick: () => alert("Ajustes en construcción"),
        },
        {
            title: "Historia",
            subtitle: "Línea del tiempo Mustang",
            image: historyImg,
            onClick: () => alert("Historia en desarrollo"),
        },
    ];

    return <GridMotion sections={menuItems} />;
}
