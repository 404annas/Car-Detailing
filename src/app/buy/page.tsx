"use client";
import BuySteps from '@/components/BuySteps';
import React from 'react';

const HowToBuy = () => {
    // Steps data based on the image
    const steps = [
        {
            id: "01",
            text: "Select a car & send inquiry",
            bgColor: "bg-[#3498db]", // Light Blue
            borderColor: "border-[#3498db]",
        },
        {
            id: "02",
            text: "Receive details by email & in My Inquiry",
            bgColor: "bg-[#2980b9]", // Darker Blue
            borderColor: "border-[#1a5276]",
        },
        {
            id: "03",
            text: "Confirm & get invoice",
            bgColor: "bg-[#c0392b]", // Actually Purple/Pink in image, using #d63384
            customBg: "bg-[#d63384]",
            borderColor: "border-[#d63384]",
        },
        {
            id: "04",
            text: "Pay & Share payment proof (T/T copy)",
            bgColor: "bg-[#e67e22]", // Orange
            borderColor: "border-[#e67e22]",
        },
        {
            id: "05",
            text: "Receive the car",
            bgColor: "bg-[#f1c40f]", // Mustard Yellow
            customBg: "bg-[#d4ac0d]",
            borderColor: "border-[#d4ac0d]",
        },
    ];

    return (
        <section className="py-10 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Heading */}
                <h2 className="text-3xl font-bold text-[#333] mb-12 ml-2">How to buy ?</h2>

                {/* Steps Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`flex items-center rounded-full overflow-hidden h-16 shadow-sm ${step.customBg || step.bgColor}`}
                        >
                            {/* Circular ID Part */}
                            <div className="bg-white m-1 rounded-full min-w-[50px] h-[50px] flex items-center justify-center">
                                <span className={`text-xl font-bold ${index === 0 ? 'text-[#3498db]' : index === 1 ? 'text-[#2980b9]' : index === 2 ? 'text-[#d63384]' : index === 3 ? 'text-[#e67e22]' : 'text-[#d4ac0d]'}`}>
                                    {step.id}
                                </span>
                            </div>

                            {/* Step Text */}
                            <div className="px-3 pr-6 text-white text-sm font-semibold leading-tight">
                                {step.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <BuySteps />
        </section>
    );
};

export default HowToBuy;