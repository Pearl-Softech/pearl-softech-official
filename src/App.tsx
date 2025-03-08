import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import About from './pages/About'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route index path='/about' element={<About />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App