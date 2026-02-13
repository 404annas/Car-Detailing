"use client";

import React from "react";
import { Car, CarFront, Plane, ShieldCheck } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Corporate car rental",
    description: "Open multipy a green form lesser their from in made herb multiply",
    icon: <CarFront size={40} strokeWidth={1.5} />,
  },
  {
    id: "02",
    title: "Car rental with driver",
    description: "Open multipy a green form lesser their from in made herb multiply",
    icon: <Car size={40} strokeWidth={1.5} />,
  },
  {
    id: "03",
    title: "Airport transfer",
    description: "Open multipy a green form lesser their from in made herb multiply",
    icon: <Plane size={40} strokeWidth={1.5} />,
  },
  {
    id: "04",
    title: "Fleet leasing",
    description: "Open multipy a green form lesser their from in made herb multiply",
    icon: <ShieldCheck size={40} strokeWidth={1.5} />,
  },
];

const Offering = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
             <Car className="text-green-500" size={22} />
             <span className="text-green-500 orb font-bold uppercase tracking-widest text-sm">
              What We're Offering
            </span>
          </div>
         
          <h2 className="text-4xl md:text-5xl orb font-extrabold text-[#161621] uppercase leading-none">
            Services We're Providing <br /> To Customers
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
                <div
                    key={service.id}
                    className="group relative bg-[#161621] rounded-[30px] overflow-hidden border-b-[8px] border-green-500 transition-transform duration-300 hover:-translate-y-2 shadow-sm"
                >
                    {/* --- Geometric Background Effect --- */}
                    <div className="absolute inset-0 pointer-events-none">
                        {/* Darker Triangle Overlay (Right Side) */}
                        <div className="absolute top-0 right-0 w-3/4 h-full bg-black/20"
                            style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}>
                        </div>
                        
                        {/* Lighter Triangle Overlay (Left Side) */}
                        <div className="absolute top-0 left-0 w-full h-full bg-white/5"
                            style={{ clipPath: "polygon(0 0, 70% 0, 0 70%)" }}>
                        </div>
                    </div>

                    {/* --- Content --- */}
                    <div className="relative p-6 pt-10 pb-10">

                        {/* Icon Section */}
                        <div className="text-green-500 mb-10 relative z-10 inline-block">
                            {/* Dashed Circle Animation */}
                            <div className="absolute -left-3 -top-3 w-[64px] h-[64px] rounded-full border border-dashed border-green-500/50 animate-spin-slow"></div>
                            <div className="relative z-10">
                                {service.icon}
                            </div>
                        </div>

                        {/* Number Box (Floating on Right Edge) */}
                        <div className="absolute right-0 top-[30%] bg-white text-[#161621] font-bold text-xl py-3 pl-4 pr-3 rounded-l-xl shadow-lg orb z-20">
                            {service.id}
                        </div>

                        {/* Text Content */}
                        <h3 className="text-green-500 orb text-lg font-bold mb-3 transition-colors group-hover:text-white">
                            {service.title}
                        </h3>
                        <p className="text-gray-400 text-sm font-medium leading-normal">
                            {service.description}
                        </p>

                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Offering;