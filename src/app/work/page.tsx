"use client";
import React from 'react';
import Image from "next/image";

// Assets import
import work1 from "@/assets/work1.svg";
import work2 from "@/assets/work2.svg";
import work3 from "@/assets/work3.svg";
import work4 from "@/assets/work4.svg";
import work5 from "@/assets/work5.svg";
import line1 from "@/assets/line1.svg";
import line2 from "@/assets/line2.svg";

const WorkSection = () => {
    const steps = [
        {
            id: "1",
            title: "God is in the details",
            desc: "A detailed 200 point inspection report for every single car - features, specs, price, financing and buyback options, you name it.",
            img: work1,
        },
        {
            id: "2",
            title: "A test drive to remember",
            desc: "Test drive any of our cars at your home or at a Spinny car hub and see if it's what you've always wanted.",
            img: work2,
        },
        {
            id: "3",
            title: "Paperwork? Leave it to us.",
            desc: "From RC transfer to insurance, we handle all the documentation so you can focus on the joy of your new car.",
            img: work3,
        },
        {
            id: "4",
            title: "Drive home with confidence",
            desc: "Get 1-year warranty and a 5-day money-back guarantee. If you don't love it, we'll take it back, no questions asked.",
            img: work4,
        },
        {
            id: "5",
            title: "Welcome to the family",
            desc: "Our relationship doesn't end with the sale. We're here for all your post-purchase needs and services.",
            img: work5,
        }
    ];

    return (
        <section className="py-10 px-4 bg-white">
            {/* --- Heading Part --- */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-[#1a064e] mb-4">Car joy, assured.</h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
                    Whether it's a first set of wheels you're after, or something bigger for everybody in the family or that big upgrade, with us you'll be a happy car owner, confident about your purchase.
                </p>
                <button className="mt-8 border-2 border-[#6b21a8] text-[#6b21a8] font-bold py-2 px-8 rounded-lg hover:bg-[#6b21a8] hover:text-white transition-all text-sm cursor-pointer duration-300">
                    Buy Car &gt;
                </button>
            </div>

            {/* --- Steps Container --- */}
            <div className="max-w-5xl mx-auto">
                {steps.map((step, index) => (
                    <div key={step.id} className="flex flex-col">
                        {/* Main Content Row */}
                        <div className={`flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 
              ${index % 2 !== 0 ? "md:flex-row-reverse" : "text-left"}`}>

                            {/* Text Side with Hollow Number */}
                            <div className="flex-1 relative group">
                                {/* Hollow/Outline Number - Picture style positioning */}
                                <span
                                    className={`absolute top-[-20px] text-[160px] font-black leading-none select-none z-0
                  ${index % 2 !== 0 ? "right-15" : "left-15"}
                  `}
                                    style={{
                                        WebkitTextStroke: "1px #9ca3af", // Light grey outline
                                        color: "transparent", // Transparent inside
                                    }}
                                >
                                    {step.id}
                                </span>

                                {/* Actual Content */}
                                <div className={`relative z-10 ${index % 2 !== 0 ? "right-20" : "left-50"}`}>
                                    <h3 className="text-2xl font-bold text-[#1a064e] mb-4">{step.title}</h3>
                                    <p className="text-gray-600 text-base leading-normal max-w-sm">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Image Side */}
                            <div className="flex-1 flex justify-center z-10">
                                <div className="relative w-[320px] h-[240px]">
                                    <Image
                                        src={step.img}
                                        alt={step.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Dotted Lines (1 -> 2 -> 1 -> 2) */}
                        {index < steps.length - 1 && (
                            <div className="w-full flex justify-center">
                                <div className="w-[80%] opacity-60">
                                    <Image
                                        src={index % 2 === 0 ? line1 : line2}
                                        alt="separator"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                        )}
                        
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkSection;