import React, { useState, useEffect, useRef } from 'react'

export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [servicesOpen, setServicesOpen] = useState(false)
    const [resourcesOpen, setResourcesOpen] = useState(false)

    const servicesRef = useRef(null)
    const resourcesRef = useRef(null)

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (servicesRef.current && !servicesRef.current.contains(event.target)) {
                setServicesOpen(false)
            }
            if (resourcesRef.current && !resourcesRef.current.contains(event.target)) {
                setResourcesOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const servicesItems = [
        { name: 'Conservation Programs', href: '#' },
        { name: 'Community Outreach', href: '#' },
        { name: 'Wildlife Research', href: '#' },
        { name: 'Education & Training', href: '#' },
    ]

    const resourcesItems = [
        { name: 'Reports & Publications', href: '#' },
        { name: 'News & Updates', href: '#' },
        { name: 'Gallery', href: '#' },
        { name: 'Downloads', href: '#' },
    ]

    return (
        <nav className="sticky top-0 z-50 bg-[#2F5D3A] text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo + Brand */}
                    <a href="/" className="flex items-center gap-3 shrink-0">
                        <img
                            src="/uhwf-logo.webp"   // ← replace with your actual logo path
                            alt="UHWF Logo"
                            className="h-10 w-10 rounded-full object-cover"
                            onError={(e) => {
                                e.target.style.display = 'none'
                            }}
                        />
                        <span className="text-lg font-bold tracking-wide whitespace-nowrap">
                            UHWF-TANZANIA
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        <a href="/" className="hover:text-yellow-300 transition-colors font-medium">
                            Home
                        </a>
                        <a href="/about" className="hover:text-yellow-300 transition-colors font-medium">
                            About Us
                        </a>

                        {/* Services Dropdown */}
                        <div className="relative" ref={servicesRef}>
                            <button
                                onClick={() => {
                                    setServicesOpen(!servicesOpen)
                                    setResourcesOpen(false)
                                }}
                                className="flex items-center gap-1 hover:text-yellow-300 transition-colors font-medium"
                            >
                                Services
                                <svg
                                    className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {servicesOpen && (
                                <div className="absolute top-full left-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden z-50">
                                    {servicesItems.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="block px-4 py-2.5 text-sm hover:bg-green-50 hover:text-[#2F5D3A] transition-colors"
                                            onClick={() => setServicesOpen(false)}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        <a href="#" className="hover:text-yellow-300 transition-colors font-medium">
                            Our Team
                        </a>
                        <a href="contact" className="hover:text-yellow-300 transition-colors font-medium">
                            Contact Us
                        </a>

                        {/* Resources Dropdown */}
                        <div className="relative" ref={resourcesRef}>
                            <button
                                onClick={() => {
                                    setResourcesOpen(!resourcesOpen)
                                    setServicesOpen(false)
                                }}
                                className="flex items-center gap-1 hover:text-yellow-300 transition-colors font-medium"
                            >
                                Resources
                                <svg
                                    className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {resourcesOpen && (
                                <div className="absolute top-full left-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden z-50">
                                    {resourcesItems.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="block px-4 py-2.5 text-sm hover:bg-green-50 hover:text-[#2F5D3A] transition-colors"
                                            onClick={() => setResourcesOpen(false)}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* UHWF Portal Button (Desktop) */}
                    <a
                        href="/portal"
                        className="hidden lg:inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#e09415] text-white font-semibold px-5 py-2.5 rounded-md transition-colors shadow-sm"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        UHWF PORTAL
                    </a>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-[#264a2f] border-t border-white/10">
                    <div className="px-4 py-4 space-y-1">
                        <a
                            href="#"
                            className="block px-3 py-2.5 rounded-md hover:bg-white/10 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="block px-3 py-2.5 rounded-md hover:bg-white/10 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About Us
                        </a>

                        {/* Mobile Services */}
                        <div>
                            <button
                                onClick={() => setServicesOpen(!servicesOpen)}
                                className="flex items-center justify-between w-full px-3 py-2.5 rounded-md hover:bg-white/10 transition-colors"
                            >
                                <span>Services</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {servicesOpen && (
                                <div className="ml-4 mt-1 space-y-1">
                                    {servicesItems.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="block px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-white/10 rounded-md"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        <a
                            href="#"
                            className="block px-3 py-2.5 rounded-md hover:bg-white/10 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Our Team
                        </a>
                        <a
                            href="#"
                            className="block px-3 py-2.5 rounded-md hover:bg-white/10 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact Us
                        </a>

                        {/* Mobile Resources */}
                        <div>
                            <button
                                onClick={() => setResourcesOpen(!resourcesOpen)}
                                className="flex items-center justify-between w-full px-3 py-2.5 rounded-md hover:bg-white/10 transition-colors"
                            >
                                <span>Resources</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {resourcesOpen && (
                                <div className="ml-4 mt-1 space-y-1">
                                    {resourcesItems.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="block px-3 py-2 text-sm text-gray-200 hover:text-white hover:bg-white/10 rounded-md"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* UHWF Portal Button (Mobile) */}
                        <div className="pt-3">
                            <a
                                href="/portal"
                                className="flex items-center justify-center gap-2 bg-[#F5A623] hover:bg-[#e09415] text-white font-semibold px-5 py-3 rounded-md transition-colors w-full"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                                UHWF PORTAL
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}