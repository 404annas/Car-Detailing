"use client"

import React from 'react';
import { ArrowUpRight, Gauge, DollarSign } from 'lucide-react';
import carBack from '@/assets/carBack.png';

import cardCard1 from "@/assets/carCard1.png"
import cardCard2 from "@/assets/carCard2.png"
import cardCard3 from "@/assets/carCard3.png"
import cardCard4 from "@/assets/carCard4.png"
import { FaFire } from 'react-icons/fa';

const Cars = () => {
    const carData = [
        { name: "Volvo XC90", price: "10", km: "80", color: "bg-[#F7F7E8]", img: cardCard1.src, discount: "15" },
        { name: "Mercedes Benz GLK", price: "12", km: "80", color: "bg-[#FEECEC]", img: cardCard2.src, discount: "20" },
        { name: "Audi A1 S-LINE", price: "16", km: "80", color: "bg-[#ECF0FF]", img: cardCard3.src, discount: "15" },
        { name: "BMW 320i Modern Line", price: "13", km: "80", color: "bg-[#F2F2F2]", img: cardCard4.src, discount: "15" },
    ];

    return (
        <section className="py-10 px-4 sm:px-10 bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {carData.map((car, index) => (
                    <div
                        key={index}
                        className={`group relative ${car.color}
  rounded-3xl
  p-6 transition-all duration-500 overflow-hidden`}
                    >
                        {/* Discount Badge */}
                        <div className="absolute top-6 left-6 bg-green-500 text-white px-4 py-1.5 rounded-full flex items-center gap-1 text-xs font-medium z-20">
                            <span className="bg-white/20 rounded-full p-0.5"><FaFire /></span>
                            Save Upto {car.discount}%
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
                        <div className="relative h-48 mt-4 flex items-center justify-center z-10">
                            <img
                                loading='lazy'
                                src={car.img}
                                alt={car.name}
                                className="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-90"
                            />
                        </div>

                        {/* Content */}
                        <div className="mt-4 space-y-3">
                            <h3 className="text-base orb font-bold text-gray-900 leading-none">
                                {car.name}
                            </h3>

                            <div className="flex items-center gap-6 text-gray-600 font-bold text-sm">
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
                            </div>

                            <button className="flex items-center gap-2 text-black hover:text-green-500 transition-all duration-300 font-extrabold text-sm pt-2 group/btn orb cursor-pointer">
                                Book Now
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