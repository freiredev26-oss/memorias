import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "./components/Sobre/Sobre"
import NavBar from "../src/components/navbar/Navbar"
import Home from "./pages/Home"
import './App.css'

export default function App() {
  return(
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
  )
}
