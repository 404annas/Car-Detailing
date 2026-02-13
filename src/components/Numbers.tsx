"use client";

import React from "react";
import { Car, Gauge, Tag, MapPin } from "lucide-react";

const stats = [
    {
        id: 1,
        value: "1000+",
        label: "Vehicle fleet",
        icon: <Car size={48} strokeWidth={1.5} />,
        theme: "green",
    },
    {
        id: 2,
        value: "10M+",
        label: "Miles of drive",
        icon: <Gauge size={48} strokeWidth={1.5} />,
        theme: "dark",
    },
    {
        id: 3,
        value: "15K+",
        label: "Booking reserved",
        icon: <Tag size={48} strokeWidth={1.5} />,
        theme: "green",
    },
    {
        id: 4,
        value: "50K+",
        label: "Pickup & drop",
        icon: <MapPin size={48} strokeWidth={1.5} />,
        theme: "dark",
    },
];

const Numbers = () => {
    return (
        <section className="pt-10 pb-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className={`relative rounded-[30px] overflow-hidden shadow-sm transition-transform duration-300 hover:-translate-y-2
                ${stat.theme === "green"
                                    ? "bg-green-500" // Green Card
                                    : "bg-[#161621]" // Dark Card
                                }
              `}
                        >
                            {/* --- Background Geometric Shapes (Now Green Tined) --- */}
                            <div className="absolute inset-0 pointer-events-none opacity-30">
                                {/* Diagonal split effect */}
                                <div
                                    className={`absolute top-0 right-0 w-full h-full 
                    ${stat.theme === "green"
                                            ? "bg-green-400" // Lighter green shape on Green Card
                                            : "bg-green-500/10" // Faint green shape on Dark Card
                                        }
                  `}
                                    style={{
                                        clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
                                    }}
                                ></div>
                                <div
                                    className={`absolute top-0 left-0 w-full h-full 
                    ${stat.theme === "green"
                                            ? "bg-green-600" // Darker green shape on Green Card
                                            : "bg-green-900/20" // Dark green shape on Dark Card
                                        }
                  `}
                                    style={{
                                        clipPath: "polygon(0 0, 50% 0, 0 50%)",
                                    }}
                                ></div>
                            </div>

                            {/* --- Inner Content with Border Line (Now Green) --- */}
                            <div className="p-3 h-full relative z-10">
                                <div
                                    className={`h-full w-full rounded-[24px] border border-opacity-40 flex flex-col items-center justify-center py-12 space-y-4
                    ${stat.theme === "green"
                                            ? "border-green-800" // Dark Green line on Green card
                                            : "border-green-500" // Bright Green line on Dark card
                                        }
                  `}
                                >
                                    {/* Icon */}
                                    <div
                                        className={`mb-2
                      ${stat.theme === "green"
                                                ? "text-[#161621]" // Dark Icon on Green
                                                : "text-green-500" // Green Icon on Dark
                                            }
                    `}
                                    >
                                        {stat.icon}
                                    </div>

                                    {/* Number Value */}
                                    <h3 className="text-5xl font-bold text-white tracking-wide orb">
                                        {stat.value}
                                    </h3>

                                    {/* Label */}
                                    <p
                                        className={`font-medium text-lg orb capitalize tracking-wide
                      ${stat.theme === "green"
                                                ? "text-[#161621]" // Dark Text on Green
                                                : "text-green-500" // Green Text on Dark
                                            }
                    `}
                                    >
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Numbers;