import Lottie from 'lottie-react'
import arrowAnimation from '../assets/arrow-animation.json'

const AnimatedArrow = () => {
  return (
    <div className="flex justify-center items-center py-2 md:py-3 relative overflow-visible">
      {/* Lottie animated arrow */}
      <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
        <Lottie 
          animationData={arrowAnimation}
          loop={true}
          autoplay={true}
          className="w-full h-full"
          style={{ transform: 'rotate(450deg)' }}
        />
      </div>
    </div>
  )
}

export default AnimatedArrow

