import React from 'react';

interface SketchfabViewerProps {
    modelId: string;
    width?: string;
    height?: string;
}

const SketchfabViewer: React.FC<SketchfabViewerProps> = ({
    modelId,
    width = '100%',
    height = '600px',
}) => {
    const src = `https://sketchfab.com/models/${modelId}/embed?autospin=1&autostart=1&preload=1`;

    return (
        <div className="w-full flex justify-center items-center">
            <iframe
                title="Modelo 3D"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking="true"
                execution-while-out-of-viewport="true"
                execution-while-not-rendered="true"
                web-share="true"
                width={width}
                height={height}
                src={src}
            ></iframe>
        </div>
    );
};

export default SketchfabViewer;
