import { motion, AnimatePresence } from "framer-motion";

interface TransitionOverlayProps {
    isVisible: boolean;
}

export default function TransitionOverlay({ isVisible }: TransitionOverlayProps) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 bg-black z-[1000] flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <motion.img
                        src="/assets/logo-ford.png"
                        alt="Logo Mustang"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="w-40 h-auto"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
