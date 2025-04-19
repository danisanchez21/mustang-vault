import { useEffect, useRef, useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import "./GridMotion.css";

interface Section {
    title: string;
    subtitle: string;
    image: string;
    onClick: () => void;
}

interface GridMotionProps {
    sections: Section[];
    gradientColor?: string;
}

const GridMotion: FC<GridMotionProps> = ({
    sections,
    gradientColor = "black",
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
    const mouseXRef = useRef<number>(window.innerWidth / 2);

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [exitStarted, setExitStarted] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        gsap.ticker.lagSmoothing(0);

        const handleMouseMove = (e: MouseEvent) => {
            mouseXRef.current = e.clientX;
        };

        const updateMotion = () => {
            const maxMoveAmount = 150;
            const baseDuration = 0.8;
            const inertiaFactors = [0.4, 0.3];

            rowRefs.current.forEach((row, index) => {
                if (row) {
                    const direction = index % 2 === 0 ? 1 : -1;
                    const moveAmount =
                        ((mouseXRef.current / window.innerWidth) * maxMoveAmount -
                            maxMoveAmount / 2) * direction;

                    gsap.to(row, {
                        x: moveAmount,
                        duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
                        ease: "power3.out",
                        overwrite: "auto",
                    });
                }
            });
        };

        const removeAnimationLoop = gsap.ticker.add(updateMotion);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            removeAnimationLoop();
        };
    }, []);

    return (
        <div className="noscroll loading overflow-visible" ref={containerRef}>
            <motion.section
                className="intro flex flex-col items-center justify-center pt-4 pb-16 overflow-visible"
                style={{
                    background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
                }}
                initial={{ opacity: 1 }}
                animate={exitStarted ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <div className="gridMotion-container custom-cols overflow-visible">
                    {sections.map((section, idx) => (
                        <div
                            key={idx}
                            className="row custom-row"
                            ref={(el) => {
                                rowRefs.current[idx] = el;
                            }}
                        >
                            <div className="row__item scale-110">
                                <motion.div
                                    className="row__item-inner shadow-2xl rounded-xl overflow-hidden group transition duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.7)]"
                                    initial={{ scale: 1, opacity: 1, rotate: 0 }}
                                    animate={
                                        selectedIndex === idx
                                            ? { scale: 1.5, opacity: 0, rotate: 15 }
                                            : { scale: 1, opacity: 1, rotate: 0 }
                                    }
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                >
                                    <div
                                        className="relative w-full h-full cursor-pointer group"
                                        onClick={() => {
                                            setSelectedIndex(idx);
                                            setExitStarted(true);
                                            setTimeout(() => {
                                                section.onClick();
                                                navigate(`/${section.title.toLowerCase()}`);
                                            }, 600);
                                        }}
                                    >
                                        <img
                                            src={section.image}
                                            alt={section.title}
                                            className="absolute inset-0 w-full h-full object-cover object-center z-0 rounded-xl"
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10 rounded-xl" />
                                        <div className="absolute bottom-4 left-4 text-white z-20">
                                            <h2 className="text-lg font-bold italic">{section.title}</h2>
                                            <p className="text-sm opacity-80 italic">{section.subtitle}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
};

export default GridMotion;
