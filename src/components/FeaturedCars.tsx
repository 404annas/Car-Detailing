import Image from "next/image"
import {
    Gauge,
    Fuel,
    Settings,
    Cog
} from "lucide-react"

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

const cars = [
    {
        name: "Lamborghini Urus",
        meta: "2024 • SUV • New",
        img: lamboMain,
        image: lamboSec,
        price: "AED 1,150,000",
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
        image: audiSec,
        price: "AED 680,000",
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
        image: ferrariSec,
        price: "AED 850,000",
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
        image: bmwSec,
        price: "AED 550,000",
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
        image: ferrariSec2,
        price: "AED 950,000",
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
        image: lamboSec2,
        price: "AED 1,300,000",
        specs: [
            { icon: Gauge, label: "12,500" },
            { icon: Cog, label: "6.5L" },
            { icon: Fuel, label: "Petrol" },
            { icon: Settings, label: "Manual" },
        ],
    },
]

const FeaturedCars = () => {
    return (
        <section className="px-10 py-10 bg-white">

            {/* Header */}
            <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-bold orb">
                    FEATURED CARS
                </h2>

                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-all duration-300 cursor-pointer orb">
                    SHOW ALL
                </button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cars.map((car, index) => (
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
                                    width={5000}
                                    height={2000}
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold orb">{car.name}</h3>
                                <p className="text-sm text-gray-600">{car.meta}</p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative h-52 w-full mb-4 rounded-xl overflow-hidden group">
                            <Image
                                src={car.image}
                                alt={car.name}
                                width={5000}
                                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 cursor-pointer"
                            />
                        </div>

                        {/* Specs */}
                        <div className="bg-[#0B1324] text-white rounded-xl p-3 space-y-4">
                            <div className="grid grid-cols-4 gap-4 text-center text-sm border border-orange-500 rounded-xl py-3 px-1">
                                {car.specs.map((spec, i) => {
                                    const Icon = spec.icon
                                    return (
                                        <div key={i} className="flex flex-col items-center gap-1">
                                            <Icon size={24} />
                                            <span>{spec.label}</span>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Price */}
                            <p className="text-xl orb font-semibold">{car.price}</p>

                            {/* Button */}
                            <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-medium hover:bg-orange-600 orb transition-all duration-300 cursor-pointer">
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
