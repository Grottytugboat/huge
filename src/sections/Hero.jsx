import AppStoreBadge from '../components/AppStoreBadge'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 xl:px-24 py-12 pt-16 md:pt-20 lg:pt-24 relative overflow-hidden">
      {/* Enhanced animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Text Content - Enhanced */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                Save ads instantly.
                <br />
                <span className="gradient-text-animated inline-block mt-2">
                  Unlock insights automatically.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                HUGE lets marketers instantly save viral ads and videos from any platform, analyze them with AI, and share insights with their team.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
              <AppStoreBadge className="h-14 md:h-16 transition-transform hover:scale-105" />
              <a 
                href="https://cal.com/usegather/30min" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-all text-base md:text-lg font-medium hover:gap-3 group"
              >
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="underline decoration-2 underline-offset-4 decoration-gray-300 group-hover:decoration-gray-500">Book a Call</span>
              </a>
            </div>
          </div>
          
          {/* Device Mockup with Video - Enhanced */}
          <div className="flex justify-center lg:justify-end relative order-1 lg:order-2">
            <div className="relative">
              {/* Enhanced iPhone frame */}
              <div className="relative w-52 md:w-64 lg:w-72 xl:w-80 aspect-[9/19.5] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[3.5rem] p-3 md:p-3.5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] ring-1 ring-white/10 flex-shrink-0 transform hover:scale-[1.02] transition-transform duration-500">
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
              
              {/* Enhanced glowing background effects */}
              <div className="absolute -z-10 top-12 left-12 w-full h-full bg-gradient-to-br from-primary-400/30 via-purple-400/20 to-primary-400/30 rounded-[3.5rem] blur-3xl pointer-events-none animate-pulse"></div>
              <div className="absolute -z-20 top-6 left-6 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-[3.5rem] blur-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

