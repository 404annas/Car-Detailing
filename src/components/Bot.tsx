"use client";
import React, { useState, useEffect } from 'react';
import { RiRobot2Fill, RiCloseLine } from 'react-icons/ri';
import { FaCar, FaMotorcycle, FaTruck, FaShip } from 'react-icons/fa'; // Icons for the form tabs
import { Car, Van } from 'lucide-react';
import { TbCarSuv } from 'react-icons/tb';
import { GiJeep } from 'react-icons/gi';

const Bot = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // Form States
    const [activeTab, setActiveTab] = useState('car');

    // Mock data for tabs to make the form work
    const tabs = [
        { id: "Cars", icon: <Car size={30} /> },
        { id: "vans", icon: <Van size={30} /> },
        { id: "suv", icon: <TbCarSuv size={30} /> },
        { id: "jeep", icon: <GiJeep size={30} /> },
    ];

    // Animation for popup delay
    useEffect(() => {
        const timer = setTimeout(() => setShowPopup(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    // Handle Body Scroll Lock when Modal is open
    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showModal]);

    return (
        <>
            {/* --- FLOATING ACTION BUTTON --- */}
            <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 pointer-events-none">
                {/* Popup Message Box */}
                {showPopup && !showModal && (
                    <div
                        onClick={() => setShowModal(true)}
                        className="bg-white border-2 border-[#050C4E] shadow-2xl w-20 h-20 rounded-full cursor-pointer flex items-center justify-center text-center animate-bounce-subtle pointer-events-auto hover:scale-105 transition-transform animate-bounce"
                    >
                        <p className="text-[#050C4E] text-xs font-bold uppercase leading-tight tracking-tighter">
                            I WANT <br />
                            TO <br />
                            IMPORT
                        </p>
                    </div>
                )}

                {/* Optional Robot Button (Commented out as per your code) */}
                {/* <button ... > ... </button> */}
            </div>

            {/* --- MODAL OVERLAY --- */}
            {showModal && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center px-4">
                    {/* Backdrop with Blur */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                        onClick={() => setShowModal(false)} // Close when clicking outside
                    ></div>

                    {/* Modal Content */}
                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-xl relative z-10 animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto custom-scrollbar">

                        {/* Close Button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 z-20 bg-gray-100 hover:bg-red-100 text-gray-500 hover:text-red-500 p-2 rounded-full transition-colors duration-300 cursor-pointer"
                        >
                            <RiCloseLine size={24} />
                        </button>

                        <div className="p-6 sm:p-8 pt-12">
                            {/* --- FORM START --- */}

                            {/* TABS */}
                            <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full h-16 sm:h-20 rounded-xl border-4 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer shadow-sm
                                        ${activeTab === tab.id
                                                ? "border-blue-500 bg-white shadow-lg translate-y-[-2px]"
                                                : "border-gray-200 bg-gray-100 text-gray-500 hover:bg-gray-50"
                                            }`}
                                    >
                                        <span className="text-xl sm:text-2xl">{tab.icon}</span>
                                        <span className="text-[10px] font-semibold uppercase mt-1">
                                            {tab.id}
                                        </span>
                                    </button>
                                ))}
                            </div>

                            {/* FORM FIELDS */}
                            <div className="space-y-4">
                                {/* ROW 1: BRAND & MODEL */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-bold text-gray-500 uppercase">
                                            Brand / Make
                                        </label>
                                        <select className="w-full mt-1 border border-blue-300 rounded-lg p-3 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-white cursor-pointer">
                                            <option value="" disabled defaultValue="">Select Make</option>
                                            <option value="toyota">Toyota</option>
                                            <option value="honda">Honda</option>
                                            <option value="mitsubishi">Mitsubishi</option>
                                            <option value="lexus">Lexus</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="suzuki">Suzuki</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-gray-500 uppercase">
                                            Model
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Corolla, X5"
                                            className="w-full mt-1 border border-blue-300 rounded-lg p-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                        />
                                    </div>
                                </div>

                                {/* ROW 2: BUDGET & PHONE */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-bold text-gray-500 uppercase">
                                            Budget Range
                                        </label>
                                        <select className="w-full mt-1 border border-blue-300 rounded-lg p-3 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-white cursor-pointer">
                                            <option value="" disabled defaultValue="">Select Range</option>
                                            <option value="10-20">$10k - $20k</option>
                                            <option value="20-50">$20k - $50k</option>
                                            <option value="50-100">$50k - $100k</option>
                                            <option value="100+">$100k +</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-gray-500 uppercase">
                                            Year
                                        </label>
                                        <select className="w-full mt-1 border border-blue-300 rounded-lg p-3 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-white cursor-pointer">
                                            <option value="" disabled defaultValue="">Select Year</option>
                                            <option value="2026">2026</option>
                                            <option value="2025">2025</option>
                                            <option value="2024">2024</option>
                                            <option value="Below 2024">Below 2024</option>
                                        </select>
                                    </div>
                                </div>

                                {/* ROW 3: APPOINTMENT DATE & TIME */}
                                <div className="grid grid-cols-2 gap-4">

                                    <div>
                                        <label className="text-xs font-bold text-gray-500 uppercase">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="email@exampl.com"
                                            className="w-full mt-1 border border-blue-300 rounded-lg p-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-gray-500 uppercase">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="+61 (555) 000-0000"
                                            className="w-full mt-1 border border-blue-300 rounded-lg p-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                        />
                                    </div>
                                </div>

                                {/* SUBMIT BUTTON */}
                                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-lg uppercase cursor-pointer transition-all duration-300 mt-2 text-xs sm:text-sm shadow-sm active:scale-95 flex items-center justify-center gap-2">
                                    Submit Enquiry
                                </button>
                            </div>
                            {/* --- FORM END --- */}
                        </div>
                    </div>
                </div>
            )}

            {/* Custom Styles for Animation */}
            <style jsx>{`
                @keyframes bounce-subtle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
                .animate-bounce-subtle {
                    animation: bounce-subtle 3s ease-in-out infinite;
                }
                /* Hide scrollbar for modal content if it gets too long */
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(0,0,0,0.1);
                    border-radius: 20px;
                }
            `}</style>
        </>
    );
};

export default Bot;