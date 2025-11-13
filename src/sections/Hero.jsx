const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-12 xl:px-16 py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Premium Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 via-white to-gray-50/50"></div>
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 lg:space-y-10 order-2 lg:order-1">
            {/* Headline Block */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight text-gray-900">
                Steal winning ads.
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight premium-gradient-text">
                Beat them with AI.
              </h1>
            </div>
            
            {/* Subline */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Save any ad with one tap.<br />
              AI breaks it down so your team learns faster — and wins faster.
            </p>
            
            {/* CTA Stack */}
            <div className="flex flex-col gap-4 pt-2">
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="#"
                  className="px-6 py-3.5 bg-gray-900 text-white font-semibold text-base rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  Start Free
                </a>
                <a 
                  href="https://cal.com/usegather/30min" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 border border-gray-300 text-gray-700 font-semibold text-base rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                >
                  Book a 15-min Demo
                </a>
              </div>
              <p className="text-sm text-gray-500 text-center lg:text-left">
                No card needed · Works on all platforms
              </p>
            </div>
          </div>
          
          {/* Right Phone Mockup with Floating Cards */}
          <div className="flex justify-center lg:justify-end relative order-1 lg:order-2">
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-200/40 via-purple-200/30 to-primary-200/40 rounded-[3.5rem] blur-2xl scale-110"></div>
              
              {/* Phone Mockup */}
              <div className="relative w-64 md:w-72 lg:w-80 xl:w-96 aspect-[9/19.5] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[3.5rem] p-3 md:p-3.5 shadow-2xl ring-1 ring-gray-200/50 transform hover:scale-[1.04] transition-transform duration-500">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-20"></div>
                
                <div className="w-full h-full bg-black rounded-[3rem] overflow-hidden relative">
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
                </div>
              </div>
              
              {/* Floating Insight Cards */}
              {/* Card 1: Hook Analysis */}
              <div className="hidden md:block absolute -top-8 -right-8 md:-right-12 lg:-right-16 bg-white rounded-xl shadow-lg p-4 border border-gray-100 animate-float-card-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Hook Analysis</span>
                </div>
                <p className="text-sm font-medium text-gray-900">Emotional trigger detected</p>
                <p className="text-xs text-gray-500 mt-1">Opens with question</p>
              </div>
              
              {/* Card 2: Performance Signals */}
              <div className="hidden md:block absolute top-1/2 -right-12 md:-right-16 lg:-right-20 bg-white rounded-xl shadow-lg p-4 border border-gray-100 animate-float-card-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Performance</span>
                </div>
                <p className="text-sm font-medium text-gray-900">High engagement score</p>
                <p className="text-xs text-gray-500 mt-1">92% completion rate</p>
              </div>
              
              {/* Card 3: Structure Breakdown */}
              <div className="hidden md:block absolute -bottom-8 -left-8 md:-left-12 lg:-left-16 bg-white rounded-xl shadow-lg p-4 border border-gray-100 animate-float-card-3">
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
  )
}

export default Hero
