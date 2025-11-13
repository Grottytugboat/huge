import Card from '../components/Card'

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "See a great ad",
      description: "While scrolling through any platform, you spot an ad that catches your attention.",
      icon: "👀"
    },
    {
      number: "02",
      title: 'Tap "Share → HUGE"',
      description: "Use the native iOS share sheet to instantly send the ad to HUGE.",
      icon: "📤"
    },
    {
      number: "03",
      title: "AI analyzes the ad instantly",
      description: "Our AI automatically breaks down the ad's structure, hook, and creative elements.",
      icon: "⚡"
    },
    {
      number: "04",
      title: "Save, organize, and share insights with your team",
      description: "Store the ad in your library, tag it, and share insights with your team in one tap.",
      icon: "🎯"
    }
  ]

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50/50 to-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-6">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get started in <span className="gradient-text">4 simple steps</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full group">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-6xl font-bold text-primary-100">{step.number}</span>
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{step.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
              </Card>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-0.5 bg-gradient-to-r from-primary-300 to-purple-300"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary-400 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
