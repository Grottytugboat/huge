import { useState } from 'react'
import Confetti from './Confetti'

const AppStoreBadge = ({ className = '', href = "https://apps.apple.com/us/app/huge/id6754827936" }) => {
  const [showConfetti, setShowConfetti] = useState(false)

  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-block hover:opacity-80 transition-opacity ${className}`}
      onMouseEnter={() => setShowConfetti(true)}
      onMouseLeave={() => setShowConfetti(false)}
      style={{ position: 'relative', overflow: 'visible' }}
    >
      <img 
        src="/app-store-badge.png" 
        alt="Download on the App Store"
        className="h-full w-auto"
      />
      <Confetti trigger={showConfetti} />
    </a>
  )
}

export default AppStoreBadge

