const Button = ({ children, variant = 'primary', className = '', sparkle = false, ...props }) => {
  const baseStyles = 'px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl relative'
  
  const variants = {
    primary: 'text-black border-2 border-black shadow-[0_8px_16px_rgba(0,0,0,0.4),0_4px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.5),0_6px_12px_rgba(0,0,0,0.4)]',
    secondary: 'bg-black text-white border-2 border-black hover:bg-gray-900 hover:shadow-2xl',
    outline: 'bg-transparent text-black border-2 border-black hover:bg-black hover:text-white',
    ghost: 'bg-transparent text-black hover:bg-gray-100 shadow-none'
  }
  
  // Apply gradient background for primary button - using light blue and pink
  const primaryStyle = variant === 'primary' 
    ? { 
        background: 'linear-gradient(to right, #c0e7eb, #ffd8dd)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      }
    : {}

  const handleMouseEnter = (e) => {
    if (variant === 'primary') {
      e.target.style.background = 'linear-gradient(to right, #a8dde3, #ffc8d0)'
      e.target.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.5), 0 6px 12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
    }
  }

  const handleMouseLeave = (e) => {
    if (variant === 'primary') {
      e.target.style.background = 'linear-gradient(to right, #c0e7eb, #ffd8dd)'
      e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
    }
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sparkle ? 'sparkle-button' : ''} ${className}`}
      style={primaryStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {sparkle && (
        <>
          <span className="sparkle"></span>
          <span className="sparkle"></span>
          <span className="sparkle"></span>
          <span className="sparkle"></span>
          <span className="sparkle"></span>
          <span className="sparkle"></span>
          <span className="sparkle"></span>
          <span className="sparkle"></span>
        </>
      )}
      <span className="relative z-30">{children}</span>
    </button>
  )
}

export default Button

