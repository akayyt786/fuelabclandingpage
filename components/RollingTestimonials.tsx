import React from 'react';
import { Quote } from 'lucide-react';

const reviews = [
    {
        name: "Rahul Sharma",
        role: "Daily Commuter",
        content: "FUELabc helped me save ₹500 this month! I never realized how much difference taking the 'slightly slower' route makes to my pocket.",
        image: "https://picsum.photos/100/100?random=1"
    },
    {
        name: "Priya Patel",
        role: "Uber Driver",
        content: "For a cab driver, fuel is the biggest expense. This app increased my profit margin by 15%. Highly recommended!",
        image: "https://picsum.photos/100/100?random=2"
    },
    {
        name: "Vikram Singh",
        role: "Road Trip Enthusiast",
        content: "Used it for my trip from Mumbai to Goa. The fuel station price comparison feature alone saved me huge bucks.",
        image: "https://picsum.photos/100/100?random=3"
    },
    {
        name: "Anita Desai",
        role: "Fleet Manager",
        content: "Managing 50 trucks is no joke. FUELabc's analytics helped us cut down fuel wastage by 10% across the fleet.",
        image: "https://picsum.photos/100/100?random=4"
    },
    {
        name: "Arjun Kumar",
        role: "Bike Rider",
        content: "Even for my bike, the savings add up. The maintenance alerts are a lifesaver too.",
        image: "https://picsum.photos/100/100?random=5"
    }
];

export const RollingTestimonials: React.FC = () => {
    return (
        <div className="relative w-full overflow-hidden mask-gradient">
            <div className="flex animate-scroll hover:pause space-x-8 w-max">
                {[...reviews, ...reviews].map((review, index) => (
                    <div
                        key={index}
                        className="w-[350px] flex-shrink-0 bg-gray-800/50 dark:bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-primary/50 transition-colors duration-300"
                    >
                        <Quote className="text-primary mb-6" size={32} />
                        <p className="text-gray-300 mb-8 italic leading-relaxed line-clamp-4">"{review.content}"</p>
                        <div className="flex items-center space-x-4">
                            <img
                                src={review.image}
                                alt={review.name}
                                className="w-12 h-12 rounded-full border-2 border-primary object-cover"
                            />
                            <div>
                                <h4 className="font-bold text-white">{review.name}</h4>
                                <p className="text-sm text-gray-400">{review.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
