import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const AboutUs = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#f0f4f8]">
            <Navbar />

            {/* Hero Banner */}
            <section className="bg-[#2F5D3A] text-white py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About Us</h1>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto">
                        Learn more about Universal Human-Wildlife Foundation and our journey
                    </p>
                </div>
            </section>

            {/* Who We Are */}
            <section className="py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-[#1a2e1f] mb-4">Who We Are</h2>
                            <div className="w-16 h-1 bg-[#F5A623] mb-6"></div>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <strong>Universal Human-Wildlife Foundation (UHWF)</strong> is a Non-Governmental
                                Organization founded in December 2022 and registered under registration number
                                <strong> 00NGO/R/4248</strong> in accordance with the Non-Governmental Organization
                                Act, No. 24 of 2002 (as amended in 2019).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We operate across Tanzania Mainland with a national mandate to promote sustainable
                                land, environmental, and natural resource management. Our core focus is on fostering
                                positive human-wildlife interactions through participatory approaches.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                UHWF brings together communities, researchers, policymakers, and partners to build
                                lasting solutions that protect both people and wildlife.
                            </p>
                        </div>

                        <div className="rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Conservation work in Tanzania"
                                className="w-full h-[360px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="bg-white py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Vision */}
                        <div className="bg-[#f0f4f8] rounded-2xl p-8 border border-gray-100">
                            <div className="w-14 h-14 bg-[#2F5D3A] rounded-full flex items-center justify-center mb-5">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-[#1a2e1f] mb-3">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                A Tanzania where humans and wildlife thrive together in harmony through sustainable
                                land use, informed communities, and effective conservation practices.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-[#f0f4f8] rounded-2xl p-8 border border-gray-100">
                            <div className="w-14 h-14 bg-[#F5A623] rounded-full flex items-center justify-center mb-5">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-[#1a2e1f] mb-3">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To contribute to sustainable land, environmental and natural resource management
                                by promoting participatory land-use planning, advocacy, strategic research,
                                capacity building, and networking focused on human-wildlife interactions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#1a2e1f] mb-4">Our Core Values</h2>
                        <div className="w-20 h-1 bg-[#F5A623] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Integrity', desc: 'We uphold honesty, transparency and accountability in all our work.' },
                            { title: 'Collaboration', desc: 'We believe lasting change comes from working together with communities and partners.' },
                            { title: 'Innovation', desc: 'We embrace creative and science-based solutions to complex conservation challenges.' },
                            { title: 'Respect', desc: 'We value local knowledge, cultural diversity and the rights of both people and wildlife.' },
                        ].map((value) => (
                            <div
                                key={value.title}
                                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
                            >
                                <h4 className="text-lg font-bold text-[#2F5D3A] mb-2">{value.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="bg-[#2F5D3A] py-16 lg:py-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">What We Do</h2>
                        <div className="w-20 h-1 bg-[#F5A623] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Participatory Land Use Planning',
                                desc: 'Engaging communities to design land-use plans that reduce conflict and protect critical habitats.',
                            },
                            {
                                title: 'Advocacy & Policy Influence',
                                desc: 'Working with decision-makers to create enabling policies for human-wildlife coexistence.',
                            },
                            {
                                title: 'Strategic Research',
                                desc: 'Generating evidence on human-wildlife interactions to inform practical solutions.',
                            },
                            {
                                title: 'Capacity Building',
                                desc: 'Training community members, local leaders and stakeholders in conservation skills.',
                            },
                            {
                                title: 'Networking & Partnerships',
                                desc: 'Building strong networks among NGOs, government, researchers and communities.',
                            },
                            {
                                title: 'Community Outreach',
                                desc: 'Raising awareness and empowering local people as stewards of their natural resources.',
                            },
                        ].map((item) => (
                            <div key={item.title} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                                <h4 className="text-lg font-semibold text-[#F5A623] mb-2">{item.title}</h4>
                                <p className="text-white/85 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-[#f0f4f8]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#1a2e1f] mb-4">
                        Want to Partner With Us?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Join our mission to create a future where humans and wildlife thrive together.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/contact"
                            className="px-8 py-3.5 bg-[#F5A623] hover:bg-[#e09415] text-white font-semibold rounded-md transition-all"
                        >
                            Contact Us
                        </a>
                        <a
                            href="/portal"
                            className="px-8 py-3.5 bg-[#2F5D3A] hover:bg-[#264a2f] text-white font-semibold rounded-md transition-all"
                        >
                            UHWF Portal
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}