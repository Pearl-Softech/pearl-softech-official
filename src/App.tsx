import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import About from './pages/About'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Service from './pages/Service'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App