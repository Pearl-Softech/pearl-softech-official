import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app-container">

        <header>
          <Nav />
        </header>

        <main>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App;