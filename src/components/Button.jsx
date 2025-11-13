const Button = ({ children, variant = 'primary', className = '', sparkle = false, ...props }) => {
  const baseStyles = 'px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl relative'
  
  const variants = {
    primary: 'bg-white text-black border-2 border-black hover:bg-gray-100 hover:text-black shadow-lg hover:shadow-2xl',
    secondary: 'bg-black text-white border-2 border-black hover:bg-gray-900 hover:shadow-2xl',
    outline: 'bg-transparent text-black border-2 border-black hover:bg-black hover:text-white',
    ghost: 'bg-transparent text-black hover:bg-gray-100 shadow-none'
  }
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sparkle ? 'sparkle-button' : ''} ${className}`}
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

