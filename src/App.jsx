import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './pages/index'
import PlatformPage from './pages/PlatformPage'
import CollaborationPage from './pages/CollaborationPage'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/platform/:platformName" element={<PlatformPage />} />
        <Route path="/collaboration/:collaborationName" element={<CollaborationPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App

