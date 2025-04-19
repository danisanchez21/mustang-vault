import React from 'react';

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="bg-[#1a1a1a] rounded-lg p-4 relative max-w-6xl w-full shadow-2xl">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-4 text-white text-2xl hover:text-red-400"
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
