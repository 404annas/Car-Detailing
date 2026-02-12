import Image from "next/image"
import step1 from "@/assets/step1.png"
import step2 from "@/assets/step2.png"
import step3 from "@/assets/step3.png"
import step4 from "@/assets/step4.png"

const steps = [
    {
        title: "Browse Our Fleet",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        icon: step1,
    },
    {
        title: "Select Your Vehicle",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        icon: step2,
    },
    {
        title: "Submit an Enquiry",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        icon: step3,
    },
    {
        title: "Pick Up & Drive",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        icon: step4,
    },
]

const Steps = () => {
    return (
        <section className="bg-white pb-10">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex sm:flex-row flex-col gap-2 items-center justify-between mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold orb">
                        GET STARTED
                    </h2>

                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-all duration-300 cursor-pointer orb sm:text-base text-sm sm:w-fit w-full">
                        BOOK NOW
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 text-center">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center">

                            {/* Icon Circle */}
                            <div className="w-24 h-24 rounded-full bg-green-600 flex items-center justify-center mb-6">
                                <Image
                                    src={step.icon}
                                    alt={step.title}
                                    width={60}
                                    height={60}
                                    className="object-cover"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg orb font-semibold mb-3">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-500 leading-5 max-w-xl">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Steps
