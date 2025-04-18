import { useState } from 'react';
import { mustangs } from '../data/mustangs';
import bgCyberpunk from '/public/assets/violet-cyberpunk-background.jpg'; // Imagen de fondo

export default function CarDetailView() {
    const [index, setIndex] = useState(0);
    const mustang = mustangs[index];

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
            <h1 className="text-6xl font-bold text-cyan-300 mb-8">Galería &gt;</h1>

            <div className="flex items-center justify-center gap-6 mb-8">
                {/* Modelo anterior */}
                <button onClick={anterior} className="text-4xl text-cyan-500 hover:text-cyan-300">◀</button>

                {/* Modelo actual */}
                <div className="border-4 border-cyan-500 p-4 rounded-2xl w-[400px] flex flex-col items-center justify-center bg-[#201C37] bg-opacity-70">
                    <img
                        src={mustang.imgFront}
                        alt="Vista frontal"
                        className="w-full max-w-[260px] h-auto object-contain mb-15 mt-8 mx-auto rounded"

                    />
                    <img
                        src={mustang.imgBack}
                        alt="Vista trasera"
                        className="w-full max-w-[285px] h-auto object-contain mb-10 mt-8 mx-auto rounded"

                    />
                    <p className="text-2xl font-semibold text-cyan-300 mb-2">{mustang.nombre}</p>
                    <div className="text-sm text-white text-left">
                        <p><strong>Año:</strong> {mustang.año}</p>
                        <p><strong>Potencia:</strong> {mustang.hp} HP</p>
                        <p><strong>Velocidad Máx:</strong> {mustang.velocidad} MPH</p>
                    </div>
                </div>

                {/* Modelo siguiente */}
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
