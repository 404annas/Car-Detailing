"use client";
import React from 'react';
import { Globe, ShieldCheck, Truck, Car, HeartHandshake } from 'lucide-react';

const BuySteps = () => {
    // Content data with specific colors for each step
    const values = [
        {
            id: "1",
            title: "We Unlock Global Inventory (Access)",
            content: "You are not limited to what is currently parked in Sydney. We have direct access to wholesale auctions in Japan, specialist dealers in the UK, and private networks across Europe.",
            icon: <Globe className="w-6 h-6 text-[#3498db]" />,
            color: "#3498db" // Light Blue
        },
        {
            id: "2",
            title: "We De-Risk the Import Process (Security)",
            content: "We utilize trusted agents on the ground to physically inspect cars. We handle all compliance engineering (ADR) and certifications internally to ensure safety.",
            icon: <ShieldCheck className="w-6 h-6 text-[#2980b9]" />,
            color: "#2980b9" // Dark Blue
        },
        {
            id: "3",
            title: "We Handle the Logistics 'Red Tape' (Convenience)",
            content: "From the auction floor in Tokyo to your driveway, we handle shipping, customs clearance, import taxes, and insurance. We give you back your time.",
            icon: <Truck className="w-6 h-6 text-[#d63384]" />,
            color: "#d63384" // Purple/Pink
        },
        {
            id: "4",
            title: "Expert Curation of Local Stock (Reliability)",
            content: "We apply rigorous mechanical checks to local trade-ins. If a car doesn't meet our 'Elite' standard, we don't list it. Transparent market pricing.",
            icon: <Car className="w-6 h-6 text-[#e67e22]" />,
            color: "#e67e22" // Orange
        },
        {
            id: "5",
            title: "Post-Sale Support & Community (Longevity)",
            content: "We help customers source OEM and aftermarket parts long after the sale. We advise on maintenance schedules to protect your investment's value.",
            icon: <HeartHandshake className="w-6 h-6 text-[#d4ac0d]" />,
            color: "#d4ac0d" // Dark Yellow
        }
    ];

    return (
        <section className="pt-14 bg-white px-6">
            <div className="max-w-5xl mx-auto">
                {/* Main Heading Section */}
                <div className="mb-14 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        What value and how we add value to our customers
                    </h2>
                    <p className="text-gray-600">
                        More Than Just a Dealership: We Are Your Automotive Partners. Our role is to absorb complexity so you can simply enjoy the drive.
                    </p>
                </div>

                {/* Steps Container */}
                <div className="relative">
                    {values.map((step, index) => (
                        <div key={step.id} className="relative flex gap-0 mb-4 last:mb-0">

                            {/* Left Side: Icon and Vertical Line */}
                            <div className="flex flex-col items-center min-w-[80px]">
                                {/* Circle Icon with dynamic border color */}
                                <div
                                    className="w-14 h-14 rounded-full border-[4px] flex items-center justify-center bg-white z-20 shadow-sm"
                                    style={{ borderColor: step.color }}
                                >
                                    {/* Icon color handled in data or use inline style if needed */}
                                    {step.icon}
                                </div>

                                {/* Vertical Line: Dynamic background color */}
                                {index < values.length - 0 && (
                                    <div
                                        className="w-[4px] flex-grow -mt-1 -mb-1"
                                        style={{ backgroundColor: step.color }}
                                    ></div>
                                )}
                            </div>

                            {/* Right Side: Arrow Heading Bar & Content */}
                            <div className="flex-grow pb-10">
                                <div className="relative flex items-center mb-6">
                                    {/* Horizontal connection line with dynamic color */}
                                    <div
                                        className="absolute -left-5 w-5 h-[4px]"
                                        style={{ backgroundColor: step.color }}
                                    ></div>

                                    {/* The Arrow Bar with dynamic background color */}
                                    <div
                                        className="text-white py-2 px-6 pr-14 text-lg font-bold shadow-md"
                                        style={{
                                            backgroundColor: step.color,
                                            clipPath: 'polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%)',
                                            WebkitClipPath: 'polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%)'
                                        }}
                                    >
                                        Step {step.id}: {step.title}
                                    </div>
                                </div>

                                {/* Content text */}
                                <div className="pl-6">
                                    <p className="text-gray-700 leading-normal font-medium max-w-3xl">
                                        {step.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Closing Footer */}
                <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-[#3498db]">
                    <p className="text-blue-900 font-medium italic">
                        "Experience the Elite Difference: We ensure the only surprise you get is how easy the process was."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BuySteps;