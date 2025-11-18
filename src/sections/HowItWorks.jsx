const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Save any ad",
      description: "Share any TikTok, IG Reel, or YouTube Short into your vault.",
      icon: "✓"
    },
    {
      number: "2",
      title: "AI breaks it down",
      description: "Hooks, structure, emotions, triggers — fully analyzed automatically.",
      icon: "💡"
    },
    {
      number: "3",
      title: "Create better ads",
      description: "Turn insights into scripts, ad angles, and high-performing content.",
      icon: "⚡"
    }
  ]

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-black relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-blue-900/30"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            How it works
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">
            From tap → insights → better ads.
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              {/* Number badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                  <span className="text-2xl md:text-3xl font-bold text-white">{step.number}</span>
                </div>
                <span className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">{step.icon}</span>
              </div>
              
              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-base text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
