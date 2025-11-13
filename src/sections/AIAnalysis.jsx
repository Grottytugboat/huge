import Card from '../components/Card'

const AIAnalysis = () => {
  const features = [
    {
      icon: "📝",
      title: "Transcript",
      description: "Automatic transcription of all spoken content"
    },
    {
      icon: "🎣",
      title: "Hook Breakdown",
      description: "Identify what makes the ad's opening compelling"
    },
    {
      icon: "🏗️",
      title: "Creative Structure",
      description: "Understand the ad's narrative flow and pacing"
    },
    {
      icon: "✂️",
      title: "Editing Pattern Detection",
      description: "Analyze cuts, transitions, and visual rhythm"
    },
    {
      icon: "🎯",
      title: "Audience Intent",
      description: "Determine who the ad targets and why"
    },
    {
      icon: "🔥",
      title: "Viral Triggers",
      description: "Identify elements that drive engagement"
    }
  ]

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 via-transparent to-primary-50/20"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold mb-6">
            AI-Powered
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Automatic insights for <span className="gradient-text">every ad</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Our AI analyzes every aspect of your saved ads instantly
          </p>
        </div>
        
        {/* Modern grid - 6 items in 2 rows of 3 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AIAnalysis

