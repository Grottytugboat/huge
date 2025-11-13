import { useState } from 'react'
import Confetti from './Confetti'

const AppStoreBadge = ({ className = '', href = "https://apps.apple.com/us/app/huge/id6754827936" }) => {
  const [showConfetti, setShowConfetti] = useState(false)

  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setShowConfetti(true)}
      onMouseLeave={() => setShowConfetti(false)}
      style={{ position: 'relative', overflow: 'visible' }}
    >
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
        Get
      </button>
      <Confetti trigger={showConfetti} />
    </a>
  )
}

export default AppStoreBadge

