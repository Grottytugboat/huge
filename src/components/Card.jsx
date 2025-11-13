const Card = ({ children, className = '', hover = true, ...props }) => {
  const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : ''
  return (
    <div
      className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-gray-100/50 ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card

