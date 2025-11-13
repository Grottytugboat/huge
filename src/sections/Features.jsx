import { useState, useEffect } from 'react'
import Card from '../components/Card'

const Features = () => {
  const features = [
    {
      icon: "⭐",
      title: "Instant Saving",
      description: "Save any ad or viral video directly from the native iOS share sheet."
    },
    {
      icon: "🤖",
      title: "AI Analysis",
      description: "Automatic transcript, hook breakdown, creative structure, editing pattern detection, audience intent, viral triggers, and competitor insights."
    },
    {
      icon: "👥",
      title: "Team Collaboration",
      description: "Share ads + insights to your team in one tap. Works with Slack, Notion, and more."
    },
    {
      icon: "📚",
      title: "Ad Library",
      description: "Organize ads by tags, brand, platform, hook style, and category. Searchable and team-sharable."
    }
  ]

  const [checkedItems, setCheckedItems] = useState([false, false, false, false])

  useEffect(() => {
    const timers = features.map((_, index) => {
      return setTimeout(() => {
        setCheckedItems(prev => {
          const newChecked = [...prev]
          newChecked[index] = true
          return newChecked
        })
      }, index * 300 + 500)
    })

    return () => timers.forEach(timer => clearTimeout(timer))
  }, [])

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-purple-50/30"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-6">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Everything you need to <span className="gradient-text">analyze ads</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group">
              <div className="flex items-start gap-6">
                <div className="relative flex-shrink-0">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  {/* Animated Checkbox */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                    {checkedItems[index] && (
                      <svg 
                        className="w-5 h-5 text-white checkmark-animate" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={3} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
