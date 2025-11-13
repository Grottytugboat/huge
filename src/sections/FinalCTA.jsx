import { Link } from 'react-router-dom'
import AppStoreBadge from '../components/AppStoreBadge'

const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-black">
      {/* Gradient background - black */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6 border border-white/20">
          Download Now
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
          Ready to unlock insights?
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Download HUGE and start transforming how you save and analyze ads.
        </p>
        <AppStoreBadge className="h-16 md:h-20" />
        
        {/* Social proof */}
        <div className="mt-12 flex items-center justify-center gap-2 text-gray-300 text-sm">
          <span>✓</span>
          <span>No credit card required</span>
          <span>•</span>
          <span>Early access</span>
        </div>
        
        {/* Footer Links */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link to="/privacy" className="text-white hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/terms" className="text-white hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/contact" className="text-white hover:text-gray-300 transition-colors">
              Contact Us
            </Link>
          </div>
          <p className="mt-6 text-gray-400 text-xs">
            © 2025 HUGE. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA

