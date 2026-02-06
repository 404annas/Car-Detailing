import footerImg from "@/assets/footerMainImg.jpg";
import {
    Facebook,
    Instagram,
    X,
    Youtube,
    Linkedin,
    Twitter,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="relative w-full h-screen text-white overflow-hidden">
            {/* Background Image */}
            <Image
                src={footerImg}
                priority={true}
                width={5000}
                alt="Footer Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-10 flex flex-col justify-between py-16">

                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Left Text */}
                    <h2 className="text-4xl md:text-5xl font-semibold leading-none max-w-2xl orb">
                        PORSCHE CAYENNE <span className="text-orange-500">BLACK EDITION</span>.
                        <br />
                        ELEGANCE AND <span className="text-orange-500">SPORTINESS</span>.
                    </h2>

                    {/* Navigation Links */}
                    <div className="flex flex-col gap-4 lg:items-end text-sm">
                        <a className="hover:text-orange-400 transition-all duration-300 cursor-pointer">Home</a>
                        <a className="hover:text-orange-400 transition-all duration-300 cursor-pointer">Models</a>
                        <a className="hover:text-orange-400 transition-all duration-300 cursor-pointer">Experience</a>
                        <a className="hover:text-orange-400 transition-all duration-300 cursor-pointer">Services</a>
                        <a className="hover:text-orange-400 transition-all duration-300 cursor-pointer">Contact</a>
                    </div>
                </div>

                {/* Middle Branding */}
                <div className="flex justify-center">
                    <h1 className="text-3xl tracking-[0.3em] font-light orb">
                        PORSCHE
                    </h1>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col items-center gap-6">

                    {/* Social Icons */}
                    <div className="flex items-center gap-6">
                        <Facebook className="w-5 h-5 cursor-pointer hover:text-orange-400 hover:-translate-y-1 transition-all duration-300" />
                        <Instagram className="w-5 h-5 cursor-pointer hover:text-orange-400 hover:-translate-y-1 transition-all duration-300" />
                        <Twitter className="w-5 h-5 cursor-pointer hover:text-orange-400 hover:-translate-y-1 transition-all duration-300" />
                        <Youtube className="w-5 h-5 cursor-pointer hover:text-orange-400 hover:-translate-y-1 transition-all duration-300" />
                        <Linkedin className="w-5 h-5 cursor-pointer hover:text-orange-400 hover:-translate-y-1 transition-all duration-300" />
                    </div>

                    {/* Copyright */}
                    <p className="text-xs text-gray-400 text-center">
                        ©2026 Porsche Colombia | All rights reserved | Legal notices and privacy policies.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;