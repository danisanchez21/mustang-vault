// src/components/LoadingScreen.tsx
import { motion } from "framer-motion";
import logoBg from "/public/assets/logo-ford-mustang.png"; // ⚠️ cambia esto si usas otra ruta
import mustangGif from "/public/assets/mustang-loader.webp"; // ⚠️ o .png

export default function LoadingScreen() {
    return (
        <div className="w-full h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
            {/* Logo en el centro */}
            <img src={logoBg} alt="Logo Mustang" className="w-72 mb-12 z-10" />

            {/* Mustang en movimiento */}
            <motion.img
                src={mustangGif}
                alt="Coche cargando"
                className="absolute bottom-16 w-48"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                }}
            />

            {/* Texto de carga */}
            <p className="text-cyan-400 mt-20 text-xl tracking-wider z-10">Cargando...</p>
        </div>
    );
}
