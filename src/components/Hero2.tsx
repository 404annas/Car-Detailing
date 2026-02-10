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
        { id: "Cars", icon: <Car size={30}/> },
        { id: "vans", icon: <Van size={30}/> },
        { id: "suv", icon: <TbCarSuv /> },
        { id: "jeep", icon: <GiJeep /> },
    ];

    return (
        <section className="relative min-h-screen overflow-hidden">
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
            <div className="relative z-10 container mx-auto px-10 grid lg:grid-cols-2 gap-12 items-center min-h-screen">

                {/* LEFT CONTENT */}
                <div className="text-white max-w-xl">
                    <h1 className="text-6xl orb font-extrabold leading-none">
                        Looking to hire <br />
                        <span className="relative inline-block">
                            a vehicle?
                            <img
                                loading="lazy"
                                src={underlineImg.src}
                                alt="underline"
                                className="absolute -bottom-8 left-16 w-70 select-none pointer-events-none"
                            />
                        </span>
                    </h1>

                    <p className="text-2xl font-medium orb mt-14">
                        You've come to the right place.
                    </p>

                    <ul className="mt-8 space-y-2 text-lg font-semibold">
                        {[
                            "Free cancellations on most bookings",
                            "60,000+ locations",
                            "Customer support in 30+ languages",
                        ].map((text) => (
                            <li key={text} className="flex items-center gap-3">
                                <span className="text-orange-500 text-xl"><Check /></span>
                                {text}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RIGHT CARD */}
                <div className="bg-white rounded-[36px] shadow-xl p-8 max-w-xl w-full ml-auto">

                    {/* TABS */}
                    <div className="flex gap-3 -mt-20 mb-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-30 h-25 rounded-xl border-4 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer
                  ${activeTab === tab.id
                                        ? "border-orange-500 bg-white shadow"
                                        : "border-gray-200 bg-gray-100 text-gray-500"
                                    }`}
                            >
                                <span className="text-3xl">{tab.icon}</span>
                                <span className="text-xs orb font-semibold uppercase mt-1">
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
                                    className="w-full border rounded-lg px-10 py-3 border-orange-500 outline-none focus:ring-1 focus:ring-orange-500 outline-none"
                                />
                                <span className="absolute left-3 top-3 text-gray-400"><Search size={20}/></span>
                                <span className="absolute right-3 top-3 text-orange-500"><LocateFixed /></span>
                            </div>
                        </div>

                        {/* CHECKBOX */}
                        <label className="flex items-center gap-2 text-gray-700">
                            <input type="checkbox" className="accent-orange-500 cursor-pointer" />
                            Choose a different return location
                        </label>

                        {/* DATES */}
                        <div className="grid grid-cols-2 gap-4">
                            {["Date From", "Date To"].map((label) => (
                                <div key={label}>
                                    <label className="text-xs orb font-bold text-gray-500 uppercase">
                                        {label}
                                    </label>
                                    <div className="flex border border-gray-300 rounded-lg overflow-hidden mt-1">
                                        <input type="date" className="p-3 w-full outline-none" />
                                        <input
                                            type="time"
                                            className="p-3 border-l border-gray-300 bg-gray-50 outline-none"
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
                            <div className="flex gap-6 mt-2">
                                {["Economy", "Check Payment", "PayPal"].map((type) => (
                                    <label key={type} className="flex gap-2 items-center">
                                        <input
                                            type="radio"
                                            name="rental"
                                            className="accent-orange-500 border-none outline-none cursor-pointer"
                                        />
                                        {type}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* BUTTON */}
                        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg uppercase orb tracking-wider cursor-pointer transition-all duration-300 mt-4">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero2;