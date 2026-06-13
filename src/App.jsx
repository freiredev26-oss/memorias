import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "./pages/sobre/Sobre"
import NavBar from "../src/components/navbar/Navbar"
import Home from "./pages/home/Home"
import Atividades from "./pages/atividades/Atividades"
import Equipe from "./pages/equipe/Equipe";
import Roteiros from "./pages/roteiros/Roteiros";
import './App.css'

export default function App() {
  return(
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/atividades" element={<Atividades />} />
          <Route path="/roteiros" element={<Roteiros />} />
        </Routes>
      </BrowserRouter>
  )
}
