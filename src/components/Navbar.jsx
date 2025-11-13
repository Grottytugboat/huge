import Button from './Button'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="HUGE" 
              className="h-16 md:h-24 lg:h-28 w-auto"
            />
          </div>
          <a 
            href="https://apps.apple.com/us/app/huge/id6754827936" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="primary" className="text-sm px-6 py-2.5" sparkle={true}>
              Download
            </Button>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

