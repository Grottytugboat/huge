const HowToSave = () => {
  const steps = [
    {
      number: "1",
      title: "Save any ad",
      description: "Share any TikTok, IG Reel, or YouTube Short into your vault.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      number: "2",
      title: "AI breaks it down",
      description: "Hooks, structure, emotions, triggers — fully analyzed automatically.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Create better ads",
      description: "Turn insights into scripts, ad angles, and high-performing content.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-24 md:py-32 px-6 md:px-8 lg:px-12 xl:px-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            How it works
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto">
            From tap → insights → better ads.
          </p>
        </div>

        {/* Step Cards - 3 Column Layout */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:scale-[1.01] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 step-card-border"
            >
              {/* Step Badge + Icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold shadow-sm">
                  {step.number}
                </div>
                <div className="text-gray-400 group-hover:text-purple-500 transition-colors duration-300">
                  {step.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowToSave
