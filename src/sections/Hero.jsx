import Button from '../components/Button'

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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="https://apps.apple.com/us/app/huge/id6754827936" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                    <Button variant="primary" className="w-full sm:w-auto">
                      Download
                    </Button>
              </a>
              <a 
                href="https://cal.com/usegather/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" className="w-full sm:w-auto">
                  Book a Call
                </Button>
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

