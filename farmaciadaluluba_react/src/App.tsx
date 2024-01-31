import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import { BrowserRouter } from "react-router-dom"


function App() {

  return (
    <>
     <BrowserRouter>
    <Navbar/>
    <div className="min-h-[80vh]">
      <Home />
    </div>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
