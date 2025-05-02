import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import logoFord from "/public/assets/logo-ford.png";
import mustangCoche from "/public/assets/mustang-cargando.webp";

export default function SplashScreen() {
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate("/main-menu");
        }, 4000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            className="w-screen h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 text-center relative overflow-hidden"
            style={{ backgroundImage: `url('/assets/splash-bg.jpg')` }}
        >
            {/* Logo */}
            <motion.img
                src={logoFord}
                alt="Logo Ford Mustang"
                className="w-60"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            />

            {/* Coche animado */}
            <motion.img
                src={mustangCoche}
                alt="Coche cargando"
                className="absolute bottom-20 w-60"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 3.5, ease: [0.6, 0.01, -0.05, 0.95] }}
            />

            {/* Texto con fondo difuminado */}
            <p
                className="ford-font text-cyan-400 text-lg mt-8 tracking-wider animate-pulse px-6 py-2 drop-shadow-lg"
                style={{
                    background: "radial-gradient(rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.0))",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                    textShadow: "2px 2px 8px rgba(0, 255, 255, 0.8)",
                }}
            >
                Cargando Mustang Vault...
            </p>
        </div>
    );
}
