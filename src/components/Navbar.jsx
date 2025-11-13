import { Link } from 'react-router-dom'
import AppStoreBadge from './AppStoreBadge'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
            <img 
              src="/logo.png" 
              alt="HUGE" 
              className="h-16 md:h-24 lg:h-28 w-auto"
            />
          </Link>
          <AppStoreBadge className="h-10 md:h-12" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar

