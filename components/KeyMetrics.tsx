import React, { useEffect, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { Download, Users, Droplet, Star } from 'lucide-react';

interface MetricItemProps {
    icon: React.ReactNode;
    value: string;
    label: string;
    delay?: number;
}

const MetricItem: React.FC<MetricItemProps> = ({ icon, value, label, delay = 0 }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
    const [displayValue, setDisplayValue] = useState("0");

    useEffect(() => {
        if (isInView) {
            // Parse the numeric part and the suffix
            const match = value.match(/^([\d.]+)(.*)$/);
            if (match) {
                const numericValue = parseFloat(match[1]);
                const suffix = match[2];

                motionValue.set(numericValue);

                // Update display value as the spring animates
                const unsubscribe = springValue.on("change", (latest) => {
                    if (value.includes('.')) {
                        setDisplayValue(latest.toFixed(1) + suffix);
                    } else {
                        setDisplayValue(Math.round(latest).toLocaleString() + suffix);
                    }
                });

                return () => unsubscribe();
            }
        }
    }, [isInView, value, motionValue, springValue]);

    return (
        <div ref={ref} className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
            <div className="mb-4 p-3 bg-white dark:bg-gray-700 rounded-full shadow-sm text-primary group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                {displayValue}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {label}
            </div>
        </div>
    );
};

export const KeyMetrics: React.FC = () => {
    const metrics = [
        {
            icon: <Download size={24} />,
            value: "500k+",
            label: "Total Downloads",
            delay: 0
        },
        {
            icon: <Users size={24} />,
            value: "120k+",
            label: "Active Users",
            delay: 200
        },
        {
            icon: <Droplet size={24} />,
            value: "25M+",
            label: "Liters Fuel Saved",
            delay: 400
        },
        {
            icon: <Star size={24} />,
            value: "4.8",
            label: "App Rating",
            delay: 600
        }
    ];

    return (
        <section className="py-12 bg-white dark:bg-gray-900 relative z-20 -mt-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {metrics.map((metric, index) => (
                        <MetricItem
                            key={index}
                            icon={metric.icon}
                            value={metric.value}
                            label={metric.label}
                            delay={metric.delay}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
