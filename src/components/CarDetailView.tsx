import { Mustang } from '../data/mustangs';

interface Props {
    mustang: Mustang;
    isMain?: boolean; // Si es el coche central o no (para estilos)
}

export default function CarDetailView({ mustang, isMain = false }: Props) {
    return (
        <div
            className={`flex flex-col items-center justify-center transition-all duration-300 ${isMain
                    ? 'border-4 border-cyan-500 p-4 rounded-2xl w-[400px] bg-[#201C37] bg-opacity-70 z-10'
                    : 'opacity-40 scale-75'
                }`}
        >
            <img
                src={mustang.imgFront}
                alt="Vista frontal"
                className="w-full max-w-[260px] h-auto object-contain mt-8 mb-4 mx-auto rounded"
            />
            <img
                src={mustang.imgBack}
                alt="Vista trasera"
                className="w-full max-w-[285px] h-auto object-contain mb-4 mx-auto rounded"
            />
            <p className="ford-font text-2xl font-semibold text-cyan-300 mb-2">{mustang.nombre}</p>
            <div className="ford-font text-sm text-white text-left">
                <p><strong>Año:</strong> {mustang.año}</p>
                <p><strong>Potencia:</strong> {mustang.hp} HP</p>
                <p><strong>Velocidad Máx:</strong> {mustang.velocidad} MPH</p>
            </div>
        </div>
    );
}
