import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    direction?: "left" | "right" | "up" | "down";
}

export const Reveal: React.FC<RevealProps> = ({ children, width = "100%", delay = 0.25, direction = "up" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const getVariants = () => {
        switch (direction) {
            case "left":
                return { hidden: { opacity: 0, x: -75 }, visible: { opacity: 1, x: 0 } };
            case "right":
                return { hidden: { opacity: 0, x: 75 }, visible: { opacity: 1, x: 0 } };
            case "down":
                return { hidden: { opacity: 0, y: -75 }, visible: { opacity: 1, y: 0 } };
            case "up":
            default:
                return { hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } };
        }
    };

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "visible" }}>
            <motion.div
                variants={getVariants()}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: delay }}
            >
                {children}
            </motion.div>
        </div>
    );
};
