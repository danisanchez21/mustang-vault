import { HistoryModel } from "../data/historyModels";
import {
  EngineIcon,
  HorsepowerIcon,
  SpeedometerIcon,
  TimerIcon,
  PriceTagIcon,
} from "../assets/icons/IconSet"; // 👈 usamos ruta relativa



interface Props {
    car: HistoryModel;
}

export default function HistoryCard({ car }: Props) {
    return (
        <div className="w-full flex flex-col items-center justify-center px-6">
            <h2 className="text-5xl font-bold text-white mb-4 tracking-wide text-center">
                {car.year} <span className="text-cyan-400">{car.model}</span>
            </h2>

            <img
                src={car.image}
                alt={car.model}
                className="w-full max-w-4xl object-contain drop-shadow-2xl"
            />

            <p className="text-center text-white/80 mt-6 max-w-3xl text-lg italic">
                {car.description}
            </p>

            {/* Especificaciones visuales con iconos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10 w-full max-w-4xl">
                <div className="bg-cyan-400/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                    <EngineIcon className="w-6 h-6 text-cyan-400 hover:text-white transition" />
                    <div>
                        <div className="text-white/60 text-sm">Engine</div>
                        <div className="text-white font-semibold">{car.engine}</div>
                    </div>
                </div>

                <div className="bg-cyan-400/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                    <HorsepowerIcon className="w-6 h-6 text-cyan-400 hover:text-white transition" />
                    <div>
                        <div className="text-white/60 text-sm">Power</div>
                        <div className="text-white font-semibold">{car.power}</div>
                    </div>
                </div>

                <div className="bg-cyan-400/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                    <SpeedometerIcon className="w-6 h-6 text-cyan-400 hover:text-white transition" />
                    <div>
                        <div className="text-white/60 text-sm">0–60 mph</div>
                        <div className="text-white font-semibold">{car.acceleration}</div>
                    </div>
                </div>

                <div className="bg-cyan-400/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                    <TimerIcon className="w-6 h-6 text-cyan-400 hover:text-white transition" />
                    <div>
                        <div className="text-white/60 text-sm">1/4 mile</div>
                        <div className="text-white font-semibold">{car.quarterMile}</div>
                    </div>
                </div>

                <div className="bg-cyan-400/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                    <PriceTagIcon className="w-6 h-6 text-cyan-400 hover:text-white transition" />
                    <div>
                        <div className="text-white/60 text-sm">Base Price</div>
                        <div className="text-white font-semibold">{car.basePrice}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
