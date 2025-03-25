import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import About from './pages/About'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Service from './pages/Service'
import ScrollToTop from './utils/ScrollToTop'
import Careers from './pages/Careers'
import Blogs from './pages/Blogs'
import Blog from './pages/Blog'
import Admin from './pages/Admin'
import Career from './pages/Career'
import Testimonials from './pages/Testimonials'
import Testimonial from './pages/Testimonial'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
        <Nav />
        <main>
          <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/team' element={<Team />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/service' element={<Service />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blog/:id' element={<Blog />} />
            <Route path='/career/:id' element={<Career />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/testimonial/:id' element={<Testimonial />} />
          </Routes>
        </main>
        <Footer />
    </BrowserRouter>
  )
}

export default App