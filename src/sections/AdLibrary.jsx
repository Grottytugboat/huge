import Card from '../components/Card'

const AdLibrary = () => {
  const organizationOptions = [
    "tags",
    "brand",
    "platform",
    "hook style",
    "category"
  ]

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/10 via-transparent to-primary-50/10"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-6">
            Organization
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Your <span className="gradient-text">ad library</span>, organized
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Organize ads by tags, brand, platform, hook style, and category. Searchable and team-sharable.
          </p>
        </div>
        
        {/* Organization options */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {organizationOptions.map((option, index) => (
            <span
              key={index}
              className="px-6 py-3 bg-gradient-to-r from-primary-50 to-purple-50 border border-primary-100 rounded-full text-gray-700 font-medium hover:border-primary-300 transition-colors duration-300"
            >
              {option}
            </span>
          ))}
        </div>
        
        {/* Grid of saved ads */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <div
              key={num}
              className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="w-full h-full flex items-center justify-center relative">
                <span className="text-gray-600 text-xs font-medium">Ad {num}</span>
                {/* Tagging UI overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 to-purple-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-sm font-semibold">View Details</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tagging UI example */}
        <div className="mt-16">
          <Card className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Smart Organization</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg">viral</span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">UGC</span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">ecommerce</span>
                  <span className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border-2 border-dashed border-gray-300 hover:border-primary-300 transition-colors">+ Add tag</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Platform
                  </label>
                  <select className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all">
                    <option>Instagram</option>
                    <option>TikTok</option>
                    <option>Facebook</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all">
                    <option>Fashion</option>
                    <option>Tech</option>
                    <option>Food</option>
                  </select>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default AdLibrary

