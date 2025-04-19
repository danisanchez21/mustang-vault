import React, { useEffect, useRef, FC } from "react";
import { gsap } from "gsap";
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
    sections = [],
    gradientColor = "black",
}) => {
    const gridRef = useRef<HTMLDivElement>(null);
    const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
    const mouseXRef = useRef<number>(window.innerWidth / 2);

    const totalItems = 28;
    const items: (JSX.Element | string)[] = Array.from({ length: totalItems }, (_, index) => {
        if (index === 10 && sections[0]) return renderSection(sections[0]);
        if (index === 11 && sections[1]) return renderSection(sections[1]);
        if (index === 17 && sections[2]) return renderSection(sections[2]);
        if (index === 18 && sections[3]) return renderSection(sections[3]);
        return <div className="row__item-placeholder text-white text-xs text-center">Mustang</div>;
    });

    useEffect(() => {
        gsap.ticker.lagSmoothing(0);

        const handleMouseMove = (e: MouseEvent): void => {
            mouseXRef.current = e.clientX;
        };

        const updateMotion = (): void => {
            const maxMoveAmount = 300;
            const baseDuration = 0.8;
            const inertiaFactors = [0.6, 0.4, 0.3, 0.2];

            rowRefs.current.forEach((row, index) => {
                if (row) {
                    const direction = index % 2 === 0 ? 1 : -1;
                    const moveAmount = ((mouseXRef.current / window.innerWidth) * maxMoveAmount - maxMoveAmount / 2) * direction;

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
        <div className="noscroll loading" ref={gridRef}>
            <section
                className="intro"
                style={{ background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)` }}
            >
                <div className="gridMotion-container">
                    {Array.from({ length: 4 }, (_, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="row"
                            ref={(el: HTMLDivElement | null) => {
                                rowRefs.current[rowIndex] = el;
                            }}
                        >
                            {Array.from({ length: 7 }, (_, itemIndex) => {
                                const item = items[rowIndex * 7 + itemIndex];
                                return (
                                    <div key={itemIndex} className="row__item">
                                        <div className="row__item-inner">{item}</div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
                <div className="fullview"></div>
            </section>
        </div>
    );
};

const renderSection = (section: Section): JSX.Element => (
    <div
        className="relative w-full h-full cursor-pointer group"
        onClick={section.onClick}
    >
        <img
            src={section.image}
            alt={section.title}
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10" />
        <div className="absolute bottom-4 left-4 text-white z-20">
            <h2 className="text-lg font-bold italic">{section.title}</h2>
            <p className="text-sm opacity-80 italic">{section.subtitle}</p>
        </div>
    </div>
);

export default GridMotion;
