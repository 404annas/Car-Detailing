import React from 'react';
import Image from 'next/image';

interface Step {
    id: number;
    title: string;
    description: string;
    image: string;
}

import line from "@/assets/line.png"
import stepCard1 from "@/assets/stepCard1.png"
import stepCard2 from "@/assets/stepCard2.png"
import stepCard3 from "@/assets/stepCard3.png"

const stepsData: Step[] = [
    {
        id: 1,
        title: "Search vehicle?",
        description: "Lorem ipsum dolor sit amet, conse li tetur sadipscing elitr, sed nonumy na irmod tempor invidunt ut.",
        image: stepCard1.src,
    },
    {
        id: 2,
        title: "Communicate?",
        description: "Lorem ipsum dolor sit amet, conse li tetur sadipscing elitr, sed nonumy na irmod tempor invidunt ut.",
        image: stepCard2.src,
    },
    {
        id: 3,
        title: "Book vehicle?",
        description: "Lorem ipsum dolor sit amet, conse li tetur sadipscing elitr, sed nonumy na irmod tempor invidunt ut.",
        image: stepCard3.src,
    },
];

const StepCards: React.FC = () => {
    return (
        <section className="py-10 px-4">
            <div className="max-w-6xl mx-auto text-center">
                {/* Top small heading */}
                <p className="text-sm font-bold tracking-widest text-gray-800 uppercase mb-2">
                    how do i rent a car?
                </p>

                {/* Main Title with the orange line */}
                <div className="relative inline-block mb-16">
                    <h2 className="text-4xl md:text-5xl orb font-extrabold text-black">
                        Booking car hire in three <br className="hidden md:block" />
                        simple <span className="relative">steps</span>
                    </h2>
                    {/* Line image positioning */}
                    <div className="absolute -bottom-6 right-0 left-1/2 transform -translate-x-1/2 md:left-auto md:translate-x-0 md:right-35">
                        <Image src={line.src} alt="line" width={200} height={10} />
                    </div>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-center">
                    {stepsData.map((step) => (
                        <div
                            key={step.id}
                            className="group relative z-10 p-10 transition-all duration-500 ease-in-out 
                         bg-gray-100 hover:bg-white hover:scale-105 hover:shadow-sm 
                         hover:z-20 rounded-2xl flex flex-col items-center text-center cursor-pointer"
                        >
                            {/* Card Image */}
                            <div className="mb-8 h-40 w-full relative flex items-center justify-center">
                                <img
                                loading='lazy'
                                    src={step.image}
                                    alt={step.title}
                                    className="max-h-full object-cover"
                                />
                            </div>

                            {/* Step Number */}
                            <p className="text-orange-500 font-bold uppercase tracking-wider text-lg orb mb-2">
                                STEP {step.id}:
                            </p>

                            {/* Step Title */}
                            <h3 className="text-2xl orb font-bold text-gray-900 mb-4">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-500 font-medium text-sm max-w-xs">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StepCards;