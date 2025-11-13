import Card from '../components/Card'

const Problem = () => {
  const problems = [
    { icon: "📦", text: "saving them is messy" },
    { icon: "🔖", text: "bookmarks get lost" },
    { icon: "📸", text: "screenshots clutter" },
    { icon: "🔗", text: "sharing requires multiple steps" },
    { icon: "🤖", text: "no AI insights" },
    { icon: "👥", text: "teams miss good creative opportunities" }
  ]

  // Duplicate for seamless loop
  const duplicatedProblems = [...problems, ...problems]

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-semibold mb-6">
            The Problem
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Marketers find great ads while scrolling, but:
          </h2>
        </div>
        
        {/* Scrolling Marquee */}
        <div className="marquee">
          <div className="marquee-content">
            {duplicatedProblems.map((problem, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-3"
              >
                <Card className="p-6 min-w-[280px]">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl flex-shrink-0">{problem.icon}</div>
                    <p className="text-lg text-gray-700 font-medium whitespace-normal">{problem.text}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem
