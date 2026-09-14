import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you can connect to EmailJS, Formspree, or your backend
        console.log('Form submitted:', formData)
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#f0f4f8]">
            <Navbar />

            {/* Hero Banner */}
            <section className="bg-[#2F5D3A] text-white py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Contact Us</h1>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto">
                        We would love to hear from you. Reach out for partnerships, inquiries, or support.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                        {/* Contact Information */}
                        <div className="lg:col-span-1 space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold text-[#1a2e1f] mb-2">Get In Touch</h2>
                                <div className="w-16 h-1 bg-[#F5A623] mb-6"></div>
                                <p className="text-gray-600 leading-relaxed">
                                    Have questions about our work or want to partner with us?
                                    Feel free to contact us using the details below or the form.
                                </p>
                            </div>

                            {/* Info Cards */}
                            <div className="space-y-4">
                                {/* Address */}
                                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-12 h-12 bg-[#2F5D3A] rounded-full flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#1a2e1f]">Our Location</h4>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Tanzania Mainland<br />
                                            Registered NGO: 00NGO/R/4248
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-12 h-12 bg-[#2F5D3A] rounded-full flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#1a2e1f]">Email Us</h4>
                                        <a href="mailto:info@uhwftanzania.org" className="text-sm text-gray-600 hover:text-[#F5A623] transition-colors mt-1 block">
                                            info@uhwftanzania.org
                                        </a>
                                        <a href="mailto:support@uhwftanzania.org" className="text-sm text-gray-600 hover:text-[#F5A623] transition-colors block">
                                            support@uhwftanzania.org
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-12 h-12 bg-[#2F5D3A] rounded-full flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#1a2e1f]">Call Us</h4>
                                        <a href="tel:+255XXXXXXXXX" className="text-sm text-gray-600 hover:text-[#F5A623] transition-colors mt-1 block">
                                            +255 XXX XXX XXX
                                        </a>
                                        <p className="text-xs text-gray-500 mt-1">Mon – Fri, 8:00 AM – 5:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h4 className="font-semibold text-[#1a2e1f] mb-3">Follow Us</h4>
                                <div className="flex gap-3">
                                    {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                                        <a
                                            key={social}
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-[#2F5D3A] hover:bg-[#F5A623] text-white flex items-center justify-center transition-colors"
                                        >
                                            <span className="sr-only">{social}</span>
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                {social === 'facebook' && (
                                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                                )}
                                                {social === 'twitter' && (
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                )}
                                                {social === 'instagram' && (
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                                )}
                                                {social === 'linkedin' && (
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                )}
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                                <h2 className="text-2xl font-bold text-[#1a2e1f] mb-2">Send Us a Message</h2>
                                <div className="w-16 h-1 bg-[#F5A623] mb-6"></div>

                                {submitted ? (
                                    <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 text-center">
                                        <svg className="w-12 h-12 text-green-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <h3 className="text-lg font-semibold mb-1">Message Sent Successfully!</h3>
                                        <p className="text-sm">Thank you for contacting UHWF. We will get back to you soon.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                    Full Name <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Your full name"
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F5D3A] focus:border-transparent outline-none transition"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                    Email Address <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="you@example.com"
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F5D3A] focus:border-transparent outline-none transition"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="+255 XXX XXX XXX"
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F5D3A] focus:border-transparent outline-none transition"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                    Subject <span className="text-red-500">*</span>
                                                </label>
                                                <select
                                                    name="subject"
                                                    required
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F5D3A] focus:border-transparent outline-none transition bg-white"
                                                >
                                                    <option value="">Select a subject</option>
                                                    <option value="General Inquiry">General Inquiry</option>
                                                    <option value="Partnership">Partnership</option>
                                                    <option value="Volunteer">Volunteer Opportunity</option>
                                                    <option value="Donation">Donation</option>
                                                    <option value="Research Collaboration">Research Collaboration</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                Message <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                name="message"
                                                required
                                                rows="5"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Write your message here..."
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F5D3A] focus:border-transparent outline-none transition resize-none"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full sm:w-auto px-8 py-3.5 bg-[#F5A623] hover:bg-[#e09415] text-white font-semibold rounded-lg shadow-md transition-all"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-72 bg-gray-200 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                            <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p className="text-sm">Map will be embedded here</p>
                            <p className="text-xs mt-1">(Google Maps / OpenStreetMap)</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}