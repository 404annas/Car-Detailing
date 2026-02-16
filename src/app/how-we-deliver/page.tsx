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
            title: "We Unlock Global Inventory (Access)",
            desc: "You are not limited to what is currently parked in Sydney. We access wholesale auctions in Japan, specialist dealers in the UK, and private networks across Europe to source vehicles unavailable in the local market.",
            img: work1,
        },
        {
            id: "2",
            title: "We De-Risk the Import Process (Security)",
            desc: "We transform the grey market into a transparent and safe transaction through forensic inspections, auction sheet translations, odometer verification, and full Australian Design Rules (ADR) compliance.",
            img: work3,
        },
        {
            id: "3",
            title: "We Handle Logistics & Red Tape (Convenience)",
            desc: "From the auction floor in Tokyo to your driveway in Australia, we manage shipping, customs clearance, import taxes, insurance, and secure door-to-door delivery nationwide.",
            img: work2,
        },
        {
            id: "4",
            title: "Expert Curation of Local Stock (Reliability)",
            desc: "Every vehicle meets the Elite Standard. We apply rigorous mechanical and cosmetic inspections and use real-time market data to ensure transparent and competitive pricing.",
            img: work4,
        },
        {
            id: "5",
            title: "Post-Sale Support & Community (Longevity)",
            desc: "Our relationship continues beyond the sale. We assist with OEM and aftermarket parts sourcing and provide expert maintenance guidance to protect your vehicle’s long-term value.",
            img: work5,
        }
    ];

    return (
        <section className="py-10 px-4 bg-white">
            {/* --- Heading Part --- */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-[#050c4e] mb-4">
                    More Than Just a Dealership: We Are Your Automotive Partners
                </h2>
                <p className="text-gray-500 max-w-3xl mx-auto text-base leading-relaxed">
                    At Elite Motor Cars, we define value as the intersection of access, peace of mind, and simplicity. Buying a specialized import or luxury European vehicle can be complex and risky — our role is to absorb that complexity so you can simply enjoy the drive.
                </p>
                <button className="mt-8 border-2 border-[#050c4e] text-[#050c4e] font-bold py-2 px-8 rounded-lg hover:bg-[#050c4e] hover:text-white transition-all text-sm cursor-pointer duration-300">
                    Experience the Elite Difference &gt;
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
                                <div className={`relative z-10 ${index % 2 !== 0 ? "right-24" : "left-50"}`}>
                                    <h3 className="text-xl font-bold text-[#050c4e] mb-4">{step.title}</h3>
                                    <p className="text-gray-600 text-sm leading-normal max-w-sm">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Image Side */}
                            <div className="flex-1 flex justify-center z-10">
                                <div className="relative w-[320px] h-[250px]">
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