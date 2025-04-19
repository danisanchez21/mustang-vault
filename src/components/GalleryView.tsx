import { useEffect, useState } from 'react';
import { mustangs } from '../data/mustangs';
import CarDetailView from './CarDetailView';
import bgCyberpunk from '/public/assets/violet-cyberpunk-background.jpg';
import Modal from './Modal';
import SketchfabViewer from './SketchfabViewer';

import { motion, useMotionValue, animate } from 'framer-motion';

export default function GalleryView() {
    const [index, setIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [show3D, setShow3D] = useState(false);

    const x = useMotionValue(0);
    const cardWidth = 320;
    const gap = 48;
    const wrapperWidth = 960;
    const offset = (wrapperWidth - cardWidth) / 2;

    useEffect(() => {
        const controls = animate(x, -index * (cardWidth + gap) + offset, {
            type: 'spring',
            stiffness: 300,
            damping: 30,
        });
        return controls.stop;
    }, [index]);

    const goTo = (dir: number) => {
        if (isSliding) return;
        setIsSliding(true);
        setTimeout(() => {
            setIndex((prev) => (prev + dir + mustangs.length) % mustangs.length);
            setIsSliding(false);
        }, 300);
    };

    const currentMustang = mustangs[index];

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

                <div className="w-full max-w-[960px] min-h-[640px] flex items-center justify-center overflow-hidden relative">
                    <motion.div
                        className="flex gap-12 items-center"
                        style={{ x }}
                    >
                        {mustangs.map((car, i) => (
                            <div
                                key={car.id}
                                className={`transition-all duration-300 flex-shrink-0 ${i === index ? 'scale-100 z-10' : 'scale-75 opacity-40'}`}
                                style={{ width: '320px' }}
                            >
                                <CarDetailView mustang={car} isMain={i === index} />
                            </div>
                        ))}
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

            <div className="flex gap-6 mt-10">
                <button className="bg-pink-600 text-white px-6 py-2 rounded-xl border border-pink-300 shadow-lg hover:bg-pink-700">
                    Ver especificaciones
                </button>
                <button className="bg-cyan-600 text-white px-6 py-2 rounded-xl border border-cyan-300 shadow-lg hover:bg-cyan-700">
                    Comparar
                </button>
                {currentMustang.model3DId && (
                    <button
                        onClick={() => setShow3D(true)}
                        className="bg-indigo-600 text-white px-6 py-2 rounded-xl border border-indigo-300 shadow-lg hover:bg-indigo-700"
                    >
                        Ver en 3D
                    </button>
                )}
            </div>

            {show3D && currentMustang.model3DId && (
                <Modal onClose={() => setShow3D(false)}>
                    <SketchfabViewer modelId={currentMustang.model3DId} />
                </Modal>
            )}
        </div>
    );
}
