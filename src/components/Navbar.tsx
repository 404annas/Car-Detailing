"use client"

import { useEffect, useState } from "react"
import { Contact2, Menu, X } from "lucide-react"

const menuItems = ["Home", "About", "Our Fleet", "Cars", "Services"]

const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false)

    // Lock body scroll when sidebar is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [open])

    return (
        <>
            {/* NAVBAR */}
            <nav className="absolute top-0 left-0 w-full z-50 px-6 lg:px-10 py-4 flex items-center justify-between text-white">
                {/* Logo */}
                <h1 className="orb text-3xl lg:text-4xl font-bold">LOGO</h1>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-10">
                    {menuItems.map((item) => (
                        <p
                            key={item}
                            className="relative cursor-pointer font-medium
              transition-colors duration-300
              hover:text-orange-500
              after:absolute after:left-0 after:-bottom-0.5
              after:h-[2px] after:w-0
              after:bg-orange-500
              after:transition-all after:duration-300
              hover:after:w-full"
                        >
                            {item}
                        </p>
                    ))}
                </div>

                {/* Desktop Button */}
                <div className="hidden lg:block relative overflow-hidden rounded-lg border border-orange-500 px-6 py-3 cursor-pointer group">
                    <span className="absolute left-0 top-0 h-full w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
                    <div className="relative z-10 flex items-center gap-2 orb font-medium">
                        <p>Contact Us</p>
                        <Contact2 size={22} />
                    </div>
                </div>

                {/* Mobile Menu Icon */}
                <button
                    onClick={() => setOpen(true)}
                    className="lg:hidden"
                    aria-label="Open Menu"
                >
                    <Menu size={28} />
                </button>
            </nav>

            {/* OVERLAY */}
            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            />

            {/* SIDEBAR */}
            <aside
                className={`fixed top-0 right-0 z-50 h-screen w-[80%] max-w-sm bg-[#0B1324]
        transform transition-transform duration-500 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
                    <h2 className="orb text-3xl text-white font-bold">LOGO</h2>
                    <button onClick={() => setOpen(false)} aria-label="Close Menu">
                        <X size={26} className="text-white" />
                    </button>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col gap-6 px-6 py-10 text-white text-lg">
                    {menuItems.map((item) => (
                        <p
                            key={item}
                            className="cursor-pointer hover:text-orange-500 transition-colors"
                        >
                            {item}
                        </p>
                    ))}
                </div>

                {/* Contact Button (Bottom) */}
                <div className="absolute bottom-8 left-6 right-6">
                    <div className="relative overflow-hidden rounded-lg border border-orange-500 px-6 py-4 cursor-pointer group">
                        <span className="absolute left-0 top-0 h-full w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
                        <div className="relative z-10 flex items-center justify-center gap-2 text-white orb font-medium">
                            <p>Contact Us</p>
                            <Contact2 size={22} />
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Navbar