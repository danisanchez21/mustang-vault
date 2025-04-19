// src/components/HistoryView.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { historyModels } from "../data/historyModels";
import HistoryCard from "./HistoryCard";

export default function HistoryView() {
    const [index, setIndex] = useState(0);
    const current = historyModels[index];

    const goTo = (dir: number) => {
        setIndex((prev) =>
            (prev + dir + historyModels.length) % historyModels.length
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f0f1f] to-[#1c1c30] text-white flex flex-col items-center justify-center p-8">

            {/* Selector de años */}
            <div className="flex gap-6 mb-10 flex-wrap justify-center">
                {historyModels.map((car, i) => (
                    <button
                        key={car.year}
                        onClick={() => setIndex(i)}
                        className={`text-lg md:text-xl font-bold transition px-3 py-1 rounded ${index === i
                                ? "text-cyan-400 underline underline-offset-4"
                                : "text-white/60 hover:text-white"
                            }`}
                    >
                        {car.year}
                    </button>
                ))}
            </div>

            {/* Contenedor con flechas y ficha */}
            <div className="flex items-center justify-center gap-12 w-full">
                <button
                    onClick={() => goTo(-1)}
                    className="text-4xl text-cyan-400 hover:text-white transition"
                >
                    ◀
                </button>

                <motion.div
                    key={current.year}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="w-full max-w-6xl"
                >
                    <HistoryCard car={current} />
                </motion.div>

                <button
                    onClick={() => goTo(1)}
                    className="text-4xl text-cyan-400 hover:text-white transition"
                >
                    ▶
                </button>
            </div>
        </div>
    );

}
