import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltedCardProps {
    imageSrc?: string;
    altText?: string;
    captionText?: string;
    containerHeight?: string | number;
    containerWidth?: string | number;
    imageHeight?: string | number;
    imageWidth?: string | number;
    rotateAmplitude?: number;
    scaleOnHover?: number;
    showMobileWarning?: boolean;
    showTooltip?: boolean;
    displayOverlayContent?: boolean;
    overlayContent?: React.ReactNode;
    children?: React.ReactNode;
}

const TiltedCard: React.FC<TiltedCardProps> = ({
    imageSrc,
    altText = "Tilted card image",
    captionText = "",
    containerHeight = "300px",
    containerWidth = "300px",
    imageHeight = "300px",
    imageWidth = "300px",
    rotateAmplitude = 12,
    scaleOnHover = 1.1,
    showMobileWarning = false,
    showTooltip = true,
    displayOverlayContent = false,
    overlayContent,
    children
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        [rotateAmplitude, -rotateAmplitude]
    );
    const rotateY = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        [-rotateAmplitude, rotateAmplitude]
    );

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const touch = e.touches[0];
        const touchX = touch.clientX - rect.left;
        const touchY = touch.clientY - rect.top;

        const xPct = touchX / width - 0.5;
        const yPct = touchY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleTouchEnd = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className="relative preserve-3d"
            style={{
                width: containerWidth,
                height: containerHeight,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            whileHover={{ scale: scaleOnHover }}
            whileTap={{ scale: scaleOnHover }}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="w-full h-full"
            >
                {children ? (
                    <div className="w-full h-full" style={{ transform: "translateZ(20px)" }}>
                        {children}
                    </div>
                ) : (
                    imageSrc && (
                        <img
                            src={imageSrc}
                            alt={altText}
                            className="w-full h-full object-cover rounded-xl shadow-xl"
                            style={{
                                width: imageWidth,
                                height: imageHeight,
                            }}
                        />
                    )
                )}

                {displayOverlayContent && overlayContent && (
                    <div
                        className="absolute inset-0 flex items-end p-6 pointer-events-none"
                        style={{ transform: "translateZ(50px)" }}
                    >
                        {overlayContent}
                    </div>
                )}
            </motion.div>

            {showTooltip && captionText && (
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity">
                    {captionText}
                </div>
            )}
        </motion.div>
    );
};

export default TiltedCard;
