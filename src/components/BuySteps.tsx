"use client";
import { Globe, ShieldCheck, Truck, Car, HeartHandshake, CheckCircle2 } from 'lucide-react';

const BuySteps = () => {
    const values = [
        {
            id: "1",
            title: "Unrivalled Import Expertise (JDM, German & Italian)",
            content: (
                <>
                    <p className="mb-4">
                        We don’t just sell cars; we understand the culture behind them. We specialize in importing high-grade vehicles directly from Japan and Europe.
                    </p>

                    <p className="mb-3 font-semibold flex items-center gap-2"><CheckCircle2 className='text-[#3498db]' size={18}/> JDM Legends:</p>
                    <p className="mb-4">
                        From cult classics to modern performance icons, we navigate the Japanese auction houses to bring you clean, authentic, and compliant Japanese Domestic Market vehicles.
                    </p>

                    <p className="mb-3 font-semibold flex items-center gap-2"><CheckCircle2 className='text-[#3498db]' size={18}/> Euro Prestige:</p>
                    <p>
                        We curate the finest German engineering and Italian flair, ensuring you get access to specifications and trims that are often hard to find locally.
                    </p>
                </>
            ),
            icon: <Globe className="w-6 h-6 text-[#3498db]" />,
            color: "#3498db"
        },
        {
            id: "2",
            title: "Bespoke Global Sourcing Service",
            content: (
                <>
                    <p>
                        Can't find what you are looking for in Australia? Let us find it for you. Our "Concierge Sourcing" service removes the stress of hunting for specific vehicles. You tell us your dream spec—make, model, year, colour, and budget—and we utilize our trusted global network to locate, inspect, and negotiate the best price for you. We handle the paperwork, compliance, and customs so you can focus on the drive.
                    </p>
                </>
            ),
            icon: <ShieldCheck className="w-6 h-6 text-[#2980b9]" />,
            color: "#2980b9"
        },
        {
            id: "3",
            title: "A Curated Selection of Local Favourites",
            content: (
                <>
                    <p>
                        While we love imports, we are deeply rooted in the Sydney community. We stock a wide range of high-quality local Australian-delivered vehicles. All our local stock undergoes the same rigorous quality inspections as our imports, ensuring that whether you are buying a daily commuter or a weekend cruiser, you are driving away in a vehicle that meets the Elite standard.
                    </p>
                </>
            ),
            icon: <Car className="w-6 h-6 text-[#d63384]" />,
            color: "#d63384"
        },
        {
            id: "4",
            title: "We Ship Australia-Wide",
            content: (
                <>
                    <p>
                        Based in Sydney, but serving the nation. We understand that the perfect car might not be in your postcode. Elite Motor Cars offers seamless logistics and shipping solutions to getting your new vehicle to your driveway, whether you live in Melbourne, Brisbane, Perth, or regional Australia. We treat every transport job with white-glove care.
                    </p>
                </>
            ),
            icon: <Truck className="w-6 h-6 text-[#e67e22]" />,
            color: "#e67e22"
        },
        {
            id: "5",
            title: "Compliance & Quality You Can Trust",
            content: (
                <>
                    <p className="mb-4">
                        The grey import market can be navigating the unknown, but we make it transparent.
                    </p>

                    <p className="mb-2 font-semibold flex items-center gap-2"><CheckCircle2 className='text-[#d4ac0d]' size={18}/> Full Compliance:</p>
                    <p className="mb-4">
                        We ensure all imported vehicles meet strict Australian Design Rules (ADR) and compliance standards.
                    </p>

                    <p className="mb-2 font-semibold flex items-center gap-2"><CheckCircle2 className='text-[#d4ac0d]' size={18}/> Rigorous Testing:</p>
                    <p className="mb-4">
                        Every car, local or imported, is mechanically inspected and professionally detailed before it hits our showroom floor.
                    </p>

                    <p className="mb-2 font-semibold flex items-center gap-2"><CheckCircle2 className='text-[#d4ac0d]' size={18}/> Transparent History:</p>
                    <p>
                        We provide clear vehicle history reports and auction sheets (for imports) so you know exactly what you are buying.
                    </p>
                </>
            ),
            icon: <HeartHandshake className="w-6 h-6 text-[#d4ac0d]" />,
            color: "#d4ac0d"
        }
    ];

    return (
        <section className="pt-14 bg-white px-6">
            <div className="max-w-5xl mx-auto">
                {/* Main Heading Section */}
                <div className="mb-14 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        What value and how we add value to our customers
                    </h2>
                    <p className="text-gray-600">
                        More Than Just a Dealership: We Are Your Automotive Partners. Our role is to absorb complexity so you can simply enjoy the drive.
                    </p>
                </div>

                {/* Steps Container */}
                <div className="relative">
                    {values.map((step, index) => (
                        <div key={step.id} className="relative flex gap-0 mb-4 last:mb-0">

                            {/* Left Side: Icon and Vertical Line */}
                            <div className="flex flex-col items-center min-w-[80px]">
                                {/* Circle Icon with dynamic border color */}
                                <div
                                    className="w-14 h-14 rounded-full border-[4px] flex items-center justify-center bg-white z-20 shadow-sm"
                                    style={{ borderColor: step.color }}
                                >
                                    {/* Icon color handled in data or use inline style if needed */}
                                    {step.icon}
                                </div>

                                {/* Vertical Line: Dynamic background color */}
                                {index < values.length - 0 && (
                                    <div
                                        className="w-[4px] flex-grow -mt-1 -mb-1"
                                        style={{ backgroundColor: step.color }}
                                    ></div>
                                )}
                            </div>

                            {/* Right Side: Arrow Heading Bar & Content */}
                            <div className="flex-grow pb-10">
                                <div className="relative flex items-center mb-6">
                                    {/* Horizontal connection line with dynamic color */}
                                    <div
                                        className="absolute -left-5 w-5 h-[4px]"
                                        style={{ backgroundColor: step.color }}
                                    ></div>

                                    {/* The Arrow Bar with dynamic background color */}
                                    <div
                                        className="text-white py-2 px-6 pr-14 text-lg font-bold shadow-md"
                                        style={{
                                            backgroundColor: step.color,
                                            clipPath: 'polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%)',
                                            WebkitClipPath: 'polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%)'
                                        }}
                                    >
                                        {step.title}
                                    </div>
                                </div>

                                {/* Content text */}
                                <div className="pl-6">
                                    <p className="text-gray-700 leading-normal font-medium max-w-3xl">
                                        {step.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Closing Footer */}
                <div className="mt-10 p-6 bg-gray-50 rounded-lg border-l-4 border-[#3498db]">
                    <p className="text-gray-800 font-medium italic">
                        Ready to find your dream car? Visit our Sydney showroom or speak with our team today.
                        <span className="inline-block mt-0 font-bold">&nbsp;Drive the Elite way.</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BuySteps;