"use client";
import React from "react";
// Humne relevant icons import kiye hain
import { 
  CarFront, 
  Search, 
  MapPin, 
  Globe, 
  ShieldCheck, 
  CheckCircle2, 
  Car, 
  ArrowRight
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Unrivalled Import Expertise",
    description: "We don’t just sell cars; we understand the culture behind.",
    icon: <Globe size={40} strokeWidth={1.5} />,
  },
  {
    id: "02",
    title: "Bespoke Global Sourcing Service",
    description: "Can't find what you are looking for in Australia?",
    icon: <Search size={40} strokeWidth={1.5} />,
  },
  {
    id: "03",
    title: "A Curated Selection of Local Favourites",
    description: "While we love imports, we are deeply rooted in Sydney.",
    icon: <MapPin size={40} strokeWidth={1.5} />,
  },
  {
    id: "04",
    title: "We Do Ship Australia Wide",
    description: "Based in Sydney, but serving the nation.",
    icon: <CarFront size={40} strokeWidth={1.5} />,
  },
  {
    id: "05",
    title: "Compliance & Quality You Can Trust",
    description: "The grey import market can be navigating the unknown.",
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
              Your Gateway to Global Automotive Excellence
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl orb font-extrabold text-[#161621] uppercase leading-none">
            Why Choose <br /> Elite Motor cars ?
          </h2>

          <p className="pt-6 max-w-5xl mx-auto text-lg leading-6">
            At Elite Motor Cars, we believe buying a car shouldn't just be a transaction; it should be an experience fueled by passion and precision. Whether you are a collector hunting for a rare Skyline, a professional seeking a German luxury sedan, or a family looking for a reliable local SUV, we bridge the gap between Sydney and the world’s best automotive markets.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-[#161621] rounded-[30px] overflow-hidden border-b-[8px] border-green-500 transition-transform duration-300 hover:-translate-y-2 shadow-sm
                `}
            >
              {/* Geometric Background Effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-3/4 h-full bg-black/20"
                  style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-white/5"
                  style={{ clipPath: "polygon(0 0, 70% 0, 0 70%)" }}>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 pt-10 pb-10">

                {/* Icon Section */}
                <div className="text-green-500 mb-10 relative z-10 inline-block">
                  <div className="absolute -left-3 -top-3 w-[64px] h-[64px] rounded-full border border-dashed border-green-500/50 animate-spin-slow"></div>
                  <div className="relative z-10">
                    {service.icon}
                  </div>
                </div>

                {/* Number Box */}
                <div className="absolute right-0 top-[15%] bg-white text-[#161621] font-bold text-xl py-3 pl-4 pr-3 rounded-l-xl shadow-lg orb z-20">
                  {service.id}
                </div>

                {/* Text Content */}
                <h3 className="text-green-500 orb text-base font-bold mb-3 transition-colors group-hover:text-white duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm font-medium leading-normal mb-4">
                  {service.description}
                </p>

                <button className="text-green-500 hover:underline hover:translate-y-1 transition-all duration-300 flex items-center gap-2 text-sm cursor-pointer">Read More <ArrowRight size={18}/></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-10 bg-gradient-to-br from-[#0B1324] to-[#070E1A] max-w-6xl mx-auto text-white rounded-3xl mt-10 text-center">
        <h1 className="uppercase text-4xl font-bold pb-4">Ready to find your <span className="text-green-500">dream car ?</span></h1>
        <p className="max-w-4xl mx-auto text-lg leading-6 pb-8">Stop searching and start driving. Visit our Sydney showroom to view our current stock, or contact our team to discuss sourcing a specific vehicle from overseas.</p>
        <button className="px-8 py-3 bg-green-500 hover:bg-green-600 shadow-[0_10px_30px_-10px_rgba(34,197,94,0.5)] transition-all duration-300 cursor-pointer rounded-xl text-white text-lg uppercase font-semibold">Drive the Elite way</button>
      </div>
    </section>
  );
};

export default Offering;