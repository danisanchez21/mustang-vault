import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GridMotion from "./GridMotion";
import fordLogo from "/assets/ford_logo_flat.png";
import mustangLogo from "/assets/logo-ford.png";
import TransitionOverlayInitial from "./TransitionOverlayInitial"; // ⚠️ Asegúrate de tener este archivo

interface MenuItem {
    title: string;
    subtitle: string;
    image: string;
    onClick: () => void;
}

interface MainMenuProps {
    menuItems: MenuItem[];
}

export default function MainMenu({ menuItems }: MainMenuProps) {
    const [time, setTime] = useState<string>("");
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            setTime(`${hours}:${minutes}`);
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {showIntro && <TransitionOverlayInitial onFinish={() => setShowIntro(false)} />}

            {!showIntro && (
                <motion.div
                    className="w-screen h-screen overflow-hidden text-white flex flex-col items-center justify-start bg-cover bg-center relative"
                    style={{ backgroundImage: "url('/assets/fondo-menu-bg.jpg')" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {/* Logo Ford arriba izquierda */}
                    <img
                        src={fordLogo}
                        alt="Ford Logo"
                        className="absolute top-4.5 left-4 w-30 h-auto z-30"
                    />

                    {/* Contenedor de reloj + logo Mustang a la derecha */}
                    <div className="absolute top-3 right-4 flex items-center gap-3 z-30">
                        <div className="text-white font-mono text-base bg-black/50 px-3 py-1 rounded shadow-md">
                            {time}
                        </div>
                        <img
                            src={mustangLogo}
                            alt="Mustang Logo"
                            className="w-28 h-auto"
                        />
                    </div>

                    {/* Título con fondo tipo barra */}
                    <div className="w-full py-4 bg-gradient-to-r from-[#240c62]/80 to-[#120a40]/80 text-center z-20">
                        <motion.h1
                            className="ford-font text-cyan-400 text-4xl md:text-5xl"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Mustang Vault
                        </motion.h1>
                    </div>

                    {/* Menú con GridMotion */}
                    <div className="z-10">
                        <GridMotion sections={menuItems} gradientColor="transparent" />
                    </div>
                </motion.div>
            )}
        </>
    );
}
