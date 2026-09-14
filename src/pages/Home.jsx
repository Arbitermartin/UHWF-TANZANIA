import React, { useState, useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Home = () => {
    const testimonials = [
        {
            name: 'Amina Juma',
            role: 'Community Leader, Arusha',
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
            quote:
                'UHWF has transformed how our village interacts with wildlife. Through their land-use planning programs, we now coexist peacefully with elephants while protecting our farms.',
        },
        {
            name: 'Dr. Joseph Mwangi',
            role: 'Wildlife Researcher',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            quote:
                'The strategic research and data-driven approach of UHWF is outstanding. Their work is filling critical knowledge gaps in human-wildlife conflict in Tanzania.',
        },
        {
            name: 'Grace Kimaro',
            role: 'Teacher & Conservation Advocate',
            image: 'https://randomuser.me/api/portraits/women/68.jpg',
            quote:
                'The capacity building workshops organized by UHWF empowered our youth. Students now understand the value of conservation and actively participate in local initiatives.',
        },
        {
            name: 'Peter Mallya',
            role: 'Farmer, Kilimanjaro Region',
            image: 'https://randomuser.me/api/portraits/men/75.jpg',
            quote:
                'Before UHWF came, we lost crops every season. Now with their support and training, both our livelihoods and the wildlife are safer. Truly life-changing work.',
        },
    ]

    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
        }, 5000)
        return () => clearInterval(timer)
    }, [testimonials.length])

    const prevSlide = () => {
        setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
    }

    const nextSlide = () => {
        setCurrent(current === testimonials.length - 1 ? 0 : current + 1)
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#f0f4f8]">
            <Navbar />

            {/* ==================== HERO SECTION ==================== */}
            <section>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a2e1f] tracking-tight mb-6">
                                UHWF TANZANIA
                            </h1>

                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 max-w-xl">
                                <strong className="text-[#1a2e1f]">Universal Human-Wildlife Foundation (UHWF)</strong> is a
                                Non-Governmental Organization (NGO) founded in December 2022 to operate in Tanzania Mainland
                                and registered with registration number <strong>00NGO/R/4248</strong> under the Non-Governmental
                                Organization Act, No.24 of 2002 as altered in 2019. The organization will operate on a national
                                scale and strive to contribute to sustainable land, environmental, and natural resource management
                                with a focus on core human-wildlife interactions through participatory land use planning, advocacy,
                                strategic research, capacity building, and networking.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="/register"
                                    className="inline-flex items-center justify-center px-7 py-3.5 bg-[#F5A623] hover:bg-[#e09415] text-white font-semibold rounded-md shadow-md transition-all"
                                >
                                    Register Now
                                </a>
                                <a
                                    href="#comments"
                                    className="inline-flex items-center justify-center px-7 py-3.5 bg-[#2F5D3A] hover:bg-[#264a2f] text-white font-semibold rounded-md shadow-md transition-all"
                                >
                                    Write a Comment
                                </a>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Forest and river in Tanzania"
                                    className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== MISSION SECTION ==================== */}
            <section className="bg-white py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2e1f] mb-4">Our Mission</h2>
                        <div className="w-20 h-1 bg-[#F5A623] mx-auto mb-6"></div>
                        <p className="text-gray-600 text-lg">
                            We strive to create harmonious coexistence between humans and wildlife through
                            sustainable practices, community empowerment, and science-based conservation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: 'Land Use Planning',
                                desc: 'Participatory approaches to sustainable land management that balance human needs and wildlife conservation.',
                            },
                            {
                                title: 'Advocacy',
                                desc: 'Amplifying community voices and influencing policies that protect both people and wildlife.',
                            },
                            {
                                title: 'Strategic Research',
                                desc: 'Evidence-based studies on human-wildlife interactions to guide effective conservation strategies.',
                            },
                            {
                                title: 'Capacity Building',
                                desc: 'Training and empowering local communities with knowledge and skills for sustainable coexistence.',
                            },
                        ].map((item) => (
                            <div key={item.title} className="bg-[#f0f4f8] rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100">
                                <div className="w-14 h-14 bg-[#2F5D3A] rounded-full flex items-center justify-center mb-5">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-[#1a2e1f] mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== TESTIMONIALS SLIDESHOW ==================== */}
            <section className="bg-[#2F5D3A] py-16 lg:py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What People Say</h2>
                        <div className="w-20 h-1 bg-[#F5A623] mx-auto"></div>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${current * 100}%)` }}
                            >
                                {testimonials.map((item, index) => (
                                    <div key={index} className="w-full flex-shrink-0 px-4">
                                        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl max-w-3xl mx-auto text-center">
                                            <svg className="w-12 h-12 text-[#F5A623] mx-auto mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                            </svg>

                                            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-8 italic">
                                                "{item.quote}"
                                            </p>

                                            <div className="flex items-center justify-center gap-4">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-14 h-14 rounded-full object-cover border-4 border-[#F5A623]"
                                                />
                                                <div className="text-left">
                                                    <h4 className="font-bold text-[#1a2e1f] text-lg">{item.name}</h4>
                                                    <p className="text-sm text-gray-500">{item.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-[#F5A623] text-white flex items-center justify-center transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-[#F5A623] text-white flex items-center justify-center transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex justify-center gap-2.5 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index ? 'bg-[#F5A623] w-8' : 'bg-white/40 hover:bg-white/70'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== STATS SECTION ==================== */}
            <section className="bg-[#1e3a24] py-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-4xl sm:text-5xl font-bold text-[#F5A623] mb-2">2022</p>
                            <p className="text-white/90">Year Founded</p>
                        </div>
                        <div>
                            <p className="text-4xl sm:text-5xl font-bold text-[#F5A623] mb-2">National</p>
                            <p className="text-white/90">Scale of Operation</p>
                        </div>
                        <div>
                            <p className="text-4xl sm:text-5xl font-bold text-[#F5A623] mb-2">00NGO/R/4248</p>
                            <p className="text-white/90">Registration No.</p>
                        </div>
                        <div>
                            <p className="text-4xl sm:text-5xl font-bold text-[#F5A623] mb-2">Tanzania</p>
                            <p className="text-white/90">Mainland Focus</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== CTA SECTION ==================== */}
            <section className="bg-[#f0f4f8] py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2e1f] mb-5">
                        Join Us in Protecting Tanzania’s Wildlife
                    </h2>
                    <p className="text-gray-600 text-lg mb-8">
                        Whether you are a community member, researcher, or partner organization —
                        your involvement makes a real difference.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/register"
                            className="px-8 py-3.5 bg-[#F5A623] hover:bg-[#e09415] text-white font-semibold rounded-md"
                        >
                            Register Now
                        </a>
                        <a
                            href="/portal"
                            className="px-8 py-3.5 bg-[#2F5D3A] hover:bg-[#264a2f] text-white font-semibold rounded-md"
                        >
                            Access UHWF Portal
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}