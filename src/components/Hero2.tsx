"use client"

import { Car, CarFront, Check, LocateFixed, Search, Truck, Van } from "lucide-react";
import { GiJeep } from "react-icons/gi";
import React, { useState, useEffect } from "react";
import { TbCarSuv } from "react-icons/tb";

import heroMainImg1 from "@/assets/heroCarMain1.jpg"
import heroMainImg2 from "@/assets/heroCarMain2.jpg"
import heroMainImg3 from "@/assets/heroCarMain3.jpg"

import underlineImg from "@/assets/line.png";

const Hero2 = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [activeTab, setActiveTab] = useState("Cars");

    const bgImages = [
        heroMainImg1.src,
        heroMainImg2.src,
        heroMainImg3.src,
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % bgImages.length);
        }, 3500);
        return () => clearInterval(timer);
    }, []);

    const tabs = [
        { id: "Cars", icon: <Car size={30} /> },
        { id: "vans", icon: <Van size={30} /> },
        { id: "suv", icon: <TbCarSuv size={30} /> },
        { id: "jeep", icon: <GiJeep size={30} /> },
    ];

    return (
        <section className="relative min-h-screen w-full overflow-hidden flex items-center py-20 lg:py-0">
            {/* BACKGROUND IMAGES */}
            {bgImages.map((img, index) => (
                <div
                    key={img}
                    className={`absolute inset-0 bg-cover bg-center 
                        transition-all duration-[1400ms] ease-in-out
                        pointer-events-none z-0
                        ${index === currentImage
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-110"
                        }`}
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${img})`,
                    }}
                />
            ))}

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center h-full">

                {/* LEFT CONTENT */}
                <div className="text-white w-full max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl orb font-extrabold leading-none lg:leading-none">
                        Looking to hire <br />
                        <span className="relative inline-block mt-2 lg:mt-0">
                            a vehicle?
                            <svg
                                width="400"
                                height="30"
                                viewBox="0 0 180 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="-mt-4"
                            >
                                <path
                                    d="M5 15 C30 10, 60 18, 90 14 C120 10, 150 18, 175 13"
                                    stroke="#22c55e"
                                    stroke-width="5"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M10 22 C40 18, 70 25, 100 20 C130 17, 155 22, 170 19"
                                    stroke="#22c55e"
                                    stroke-width="4"
                                    stroke-linecap="round"
                                    opacity="0.9"
                                />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl lg:text-2xl font-medium orb mt-10 sm:mt-14">
                        You've come to the right place.
                    </p>

                    <ul className="mt-8 space-y-3 text-base sm:text-lg font-semibold inline-block lg:block text-left">
                        {[
                            "Free cancellations on most bookings",
                            "60,000+ locations",
                            "Customer support in 30+ languages",
                        ].map((text) => (
                            <li key={text} className="flex items-start sm:items-center gap-3">
                                <span className="text-green-500 text-xl mt-1 sm:mt-0"><Check /></span>
                                <span>{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RIGHT CARD */}
                <div className="bg-white rounded-[24px] sm:rounded-[36px] shadow-xl p-6 sm:p-8 w-full max-w-lg mx-auto lg:ml-auto mt-16 lg:mt-0 relative">

                    {/* TABS */}
                    {/* Changed flex to grid for better mobile responsiveness on small screens */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 -mt-16 sm:-mt-20 mb-6 sm:mb-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full h-20 sm:h-24 rounded-xl border-4 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer
                                    ${activeTab === tab.id
                                        ? "border-green-500 bg-white shadow-lg translate-y-[-5px]"
                                        : "border-gray-200 bg-gray-100 text-gray-500"
                                    }`}
                            >
                                <span className="text-2xl sm:text-3xl">{tab.icon}</span>
                                <span className="text-[10px] sm:text-xs orb font-semibold uppercase mt-1">
                                    {tab.id}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* FORM */}
                    <div className="space-y-4 text-sm">

                        {/* PICKUP */}
                        <div>
                            <label className="text-xs orb font-bold text-gray-500 uppercase">
                                Pick-Up
                            </label>
                            <div className="relative mt-1">
                                <input
                                    placeholder="Airport, postcode, city..."
                                    className="w-full border rounded-lg pl-10 pr-10 py-3 border-green-500 outline-none focus:ring-1 focus:ring-green-500 transition-all"
                                />
                                <span className="absolute left-3 top-3 text-gray-400"><Search size={20} /></span>
                                <span className="absolute right-3 top-3 text-green-500"><LocateFixed size={20} /></span>
                            </div>
                        </div>

                        {/* CHECKBOX */}
                        <label className="flex items-center gap-2 text-gray-700 select-none">
                            <input type="checkbox" className="accent-green-500 cursor-pointer w-4 h-4" />
                            <span className="text-xs sm:text-sm">Choose a different return location</span>
                        </label>

                        {/* DATES */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {["Date From", "Date To"].map((label) => (
                                <div key={label}>
                                    <label className="text-xs orb font-bold text-gray-500 uppercase">
                                        {label}
                                    </label>
                                    <div className="flex border border-gray-300 rounded-lg overflow-hidden mt-1">
                                        <input type="date" className="p-3 w-full outline-none text-xs sm:text-sm" />
                                        <input
                                            type="time"
                                            className="p-3 border-l border-gray-300 bg-gray-50 outline-none text-xs sm:text-sm"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* RENTAL */}
                        <div>
                            <label className="text-xs orb font-bold text-gray-500 uppercase">
                                Rental Type
                            </label>
                            <div className="flex flex-wrap gap-4 sm:gap-6 mt-2">
                                {["Economy", "Check Payment", "PayPal"].map((type) => (
                                    <label key={type} className="flex gap-2 items-center cursor-pointer">
                                        <input
                                            type="radio"
                                            name="rental"
                                            className="accent-green-500 w-4 h-4"
                                        />
                                        <span className="text-xs sm:text-sm whitespace-nowrap">{type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* BUTTON */}
                        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 sm:py-4 rounded-lg uppercase orb tracking-wider cursor-pointer transition-all duration-300 mt-4 text-sm sm:text-base shadow-lg hover:shadow-xl active:scale-95">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero2;