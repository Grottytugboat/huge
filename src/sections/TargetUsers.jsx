import Card from '../components/Card'

const TargetUsers = () => {
  const users = [
    {
      icon: "📊",
      title: "Marketers",
      description: "Save and analyze winning ads to inform your campaigns"
    },
    {
      icon: "🎨",
      title: "Creative Strategists",
      description: "Understand what makes ads work and apply those insights"
    },
    {
      icon: "🏢",
      title: "Agencies",
      description: "Build a shared library of inspiration for your team"
    },
    {
      icon: "📹",
      title: "UGC Creators",
      description: "Study viral patterns and optimize your content"
    },
    {
      icon: "💰",
      title: "Paid Media Buyers",
      description: "Track competitor ads and identify winning creative angles"
    },
    {
      icon: "🔍",
      title: "Brands Analyzing Competitors",
      description: "Monitor competitor strategies and stay ahead of trends"
    }
  ]

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 via-transparent to-purple-50/20"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-6">
            For Everyone
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Built for <span className="gradient-text">teams who create</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user, index) => (
            <Card key={index} className="group">
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{user.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors duration-300">{user.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{user.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TargetUsers

