import { useState } from 'react';
import { mustangs } from '../data/mustangs';

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
        <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-6">
            <h1 className="text-4xl font-bold mb-4">{mustang.nombre}</h1>
            <div className="flex gap-8 items-center">
                <button onClick={anterior} className="text-2xl">◀</button>
                <div className="bg-gray-900 p-4 rounded-2xl shadow-lg w-[500px] text-center">
                    <div className="flex flex-col items-center gap-4">
                        <img
                            src={mustang.imgFront}
                            alt="Vista frontal"
                            className="rounded shadow-lg w-full max-w-[600px] h-auto object-contain"
                        />
                        <img
                            src={mustang.imgBack}
                            alt="Vista trasera"
                            className="rounded shadow-lg w-full max-w-[600px] h-auto object-contain"
                        />
                    </div>


                    <div className="text-left">
                        <p><strong>Año:</strong> {mustang.año}</p>
                        <p><strong>Potencia:</strong> {mustang.hp} HP</p>
                        <p><strong>Velocidad Máx:</strong> {mustang.velocidad} MPH</p>
                    </div>
                </div>
                <button onClick={siguiente} className="text-2xl">▶</button>
            </div>
        </div>
    );
}
