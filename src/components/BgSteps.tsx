import React from 'react';

import stepsMainImg from "@/assets/stepsMain.jpg"

const steps = [
  {
    id: 1,
    title: "Choose a vehicle",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
  },
  {
    id: 2,
    title: "Pick location & date",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
  },
  {
    id: 3,
    title: "Make a booking",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
  },
  {
    id: 4,
    title: "Sit back & relax",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
  }
];

const BgSteps = () => {
  return (
    <section 
      className="relative w-full py-20 lg:py-28 bg-cover bg-center bg-fixed bg-no-repeat"
      style={{
        // 1. PUT YOUR IMAGE URL HERE INSIDE THE QUOTES
        backgroundImage: `url(${stepsMainImg.src})` 
      }}
    >
      {/* 2. Dark Overlay (Makes text readable) */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 container mx-auto px-6 sm:px-12">
        
        <div className="relative">
          {/* 3. The Green Connector Line (Desktop Only) */}
          {/* Positioned to align with the center of the green boxes */}
          <div className="hidden lg:block absolute top-6 left-10 right-10 h-[1px] bg-green-600/60 z-0"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step) => (
              <div key={step.id} className="relative z-10 flex flex-col items-start group">
                
                {/* Green Number Box */}
                <div className="w-12 h-12 bg-[#2ecc71] rounded-md flex items-center justify-center text-white font-bold text-xl orb shadow-lg mb-6 transition-transform duration-300 group-hover:-translate-y-1">
                  {step.id}
                </div>

                {/* Text Content */}
                <h3 className="text-white orb text-xl font-bold mb-4 tracking-wide">
                  {step.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed opacity-90">
                  {step.description}
                </p>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default BgSteps