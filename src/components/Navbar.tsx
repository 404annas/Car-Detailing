import { Contact2 } from "lucide-react"

const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 px-10 py-4 flex items-center justify-between text-white">

            <h1 className="orb text-4xl font-bold">LOGO</h1>

            <div className="flex items-center gap-10">
                {["Home", "About", "Our Fleet", "Cars", "Services"].map((item) => (
                    <p
                        key={item}
                        className="relative cursor-pointer
              transition-colors duration-300
              hover:text-orange-500
              after:absolute after:left-0 after:-bottom-0.5
              after:h-[2px] after:w-0
              after:bg-orange-500
              after:transition-all after:duration-300
              hover:after:w-full font-medium"
                    >
                        {item}
                    </p>
                ))}
            </div>

            <div
                className="relative overflow-hidden rounded-lg border border-orange-500 outline-none
        px-6 py-3 cursor-pointer group"
            >
                <span
                    className="absolute left-0 top-0 h-full w-0
          bg-orange-500
          transition-all duration-500
          group-hover:w-full"
                />

                <div className="relative z-10 flex items-center gap-2 text-white orb font-medium">
                    <p>Contact Us</p>
                    <Contact2 size={22} />
                </div>
            </div>

        </nav>
    )
}

export default Navbar