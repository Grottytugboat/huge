import { Link } from 'react-router-dom'
import AppStoreBadge from './AppStoreBadge'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50">
      <div className="w-full py-3 md:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8">
          <Link to="/" className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
            <img 
              src="/logo.png" 
              alt="HUGE" 
              className="h-10 md:h-12 lg:h-14 w-auto"
            />
          </Link>
          <div className="hidden md:block">
            <AppStoreBadge className="h-8 md:h-10" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
