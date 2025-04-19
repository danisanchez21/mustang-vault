import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bgMenu from "/public/assets/bg-menu.jpg"; // imagen de fondo temporal

export default function MainMenu() {
    const navigate = useNavigate();

    const handleNavigate = (route: string) => {
        navigate(route);
    };

    return (
        <div
            className="w-screen h-screen bg-cover bg-center flex items-center justify-center relative px-6"
            style={{ backgroundImage: `url(${bgMenu})` }}
        >
            <motion.div
                className="grid grid-cols-2 gap-8 max-w-6xl w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Título */}
                <motion.h1
                    className="ford-font text-6xl text-cyan-300 col-span-2 text-center drop-shadow-lg"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    Mustang Vault
                </motion.h1>

                {/* Botón Galería */}
                <motion.button
                    className="ford-font bg-black/60 hover:bg-black/80 text-white border border-cyan-400 px-6 py-4 rounded-xl shadow-xl backdrop-blur-md"
                    onClick={() => handleNavigate("/gallery")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Galería de Modelos
                </motion.button>

                {/* Botón Ajustes */}
                <motion.button
                    className="ford-font bg-black/60 hover:bg-black/80 text-white border border-pink-400 px-6 py-4 rounded-xl shadow-xl backdrop-blur-md"
                    onClick={() => handleNavigate("/settings")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Ajustes
                </motion.button>

                {/* Futuro: Comparador */}
                <motion.button
                    className="ford-font bg-black/60 hover:bg-black/80 text-white border border-yellow-400 px-6 py-4 rounded-xl shadow-xl backdrop-blur-md"
                    onClick={() => handleNavigate("/compare")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Comparar Modelos
                </motion.button>

                {/* Futuro: Historia */}
                <motion.button
                    className="ford-font bg-black/60 hover:bg-black/80 text-white border border-purple-400 px-6 py-4 rounded-xl shadow-xl backdrop-blur-md"
                    onClick={() => handleNavigate("/history")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Historia Mustang
                </motion.button>
            </motion.div>
        </div>
    );
}
