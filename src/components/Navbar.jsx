import { Link } from 'react-router-dom'
import AppStoreBadge from './AppStoreBadge'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200/50">
      <div className="w-full py-2 md:py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center cursor-pointer hover:opacity-80 transition-opacity pl-4 md:pl-8 lg:pl-16 xl:pl-24">
            <img 
              src="/logo.png" 
              alt="HUGE" 
              className="h-10 md:h-12 lg:h-14 w-auto"
            />
          </Link>
          <div className="pr-4 md:pr-8 lg:pr-16 xl:pr-24">
            <AppStoreBadge className="h-8 md:h-10" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

