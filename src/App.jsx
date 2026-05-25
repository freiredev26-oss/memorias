import { BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import './App.css'

export default function App() {
  return(
      <BrowserRouter>
      <Home />
      </BrowserRouter>
  )
}
