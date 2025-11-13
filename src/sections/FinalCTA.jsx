import Button from '../components/Button'

const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-white">
      {/* Gradient background - lighter */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-purple-50 to-primary-100"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-6">
          Download Now
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
          Ready to unlock insights?
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
          Download HUGE and start transforming how you save and analyze ads.
        </p>
        <a 
          href="https://apps.apple.com/us/app/huge/id6754827936" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button variant="primary" className="text-lg px-12 py-5 shadow-2xl" sparkle={true}>
            Download
          </Button>
        </a>
        
        {/* Social proof */}
        <div className="mt-12 flex items-center justify-center gap-2 text-gray-600 text-sm">
          <span>✓</span>
          <span>No credit card required</span>
          <span>•</span>
          <span>Early access</span>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA

