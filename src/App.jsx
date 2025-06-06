import HeaderNavigation from '@layouts/HeaderNavigation'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import '@src/App.css'
import Home from '@pages/Home'
import About from '@pages/About'

function App() {

  return (
    <BrowserRouter>
      <div className="app app-container bg-background justify-center">
        <HeaderNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
