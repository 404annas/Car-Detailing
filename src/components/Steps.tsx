"use client";
import React from "react";
import { MessageSquare, ShieldCheck, Key, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Step 1: Selection & Consultation",
    desc: "Everything starts with a conversation. Whether you are browsing our current Sydney showroom stock or utilizing our Global Sourcing service, we help you nail down the specifics.",
    points: [
      { label: "Local Stock", text: "Visit us in Sydney for a test drive and walkthrough." },
      { label: "Global Sourcing", text: "Define the exact make, model, and 'Grade' you desire." }
    ],
    icon: <MessageSquare size={40} className="text-white" />,
  },
  {
    title: "Step 2: Verification & Acquisition",
    desc: "We believe in 'no-surprises' car buying. This is the stage where our expertise saves you money and stress.",
    points: [
      { label: "For Imports", text: "Physical inspection, auction sheet verification, and rust checks." },
      { label: "For Local Sales", text: "Rigorous multi-point check and PPSR title history checks." }
    ],
    icon: <ShieldCheck size={40} className="text-white" />,
  },
  {
    title: "Step 3: Compliance & Handover",
    desc: "The final step is the most rewarding. We handle the paperwork; you enjoy the car.",
    points: [
      { label: "Logistics", text: "We manage shipping, customs, and ADR compliance process." },
      { label: "The Handover", text: "Collect from Sydney or get professional Australia-wide shipping." }
    ],
    icon: <Key size={40} className="text-white" />,
  },
];

const Steps = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- Header Section --- */}
        <div className="text-center mb-10">
          <h2 className="text-green-500 font-bold tracking-widest uppercase text-sm mb-3 orb">
            How We Work
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#161621] uppercase orb mb-6">
            Your Journey to the <br /> Driver’s Seat
          </h3>
          <p className="max-w-4xl mx-auto text-gray-700 leading-6 text-lg">
            At Elite Motor Cars, we’ve stripped away the jargon and the red tape. 
            We’ve refined our process into three distinct phases to ensure you get the 
            right car without the typical dealership headaches.
          </p>
        </div>

        {/* --- Steps Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-left">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col relative">
              {/* Icon Circle */}
              <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mb-6 shadow-md shadow-green-200">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl orb font-bold mb-4 text-[#161621]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-normal mb-6">
                {step.desc}
              </p>

              {/* Points Detail */}
              <div className="space-y-4 mt-auto">
                {step.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg border-l-4 border-green-500">
                    <CheckCircle2 className="text-green-500 mt-1 shrink-0" size={16} />
                    <p className="text-sm text-gray-700">
                      <strong className="text-[#161621]">{point.label}:</strong> {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* --- Footer / Elite Promise --- */}
        <div className="mt-14 bg-[#161621] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-50 h-50 bg-green-500/10 rounded-full -mr-16 -mt-16"></div>
            
            <h4 className="text-green-500 orb font-bold uppercase text-xl mb-4">The Elite Promise</h4>
            <p className="text-white text-xl font-light max-w-4xl mx-auto leading-snug">
              "We don't just find you a car; we secure your investment. From the first search to the final delivery, we represent your interests every step of the way."
            </p>
            
            <button className="mt-8 bg-green-500 text-white px-10 py-4 rounded-xl font-bold hover:bg-green-600 transition-all duration-300 orb uppercase cursor-pointer">
              Book a Consultation
            </button>
        </div>
      </div>
    </section>
  );
};

export default Steps;