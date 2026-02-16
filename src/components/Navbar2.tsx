"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
    Search,
    ChevronDown,
    DollarSign,
    MapPin,
    Bell,
    Menu,
    User,
    Filter,
    PhoneCall,
    Mail,
    ShoppingCart
} from "lucide-react";
import logo from "@/assets/logo.svg";
import Link from "next/link";

const Navbar2 = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Video ke flow ke mutabiq 1px scroll par hi transition start ho jaye
            setIsScrolled(window.scrollY > 1);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="w-full flex flex-col sticky top-0 z-[100] transition-all duration-300">

            {/* --- Top Blue Bar --- */}
            {/* Logo ko bahar dikhane ke liye 'overflow-visible' zaroori hai */}
            <div className={`bg-[#050c4e] flex items-center px-4 md:px-8 relative transition-all duration-500 ${isScrolled ? "h-0 opacity-0 invisible" : "h-[60px] opacity-100 visible"}`}>

                {/* Navigation Links */}
                <div className="flex items-center ml-36 space-x-6 text-white font-bold text-sm overflow-x-auto no-scrollbar">
                    <a href="#featured-cars" className="hover:opacity-80 transition-all duration-300 whitespace-nowrap ">Available Cars</a>
                    <Link href="/how-we-deliver" className="hover:opacity-80 transition-all duration-300 whitespace-nowrap">How We Deliver</Link>
                    <Link href="/choose-us" className="hover:opacity-80 transition-all duration-300 whitespace-nowrap">Why Choose Us</Link>
                    <a href="#" className="hover:opacity-80 transition-all duration-300 whitespace-nowrap">Testimonials</a>
                    <a href="#" className="hover:opacity-80 transition-all duration-300 whitespace-nowrap">Car Talk</a>
                    <div className="flex items-center cursor-pointer hover:opacity-80 transition-all duration-300">
                        <span>More</span>
                        <ChevronDown size={16} className="ml-1" />
                    </div>
                </div>

                {/* Right Side Icons & Selectors */}
                <div className="ml-auto flex items-center space-x-3">
                    <div className="bg-[#051072] text-white flex items-center px-3 py-1.5 rounded-full cursor-pointer hover:bg-[#020f86] transition-colors duration-300">
                        <div className="bg-white rounded-full p-1 mr-2">
                            <DollarSign size={14} className="text-[#3A9BD5]" />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-[10px] opacity-90 font-medium">Currency</span>
                            <span className="text-xs font-bold uppercase">USD</span>
                        </div>
                    </div>

                    <div className="bg-[#051072] text-white flex items-center px-3 py-1.5 rounded-full cursor-pointer hover:bg-[#020f86] transition-colors duration-300">
                        <MapPin size={18} className="mr-2" />
                        <div className="flex flex-col leading-none pr-4">
                            <span className="text-[10px] opacity-90 font-medium">Delivery To:</span>
                            <span className="text-xs font-bold">-</span>
                        </div>
                    </div>

                    <div className="relative cursor-pointer text-black bg-white p-2 rounded-full">
                        <Mail size={20} />
                        {/* <span className="absolute top-0 right-0 bg-[#E74C3C] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold border border-white">
                            4
                        </span> */}
                    </div>

                    <div className="flex items-center bg-[#020f86] rounded-full px-0.5 py-0.5 cursor-pointer border border-[#8ec6e8]">
                        {/* <Menu size={20} className="text-white mr-1" /> */}
                        <Link href="/cart" className="bg-white rounded-full p-2">
                            <ShoppingCart size={20} className="text-gray-700" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* --- Bottom Filter Bar --- */}
            {/* overflow-visible is key so logo doesn't hide when it jumps up */}
            <div className="bg-white py-3 px-4 md:px-8 flex items-center space-x-3 shadow-sm relative overflow-visible">

                {/* Logo - Position Fixed to Top/Bottom bar flow */}
                <div
                    className={`rounded-full shadow-lg z-[110] absolute transition-all duration-500 ease-in-out bg-white flex items-center justify-center
                    ${isScrolled
                            ? "top-1 left-4 w-[55px] h-[55px]"
                            : "-top-12 left-6 w-[100px] h-[100px]"
                        }`}
                >
                    <Link href="/" className="relative w-[90%] h-[90%]">
                        <Image
                            src={logo}
                            alt="Car From Japan"
                            fill
                            className="object-contain rounded-full"
                        />
                    </Link>
                </div>

                {/* Spacing adjustments to match logo movement */}
                <div className={`transition-all duration-500 ${isScrolled ? "min-w-[65px]" : "min-w-[125px]"}`}></div>

                {/* Search Input */}
                <div className="relative flex-1 min-w-[200px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="w-full bg-gray-100 py-2.5 pl-10 pr-4 rounded-md outline-none text-sm placeholder:text-gray-500"
                    />
                </div>

                {/* Dropdowns */}
                {["Make", "Model", "Price", "Year"].map((label) => (
                    <div key={label} className="relative min-w-[110px] flex-1">
                        <span className="absolute -top-2 left-3 bg-white px-1 text-[10px] text-gray-500 z-10 font-bold uppercase tracking-tight">{label}</span>
                        <div className="border border-gray-300 rounded-md py-2 px-3 flex items-center justify-between cursor-pointer hover:border-gray-400 transition-all">
                            <span className="text-sm text-gray-700 font-medium">All</span>
                            <ChevronDown size={14} className="text-gray-400" />
                        </div>
                    </div>
                ))}

                <button className="flex items-center space-x-2 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50 transition-all cursor-pointer whitespace-nowrap">
                    <Filter size={18} className="text-gray-500" />
                    <span className="text-sm text-gray-600 font-bold">More filters</span>
                </button>

                <button className="bg-[#050c4e] text-white font-bold py-2.5 px-10 rounded-md hover:bg-[#020f86] transition-colors duration-300 cursor-pointer text-sm">
                    Search
                </button>
                <button className="text-gray-500 cursor-pointer text-sm font-bold hover:underline px-2">
                    Reset
                </button>
            </div>
        </nav>
    );
};

export default Navbar2;