import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import reactLogo from '@assets/react.svg'
import viteLogo from '@assets/vite.svg'
import '@src/App.css'
import Home from '@pages/Home'
import About from '@pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="app">
        <nav className= "navbar">
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  )
}

export default App
