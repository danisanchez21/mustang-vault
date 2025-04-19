import { motion } from "framer-motion";
import GridMotion from "./GridMotion";
import fordLogo from "/assets/ford_logo_flat.png";
import mustangLogo from "/assets/logo-ford.png";

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
    return (
        <div
            className="w-full min-h-screen text-white flex flex-col items-center justify-start overflow-visible bg-cover bg-center relative"
            style={{ backgroundImage: "url('/assets/fondo-menu-bg.jpg')" }}
        >
            {/* Logo Ford arriba izquierda */}
            <img
                src={fordLogo}
                alt="Ford Logo"
                className="absolute top-4.5 left-4 w-30 h-auto z-30"
            />

            {/* Logo Mustang arriba derecha */}
            <img
                src={mustangLogo}
                alt="Mustang Logo"
                className="absolute top-3 right-4 w-28 h-auto z-30"
            />

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
        </div>
    );
}
