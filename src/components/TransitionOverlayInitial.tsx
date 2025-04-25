import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mustangLogo from "/assets/logo-ford.png";

interface Props {
    onFinish: () => void;
}

export default function TransitionOverlayInitial({ onFinish }: Props) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false);
            setTimeout(onFinish, 500); // esperar al fade
        }, 1100);

        return () => clearTimeout(timeout);
    }, [onFinish]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="fixed inset-0 bg-black z-[1000] flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                >
                    <motion.img
                        src={mustangLogo}
                        alt="Mustang Logo"
                        className="w-48 h-auto"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.2, opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
