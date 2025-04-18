import { useState } from 'react';
import { mustangs } from '../data/mustangs';
import CarDetailView from './CarDetailView';
import bgCyberpunk from '/public/assets/violet-cyberpunk-background.jpg';

import { motion } from 'framer-motion';

export default function GalleryView() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    const getPrevIndex = () => (index - 1 + mustangs.length) % mustangs.length;
    const getNextIndex = () => (index + 1) % mustangs.length;

    const goTo = (dir: number) => {
        if (isSliding) return;
        setDirection(dir);
        setIsSliding(true);

        setTimeout(() => {
            setIndex((prev) => (prev + dir + mustangs.length) % mustangs.length);
            setIsSliding(false);
        }, 100); // debe coincidir con la duración de la animación
    };

    const slideVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 400 : -400,
            opacity: 0,
        }),
        center: { x: 0, opacity: 1 },
        exit: (dir: number) => ({
            x: dir > 0 ? -400 : 400,
            opacity: 0,
        }),
    };

    const visibleCars = [
        mustangs[getPrevIndex()],
        mustangs[index],
        mustangs[getNextIndex()],
    ];

    return (
        <div
            className="min-h-screen bg-cover bg-center text-cyan-400 flex flex-col items-center justify-center font-sans p-6"
            style={{ backgroundImage: `url(${bgCyberpunk})` }}
        >
            <h1 className="ford-font text-6xl font-bold text-cyan-300 mb-8">Galería &gt;</h1>

            <div className="flex items-center justify-center gap-8 mb-8 w-full max-w-[1200px]">
                <button
                    onClick={() => goTo(-1)}
                    disabled={isSliding}
                    className="text-4xl text-cyan-500 hover:text-cyan-300"
                >
                    ◀
                </button>

                <div className="relative w-[900px] overflow-hidden">
                    <motion.div
                        className="flex gap-12 justify-center items-center"
                        key={index}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.6 }}
                    >
                        <CarDetailView mustang={visibleCars[0]} />
                        <CarDetailView mustang={visibleCars[1]} isMain />
                        <CarDetailView mustang={visibleCars[2]} />
                    </motion.div>
                </div>

                <button
                    onClick={() => goTo(1)}
                    disabled={isSliding}
                    className="text-4xl text-cyan-500 hover:text-cyan-300"
                >
                    ▶
                </button>
            </div>

            <div className="flex gap-6">
                <button className="bg-pink-600 text-white px-6 py-2 rounded-xl border border-pink-300 shadow-lg hover:bg-pink-700">
                    Ver especificaciones
                </button>
                <button className="bg-cyan-600 text-white px-6 py-2 rounded-xl border border-cyan-300 shadow-lg hover:bg-cyan-700">
                    Comparar
                </button>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-xl border border-indigo-300 shadow-lg hover:bg-indigo-700">
                    Escuchar motor
                </button>
            </div>
        </div>
    );
}
