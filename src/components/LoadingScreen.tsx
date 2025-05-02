import { motion } from "framer-motion";
import logoBg from "/public/assets/logo-ford-mustang.png";
import mustangGif from "/public/assets/mustang-loader.webp";

export default function LoadingScreen() {
    return (
        <div className="w-full h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
            {/* Logo en el centro */}
            <motion.img
                src={logoBg}
                alt="Logo Mustang"
                className="w-72 mb-12 z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            />

            {/* Coche animado en bucle */}
            <motion.img
                src={mustangGif}
                alt="Coche cargando"
                className="absolute bottom-16 w-48"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                    duration: 3.5,
                    ease: [0.6, 0.01, -0.05, 0.95],
                    repeat: Infinity,
                    repeatType: "loop",
                }}
            />

            {/* Texto con fondo difuminado y sombra */}
            <p
                className="ford-font text-cyan-400 mt-20 text-xl tracking-wider px-6 py-2 animate-pulse z-10"
                style={{
                    background: "radial-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0))",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                    textShadow: "2px 2px 8px rgba(0, 255, 255, 0.7)",
                }}
            >
                Cargando Mustang Vault...
            </p>
        </div>
    );
}
