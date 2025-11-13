import AppStoreBadge from '../components/AppStoreBadge'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-32 pt-40 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Save ads instantly.
              <br />
              <span className="gradient-text-animated inline-block">
                Unlock insights automatically.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              HUGE lets marketers instantly save viral ads and videos from any platform, analyze them with AI, and share insights with their team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 items-center">
              <AppStoreBadge className="h-[52px]" />
              <a 
                href="https://cal.com/usegather/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base underline decoration-gray-400 hover:decoration-gray-600"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Book a Call</span>
              </a>
            </div>
          </div>
          
          {/* Device Mockup with Video */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative">
              {/* iPhone frame */}
              <div className="w-64 md:w-80 lg:w-96 aspect-[9/19.5] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl ring-4 ring-primary-500/20">
                <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                  {/* Video */}
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/ScreenRecording_11-07-2025_13-31-25_1.mov" type="video/quicktime" />
                    <source src="/ScreenRecording_11-07-2025_13-31-25_1.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              {/* Glowing background effect */}
              <div className="absolute -z-10 top-10 left-10 w-full h-full bg-gradient-to-br from-primary-400/40 to-purple-400/40 rounded-[3rem] blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

