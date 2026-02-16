import React from 'react';
import { ChevronRight } from 'lucide-react';

// Images import karein
import sell1 from "@/assets/sell1.svg";
import sell2 from "@/assets/sell2.svg";
import sell3 from "@/assets/sell3.svg";
import sell4 from "@/assets/sell4.svg";

const SellCar = () => {
    // Data array taake code clean rahe
    const steps = [
        {
            img: sell1.src,
            title: "Let’s talk about your car",
            desc: "Tell us about your beloved and get an instant online quote",
            linkText: "Get quote",
        },
        {
            img: sell2.src,
            title: "Pick a day",
            desc: "Tell us about your beloved and get an instant online quote",
            linkText: "Get quote",
        },
        {
            img: sell3.src,
            title: "Credited, the same day",
            desc: "Tell us about your beloved and get an instant online quote",
            linkText: "Sell car",
        },
        {
            img: sell4.src,
            title: "Sit back, relax. Car in Transit",
            desc: "Tell us about your beloved and get an instant online quote",
            linkText: "Sell car",
        },
    ];

    return (
        <section className="py-10 px-4 bg-white max-w-7xl mx-auto">
            {/* Header with horizontal lines */}
            <div className="flex items-center justify-center mb-10">
                <div className="hidden md:block h-[1px] bg-[#9ca6ff] flex-grow max-w-[200px]"></div>
                <h2 className="text-[#050c4e] text-2xl md:text-3xl font-bold px-6 text-center">
                    Sell your car for the Best Price
                </h2>
                <div className="hidden md:block h-[1px] bg-[#9ca6ff] flex-grow max-w-[200px]"></div>
            </div>

            {/* Grid for Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        {/* Image Container */}
                        <div className="h-50 flex items-center justify-center mb-8">
                            <img
                                src={step.img}
                                alt={step.title}
                                className="max-h-full w-auto object-contain"
                            />
                        </div>

                        {/* Content */}
                        <h3 className="text-[#050c4e] font-bold text-lg mb-3 leading-tight">
                            {step.title}
                        </h3>
                        <p className="text-gray-500 text-sm mb-4 leading-relaxed max-w-[250px]">
                            {step.desc}
                        </p>

                        {/* Action Link */}
                        <a
                            href="#"
                            className="text-[#050c4e] font-bold text-sm flex items-center hover:underline transition-all duration-300"
                        >
                            {step.linkText} <ChevronRight size={16} className="ml-1" />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SellCar;