// App.jsx
import React, { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

function App() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage or system preference
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    }
    return 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar theme={theme} setTheme={setTheme} />

      {/* ==================== HERO SECTION ==================== */}
      <section className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left Content */}
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

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="/register"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-[#F5A623] hover:bg-[#e09415] text-white font-semibold rounded-md shadow-md transition-all hover:shadow-lg"
                >
                  Register Now
                </a>
                <a
                  href="#comments"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-[#2F5D3A] hover:bg-[#264a2f] text-white font-semibold rounded-md shadow-md transition-all hover:shadow-lg"
                >
                  Write a Comment
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Lush green forest and river in Tanzania"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover"
                />
                {/* Optional decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT / MISSION SECTION ==================== */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2e1f] mb-4">
              Our Mission
            </h2>
            <div className="w-20 h-1 bg-[#F5A623] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              We strive to create harmonious coexistence between humans and wildlife through
              sustainable practices, community empowerment, and science-based conservation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-[#f0f4f8] rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-[#2F5D3A] rounded-full flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1a2e1f] mb-3">Land Use Planning</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Participatory approaches to sustainable land management that balance human needs and wildlife conservation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f0f4f8] rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-[#2F5D3A] rounded-full flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1a2e1f] mb-3">Advocacy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Amplifying community voices and influencing policies that protect both people and wildlife.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f0f4f8] rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-[#2F5D3A] rounded-full flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1a2e1f] mb-3">Strategic Research</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Evidence-based studies on human-wildlife interactions to guide effective conservation strategies.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#f0f4f8] rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-[#2F5D3A] rounded-full flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1a2e1f] mb-3">Capacity Building</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Training and empowering local communities with knowledge and skills for sustainable coexistence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== IMPACT / STATS SECTION ==================== */}
      <section className="bg-[#2F5D3A] py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-[#F5A623] mb-2">2022</p>
              <p className="text-white/90 text-sm sm:text-base">Year Founded</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-[#F5A623] mb-2">National</p>
              <p className="text-white/90 text-sm sm:text-base">Scale of Operation</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-[#F5A623] mb-2">00NGO/R/4248</p>
              <p className="text-white/90 text-sm sm:text-base">Registration Number</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-[#F5A623] mb-2">Tanzania</p>
              <p className="text-white/90 text-sm sm:text-base">Mainland Focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CALL TO ACTION ==================== */}
      <section className="bg-[#f0f4f8] py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2e1f] mb-5">
            Join Us in Protecting Tanzania’s Wildlife
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Whether you are a community member, researcher, or partner organization —
            your involvement makes a real difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/register"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#F5A623] hover:bg-[#e09415] text-white font-semibold rounded-md shadow-md transition-all"
            >
              Register Now
            </a>
            <a
              href="/portal"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#2F5D3A] hover:bg-[#264a2f] text-white font-semibold rounded-md shadow-md transition-all"
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

export default App