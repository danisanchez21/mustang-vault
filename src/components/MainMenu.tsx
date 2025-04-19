import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const sections = [
    {
        title: "Galería",
        subtitle: "Modelos Clásicos",
        image: "/assets/gallery-bg.jpg",
        route: "/gallery"
    },
    {
        title: "Comparar",
        subtitle: "Mira las diferencias",
        image: "/assets/compare.webp",
        route: "/compare"
    },
    {
        title: "Ajustes",
        subtitle: "Opciones y personalización",
        image: "/assets/ajustes-bg.jpg",
        route: "/settings"
    },
    {
        title: "Historia",
        subtitle: "Línea del tiempo Mustang",
        image: "/assets/history-bg.jpg",
        route: "/history"
    }
];

export default function MainMenu() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black bg-cover bg-center p-10 grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center"
            style={{ backgroundImage: "url('/assets/menu-bg.jpg')" }}>

            {sections.map((section) => (
                <motion.div
                    key={section.title}
                    onClick={() => navigate(section.route)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-72 h-44 rounded overflow-hidden shadow-lg cursor-pointer group"
                >
                    <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover group-hover:brightness-110 transition duration-300"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-black/30 px-4 py-2">
                        <h2 className="text-white text-xl font-bold ford-font">{section.title}</h2>
                        <p className="text-gray-300 text-sm italic">{section.subtitle}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
