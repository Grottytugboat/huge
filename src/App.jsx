import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './pages/index'
import PlatformPage from './pages/PlatformPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/platform/:platformName" element={<PlatformPage />} />
      </Routes>
    </Router>
  )
}

export default App

