import { useEffect, useState } from 'react'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const parallaxOffset = scrollY * 0.01 // Minimal 1% parallax movement

  return (
    <>
      <section className="min-h-[110vh] flex items-center justify-center px-8 md:px-12 lg:px-16 xl:px-24 pt-8 sm:pt-10 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-32 lg:pb-40 relative overflow-hidden">
        {/* Premium Background Gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/40 via-white to-purple-50/30"></div>
          {/* Soft radial gradient behind phone only */}
          <div className="absolute top-1/2 right-[35%] w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 65%)' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 sm:gap-20 lg:gap-40 xl:gap-48 items-center">
            {/* Left Content - Enhanced Typography & Spacing */}
            <div className="text-center lg:text-left order-2 lg:order-1 max-w-[600px] mx-auto lg:mx-0 lg:-ml-4">
              {/* Headline Block - Improved Spacing & Hierarchy */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-7 md:mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.2] tracking-tight text-gray-900">
                  One-tap save. AI teardown.
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.2] tracking-tight premium-neon-gradient">
                  Instant competitive edge.
                </h1>
              </div>
              
              {/* Subheadline - Better Size Contrast */}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-[1.5] mb-8 sm:mb-10 md:mb-12 max-w-[520px] mx-auto lg:mx-0">
                See exactly why their ads work, then outperform them fast.
              </p>
              
              {/* CTA Stack - Improved Spacing */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 justify-center lg:justify-start">
                  <a
                    href="https://apps.apple.com/us/app/huge/id6754827936"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full sm:w-auto px-10 py-4 sm:py-[20px] bg-gray-900 text-white font-bold text-base sm:text-lg rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2.5"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Start Free No Card
                  </a>
                  <a 
                    href="https://cal.com/usegather/30min" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-10 py-4 sm:py-[20px] border-2 border-gray-300 text-gray-700 font-semibold text-base sm:text-lg rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 shadow-sm"
                  >
                    Book a 15-min Demo
                  </a>
                </div>
                <p className="text-sm sm:text-base text-gray-500 text-center lg:text-left mt-1">
                  No card needed · Works on all platforms
                </p>
              </div>
            </div>
            
            {/* Right Phone Mockup - Refined */}
            <div className="flex justify-center lg:justify-start relative order-1 lg:order-2 lg:ml-[-6%] lg:pt-0 mt-8 sm:mt-10 md:mt-0">
              <div className="relative scale-75 sm:scale-90 md:scale-100">
                {/* Soft Halo Glow - Refined */}
                <div className="absolute inset-0 -z-10 w-full h-full bg-[#7d5cff] opacity-8 sm:opacity-10 md:opacity-14 rounded-[3.5rem] blur-3xl scale-110"></div>
                
                {/* Phone Mockup */}
                <div 
                  className="relative w-56 md:w-64 lg:w-72 xl:w-80 aspect-[9/19.5] bg-white rounded-[3.5rem] p-3 md:p-3.5 shadow-phone-premium ring-1 ring-gray-200/50 transition-transform duration-500"
                  style={{ transform: `translateY(${parallaxOffset}px)` }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = `translateY(${parallaxOffset}px) scale(1.01)`}
                  onMouseLeave={(e) => e.currentTarget.style.transform = `translateY(${parallaxOffset}px) scale(1)`}
                >
                  <div className="w-full h-full bg-white rounded-[3rem] overflow-hidden relative brightness-105">
                    {/* Video */}
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    >
                      <source src="/ScreenRecording_11-07-2025_13-31-25_1.mov" type="video/quicktime" />
                      <source src="/ScreenRecording_11-07-2025_13-31-25_1.mov" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Glass Reflection Overlay - Enhanced */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>
                
                {/* Floating Insight Cards - Enhanced & Cooler */}
                {/* Card 1: Hook Analysis - Premium Style */}
                <div className="hidden md:block absolute top-8 -right-4 md:-right-6 lg:-right-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-5 border border-green-100 animate-float-card-subtle-1 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-sm shadow-green-200 animate-pulse"></div>
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider">Hook Analysis</span>
                  </div>
                  <p className="text-sm font-bold text-gray-900 mb-1">Emotional trigger detected</p>
                  <p className="text-xs text-gray-600">Opens with question</p>
                </div>
                
                {/* Card 2: Performance Signals - Premium Style */}
                <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 lg:-right-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-5 border border-blue-100 animate-float-card-subtle-2 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 shadow-sm shadow-blue-200 animate-pulse"></div>
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Performance</span>
                  </div>
                  <p className="text-sm font-bold text-gray-900 mb-1">High engagement score</p>
                  <p className="text-xs text-gray-600">92% completion rate</p>
                </div>
                
                {/* Card 3: Structure Breakdown - Premium Style */}
                <div className="hidden md:block absolute -bottom-4 -left-4 md:-left-6 lg:-left-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-5 border border-purple-100 animate-float-card-subtle-3 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-400 to-violet-500 shadow-sm shadow-purple-200 animate-pulse"></div>
                    <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wider">Structure</span>
                  </div>
                  <p className="text-sm font-bold text-gray-900 mb-1">3-act format</p>
                  <p className="text-xs text-gray-600">Hook → Problem → Solution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
