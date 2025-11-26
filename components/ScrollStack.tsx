import React from 'react';

interface ScrollStackProps {
    children: React.ReactNode;
    className?: string;
}

export const ScrollStack: React.FC<ScrollStackProps> = ({ children, className = '' }) => {
    return (
        <div className={`relative w-full ${className}`}>
            {children}
        </div>
    );
};

interface ScrollStackItemProps {
    children: React.ReactNode;
    className?: string;
    offset?: number;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, className = '', offset = 80 }) => {
    return (
        <div
            className={`sticky top-0 w-full bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300 ${className}`}
            style={{ top: `${offset}px` }}
        >
            {children}
        </div>
    );
};
