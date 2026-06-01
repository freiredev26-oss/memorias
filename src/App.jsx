import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "./pages/sobre/Sobre"
import NavBar from "../src/components/navbar/Navbar"
import Home from "./pages/home/Home"
import Atividades from "./pages/atividades/Atividades"
import './App.css'

export default function App() {
  return(
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/atividades" element={<Atividades />} />
        </Routes>
      </BrowserRouter>
  )
}
