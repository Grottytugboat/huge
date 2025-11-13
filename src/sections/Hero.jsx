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
      <section className="min-h-[110vh] flex items-center justify-center px-8 md:px-12 lg:px-16 xl:px-24 pt-32 md:pt-40 pb-32 md:pb-40 relative overflow-hidden">
        {/* Premium Background Gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/40 via-white to-purple-50/30"></div>
          {/* Soft radial gradient behind phone only */}
          <div className="absolute top-1/2 right-[35%] w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 65%)' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 xl:gap-40 items-center">
            {/* Left Content - Refined Typography */}
            <div className="text-center lg:text-left space-y-4 order-2 lg:order-1 max-w-[540px] mx-auto lg:mx-0 lg:-ml-4">
              {/* Headline Block - Tightened Spacing */}
              <div className="space-y-0 -mb-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] tracking-tight text-gray-900">
                  Understand winning ads instantly.
                </h1>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] tracking-tight premium-neon-gradient">
                  Then beat them.
                </h1>
              </div>
              
              {/* Subline - Moved Closer */}
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed -mt-4">
                One tap to save. AI analyzes everything.<br />
                Your team gets smarter, your ads get better.
              </p>
              
              {/* CTA Stack - Refined */}
              <div className="flex flex-col gap-3 pt-4">
                <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start">
                  <a
                    href="https://apps.apple.com/us/app/huge/id6754827936"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-8 py-[18px] bg-gray-900 text-white font-bold text-base rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Start Free No Card
                  </a>
                  <a 
                    href="https://cal.com/usegather/30min" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-[18px] border border-gray-300 text-gray-700 font-semibold text-base rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 shadow-sm"
                  >
                    Book a 15-min Demo
                  </a>
                </div>
                <p className="text-sm text-gray-500 text-center lg:text-left">
                  No card needed · Works on all platforms
                </p>
              </div>
            </div>
            
            {/* Right Phone Mockup - Refined */}
            <div className="flex justify-center lg:justify-start relative order-1 lg:order-2 lg:ml-[-6%] lg:pt-0">
              <div className="relative">
                {/* Soft Halo Glow - Refined */}
                <div className="absolute inset-0 -z-10 w-full h-full bg-[#7d5cff] opacity-14 rounded-[3.5rem] blur-3xl scale-110"></div>
                
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
                
                {/* Floating Insight Cards - Repositioned & Aligned */}
                {/* Card 1: Hook Analysis - Lowered & Spaced */}
                <div className="hidden md:block absolute top-8 -right-4 md:-right-6 lg:-right-8 bg-white rounded-xl shadow-card-premium p-4 border border-gray-100 animate-float-card-subtle-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Hook Analysis</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">Emotional trigger detected</p>
                  <p className="text-xs text-gray-500 mt-1">Opens with question</p>
                </div>
                
                {/* Card 2: Performance Signals - Aligned */}
                <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 lg:-right-8 bg-white rounded-xl shadow-card-premium p-4 border border-gray-100 animate-float-card-subtle-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Performance</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">High engagement score</p>
                  <p className="text-xs text-gray-500 mt-1">92% completion rate</p>
                </div>
                
                {/* Card 3: Structure Breakdown - Aligned */}
                <div className="hidden md:block absolute -bottom-4 -left-4 md:-left-6 lg:-left-8 bg-white rounded-xl shadow-card-premium p-4 border border-gray-100 animate-float-card-subtle-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Structure</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">3-act format</p>
                  <p className="text-xs text-gray-500 mt-1">Hook → Problem → Solution</p>
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
