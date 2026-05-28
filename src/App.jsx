import { BrowserRouter } from "react-router-dom"
import NavBar from "../src/components/navbar/Navbar"
import Home from "./pages/Home"
import './App.css'

export default function App() {
  return(
      <BrowserRouter>
      <NavBar />
      <Home />
      </BrowserRouter>
  )
}
