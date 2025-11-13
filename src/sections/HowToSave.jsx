const HowToSave = () => {
  const steps = [
    {
      number: "1",
      title: "Save Viral Videos",
      description: "Paste any video URL from TikTok, Instagram, YouTube, or other platforms. Our system instantly saves it to your vault."
    },
    {
      number: "2",
      title: "Get AI Transcription",
      description: "Our AI automatically transcribes the video, analyzing hooks, patterns, and engagement triggers used in viral content."
    },
    {
      number: "3",
      title: "Create Your Content",
      description: "Use the insights, copy winning formulas, and create your own viral videos and ads that drive results."
    }
  ]

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 lg:px-16 xl:px-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            How it works
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Save, analyze, and create viral content in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              {/* Number Circle */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">
                  <span className="text-2xl md:text-3xl font-bold text-white">{step.number}</span>
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
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

