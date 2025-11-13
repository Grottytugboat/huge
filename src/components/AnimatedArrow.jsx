const AnimatedArrow = () => {
  return (
    <div className="flex justify-center items-center py-12 md:py-16 relative overflow-visible">
      {/* Animated arrow with multiple effects */}
      <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
        {/* Main arrow */}
        <svg 
          className="w-12 h-12 md:w-16 md:h-16 text-primary-500 animate-arrow-bounce relative z-10"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2.5} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
        
        {/* Glowing effect behind arrow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-400/30 to-purple-400/30 rounded-full blur-2xl animate-pulse"></div>
        </div>
        
        {/* Animated particles/dots flowing upward */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-2 h-2 bg-primary-400 rounded-full animate-float-up-1"></div>
          <div className="absolute w-2 h-2 bg-purple-400 rounded-full animate-float-up-2"></div>
          <div className="absolute w-1.5 h-1.5 bg-primary-300 rounded-full animate-float-up-3"></div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedArrow

