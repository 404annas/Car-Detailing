"use client" // 1. Required for interaction

import { useState } from "react" // 2. Import useState
import Image from "next/image"
import {
    Gauge,
    Fuel,
    Settings,
    Cog
} from "lucide-react"

// ... (Keep your existing image imports here)
import lamboMain from "@/assets/lamboMain.png";
import lamboSec from "@/assets/lamboSec.jpg";
import lamboSec2 from "@/assets/lamboSec2.jpg";
import audiMain from "@/assets/audiMain.png";
import audiSec from "@/assets/audiSec.jpg";
import ferrariMain from "@/assets/ferrariMain.png";
import ferrariSec from "@/assets/ferrariSec.jpg";
import ferrariSec2 from "@/assets/ferrariSec2.jpg"
import bmwMain from "@/assets/bmwMain.png"
import bmwSec from "@/assets/bmwSec.jpg"

import car1 from "@/assets/car1.avif"
import car2 from "@/assets/car2.avif"
import car3 from "@/assets/car3.avif"
import car4 from "@/assets/car4.avif"
import car5 from "@/assets/car5.avif"
import car6 from "@/assets/car6.avif"
import car7 from "@/assets/car7.avif"
import car8 from "@/assets/car8.avif"
import car9 from "@/assets/car9.avif"
import car10 from "@/assets/car10.avif"
import car11 from "@/assets/car11.avif"
import car12 from "@/assets/car12.avif"
import car13 from "@/assets/car13.avif"
import car14 from "@/assets/car14.avif"
import car15 from "@/assets/car15.avif"
import car16 from "@/assets/car16.avif"
import car17 from "@/assets/car17.avif"
import car18 from "@/assets/car18.avif"
import car19 from "@/assets/car19.avif"

// ... (Keep your cars array exactly as it is)
const cars = [
    {
        name: "Lamborghini Urus",
        meta: "2024 • SUV • New",
        img: lamboMain,
        image: car1,
        price: "USD $14,500",
        specs: [
            { icon: Gauge, label: "150" },
            { icon: Cog, label: "4.0L" },
            { icon: Fuel, label: "Petrol" },
            { icon: Settings, label: "Auto" },
        ],
    },
    {
        name: "Audi R8",
        meta: "2023 • Convertible • New",
        img: audiMain,
        image: car2,
        price: "USD $17,500",
        specs: [
            { icon: Gauge, label: "90" },
            { icon: Cog, label: "5.2L" },
            { icon: Fuel, label: "Diesel" },
            { icon: Settings, label: "Manual" },
        ],
    },
    {
        name: "Ferrari 458 Italia",
        meta: "2019 • Coupe • Used",
        img: ferrariMain,
        image: car3,
        price: "USD $16,500",
        specs: [
            { icon: Gauge, label: "15,200" },
            { icon: Cog, label: "4.5L" },
            { icon: Fuel, label: "Hybrid" },
            { icon: Settings, label: "Manual" },
        ],
    },
    {
        name: "BMW X6 F86",
        meta: "2024 • SUV • New",
        img: bmwMain,
        image: car4,
        price: "USD $24, 999",
        specs: [
            { icon: Gauge, label: "120" },
            { icon: Cog, label: "4.4L" },
            { icon: Fuel, label: "Diesel" },
            { icon: Settings, label: "Manual" },
        ],
    },
    {
        name: "Ferrari 488 GTB",
        meta: "2021 • Coupe • Used",
        img: ferrariMain,
        image: car5,
        price: "USD $34,500",
        specs: [
            { icon: Gauge, label: "8,700" },
            { icon: Cog, label: "3.9L" },
            { icon: Fuel, label: "Hybrid" },
            { icon: Settings, label: "Auto" },
        ],
    },
    {
        name: "Lambo Aventador",
        meta: "2022 • Convertible • Used",
        img: lamboMain,
        image: car6,
        price: "USD $32,000",
        specs: [
            { icon: Gauge, label: "12,500" },
            { icon: Cog, label: "6.5L" },
            { icon: Fuel, label: "Petrol" },
            { icon: Settings, label: "Manual" },
        ],
    },
    {
        name: "Lambo Aventador",
        meta: "2022 • Convertible • Used",
        img: lamboMain,
        image: car7,
        price: "USD $16,900",
        specs: [
            { icon: Gauge, label: "12,500" },
            { icon: Cog, label: "6.5L" },
            { icon: Fuel, label: "Petrol" },
            { icon: Settings, label: "Manual" },
        ],
    },
    {
        name: "Lambo Aventador",
        meta: "2022 • Convertible • Used",
        img: lamboMain,
        image: car8,
        price: "USD $26,500",
        specs: [
            { icon: Gauge, label: "12,500" },
            { icon: Cog, label: "6.5L" },
            { icon: Fuel, label: "Petrol" },
            { icon: Settings, label: "Manual" },
        ],
    },
    {
        name: "Lambo Aventador",
        meta: "2022 • Convertible • Used",
        img: lamboMain,
        image: car9,
        price: "USD $28,500",
        specs: [
            { icon: Gauge, label: "12,500" },
            { icon: Cog, label: "6.5L" },
            { icon: Fuel, label: "Petrol" },
            { icon: Settings, label: "Manual" },
        ],
    },
    {
        name: "Lambo Aventador",
        meta: "2022 • Convertible • Used",
        img: lamboMain,
        image: car10,
        price: "USD $16,000",
        specs: [
            { icon: Gauge, label: "12,500" },
            { icon: Cog, label: "6.5L" },
            { icon: Fuel, label: "Petrol" },
            { icon: Settings, label: "Manual" },
        ],
    },
    {
        name: "Lambo Aventador",
        meta: "2022 • Convertible • Used",
        img: lamboMain,
        image: car11,
        price: "USD $18,500",
        specs: [
            { icon: Gauge, label: "12,500" },
            { icon: Cog, label: "6.5L" },
            { icon: Fuel, label: "Petrol" },
            { icon: Settings, label: "Manual" },
        ],
    },
    {
        name: "Lambo Aventador",
        meta: "2022 • Convertible • Used",
        img: lamboMain,
        image: car12,
        price: "USD $26,800",
        specs: [
            { icon: Gauge, label: "12,500" },
            { icon: Cog, label: "6.5L" },
            { icon: Fuel, label: "Petrol" },
            { icon: Settings, label: "Manual" },
        ],
    },
    {
        name: "Lambo Aventador",
        meta: "2022 • Convertible • Used",
        img: lamboMain,
        image: car13,
        price: "USD $23,000",
        specs: [
            { icon: Gauge, label: "12,500" },
            { icon: Cog, label: "6.5L" },
            { icon: Fuel, label: "Petrol" },
            { icon: Settings, label: "Manual" },
        ],
    },
    {
        name: "Lambo Aventador",
        meta: "2022 • Convertible • Used",
        img: lamboMain,
        image: car14,
        price: "USD $18,000",
        specs: [
            { icon: Gauge, label: "12,500" },
            { icon: Cog, label: "6.5L" },
            { icon: Fuel, label: "Petrol" },
            { icon: Settings, label: "Manual" },
        ],
    },
    {
        name: "Lambo Aventador",
        meta: "2022 • Convertible • Used",
        img: lamboMain,
        image: car15,
        price: "USD $18,000",
        specs: [
            { icon: Gauge, label: "12,500" },
            { icon: Cog, label: "6.5L" },
            { icon: Fuel, label: "Petrol" },
            { icon: Settings, label: "Manual" },
        ],
    },
    {
        name: "Lambo Aventador",
        meta: "2022 • Convertible • Used",
        img: lamboMain,
        image: car16,
        price: "USD $39,999",
        specs: [
            { icon: Gauge, label: "12,500" },
            { icon: Cog, label: "6.5L" },
            { icon: Fuel, label: "Petrol" },
            { icon: Settings, label: "Manual" },
        ],
    },
    {
        name: "Lambo Aventador",
        meta: "2022 • Convertible • Used",
        img: lamboMain,
        image: car17,
        price: "USD $25,999",
        specs: [
            { icon: Gauge, label: "12,500" },
            { icon: Cog, label: "6.5L" },
            { icon: Fuel, label: "Petrol" },
            { icon: Settings, label: "Manual" },
        ],
    },
    {
        name: "Lambo Aventador",
        meta: "2022 • Convertible • Used",
        img: lamboMain,
        image: car18,
        price: "USD $17,000",
        specs: [
            { icon: Gauge, label: "12,500" },
            { icon: Cog, label: "6.5L" },
            { icon: Fuel, label: "Petrol" },
            { icon: Settings, label: "Manual" },
        ],
    },
    {
        name: "Lambo Aventador",
        meta: "2022 • Convertible • Used",
        img: lamboMain,
        image: car19,
        price: "USD $26,000",
        specs: [
            { icon: Gauge, label: "12,500" },
            { icon: Cog, label: "6.5L" },
            { icon: Fuel, label: "Petrol" },
            { icon: Settings, label: "Manual" },
        ],
    },
]

const FeaturedCars = () => {
    // 3. State to toggle between showing all or showing 6
    const [showAll, setShowAll] = useState(false);

    // 4. Logic: if showAll is true, use entire list, otherwise slice first 6
    const displayedCars = showAll ? cars : cars.slice(0, 6);

    return (
        <section className="px-4 sm:px-10 py-10 bg-white">

            {/* Header */}
            <div className="flex sm:flex-row flex-col gap-2 items-center justify-between mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold orb">
                    FEATURED CARS
                </h2>

                <button
                    // 5. Add onClick handler
                    onClick={() => setShowAll(!showAll)}
                    className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-all duration-300 cursor-pointer orb sm:text-base text-sm w-full sm:w-fit"
                >
                    {/* 6. Dynamic Text */}
                    {showAll ? "SHOW LESS" : "SHOW ALL"}
                </button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
                {/* 7. Map over displayedCars instead of cars */}
                {displayedCars.map((car, index) => (
                    <div
                        key={index}
                        className="border border-[#E5E5E5] rounded-2xl p-4 mb-4"
                    >
                        {/* Title */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                                <Image
                                    src={car.img}
                                    alt={car.name}
                                    width={100}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold orb">{car.name}</h3>
                                <p className="text-sm text-gray-600">{car.meta}</p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative h-48 sm:h-80 w-full mb-4 rounded-xl overflow-hidden group">
                            <Image
                                src={car.image}
                                alt={car.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 cursor-pointer"
                            />
                        </div>

                        {/* Specs */}
                        <div className="bg-[#0B1324] text-white rounded-xl p-3 space-y-4">
                            <div className="grid grid-cols-4 gap-4 text-center text-xs sm:text-sm border border-orange-500 rounded-xl py-3 px-1">
                                {car.specs.map((spec, i) => {
                                    const Icon = spec.icon
                                    return (
                                        <div key={i} className="flex flex-col items-center gap-1">
                                            <Icon size={22} />
                                            <span>{spec.label}</span>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Price */}
                            <p className="text-xl orb font-semibold">{car.price}</p>

                            {/* Button */}
                            <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-medium hover:bg-orange-600 orb transition-all duration-300 cursor-pointer sm:text-base text-sm">
                                SEE DETAILS
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )

}

export default FeaturedCars