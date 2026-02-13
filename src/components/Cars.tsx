"use client"

import React from 'react';
import { ArrowUpRight, Gauge, DollarSign } from 'lucide-react';
import carBack from '@/assets/carBack.png';

import cardCard1 from "@/assets/carGif1.gif"
import cardCard2 from "@/assets/carGif2.gif"
import cardCard3 from "@/assets/carGif3.gif"
import cardCard4 from "@/assets/carGif4.gif"
import cardCard5 from "@/assets/carGif5.gif"
import { FaFire } from 'react-icons/fa';

const Cars = () => {
    const carData = [
        { name: "Only certified motors", price: "10", km: "80", color: "bg-green-100", img: cardCard1.src, discount: "15" },
        { name: "7 days free trial", price: "12", km: "80", color: "bg-red-100", img: cardCard2.src, discount: "20" },
        { name: "Free delivery", price: "16", km: "80", color: "bg-yellow-100", img: cardCard3.src, discount: "15" },
        { name: "Free test drives", price: "13", km: "80", color: "bg-purple-100", img: cardCard4.src, discount: "15" },
        { name: "Pre-approval", price: "13", km: "80", color: "bg-blue-100", img: cardCard5.src, discount: "15" },
    ];

    return (
        <section className="py-10 px-4 sm:px-10 bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
                {carData.map((car, index) => (
                    <div
                        key={index}
                        className={`group relative ${car.color}
  rounded-3xl
  p-6 transition-all duration-500 overflow-hidden`}
                    >
                        {/* Discount Badge */}
                        <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-1.5 rounded-full flex items-center gap-1 text-xs font-medium z-20">
                            <span className="bg-white/20 rounded-full p-0.5"><FaFire /></span>
                            Why Elite Motors ?
                        </div>
                        <img
                            loading="lazy"
                            src={carBack.src}
                            alt="steering-bg"
                            className="
    absolute top-8 left-1/2 -translate-x-1/2
    w-35
    z-0 object-cover
    transition-transform duration-700 ease-out
    group-hover:translate-y-4
  "
                        />

                        {/* Car Image */}
                        {/* Hover par ye scale down (choti) hogi */}
                        <div className="relative h-44 mt-4 flex items-center justify-center z-10">
                            <img
                                loading='lazy'
                                src={car.img}
                                alt={car.name}
                                className="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-90"
                            />
                        </div>

                        {/* Content */}
                        <div className="mt-4 space-y-3">
                            <h3 className="text-sm orb font-bold text-gray-900 leading-none">
                                {car.name}
                            </h3>

                            {/* <div className="flex items-center gap-6 text-gray-600 font-bold text-sm">
                                <div className="flex items-center gap-2 orb">
                                    <Gauge size={20} className="text-gray-500" />
                                    <span>{car.km} km</span>
                                </div>
                                <div className="flex items-center gap-1 orb">
                                    <div className="bg-gray-200 rounded-full p-1">
                                        <DollarSign size={14} className="text-gray-600" />
                                    </div>
                                    <span>${car.price}/hr</span>
                                </div>
                            </div> */}

                            <button className="flex items-center gap-2 text-black hover:text-green-500 transition-all duration-300 font-extrabold text-xs pt-2 group/btn orb cursor-pointer">
                                Contact Us
                                <ArrowUpRight
                                    size={18}
                                    className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                                />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Cars;