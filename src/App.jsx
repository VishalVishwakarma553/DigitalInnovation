import {Routes, Route} from "react-router-dom"
import HomePage from "./Components/HomePage"
import ContactPage from "./Components/ContactPage"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import CTA from "./Components/CTA"

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
    <CTA/>
    <Footer />
    </>
  )
}

export default App
