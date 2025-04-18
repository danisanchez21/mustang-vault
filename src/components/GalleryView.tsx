import { useState } from 'react';
import { mustangs } from '../data/mustangs';
import CarDetailView from './CarDetailView';
import bgCyberpunk from '/public/assets/violet-cyberpunk-background.jpg';

export default function GalleryView() {
    const [index, setIndex] = useState(0);

    const mustang = mustangs[index];
    const prevMustang = mustangs[(index - 1 + mustangs.length) % mustangs.length];
    const nextMustang = mustangs[(index + 1) % mustangs.length];

    const siguiente = () => {
        setIndex((prev) => (prev + 1) % mustangs.length);
    };

    const anterior = () => {
        setIndex((prev) => (prev - 1 + mustangs.length) % mustangs.length);
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center text-cyan-400 flex flex-col items-center justify-center font-sans p-6"
            style={{ backgroundImage: `url(${bgCyberpunk})` }}
        >
            <h1 className="ford-font text-6xl font-bold text-cyan-300 mb-8">Galería &gt;</h1>

            <div className="flex items-center justify-center gap-8 mb-8">
                <button onClick={anterior} className="text-4xl text-cyan-500 hover:text-cyan-300">◀</button>

                <div className="flex items-center justify-center gap-12">
                    <CarDetailView mustang={prevMustang} />
                    <CarDetailView mustang={mustang} isMain />
                    <CarDetailView mustang={nextMustang} />
                </div>

                <button onClick={siguiente} className="text-4xl text-cyan-500 hover:text-cyan-300">▶</button>
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
