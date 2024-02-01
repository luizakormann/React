import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Categorias from "./pages/home/Categorias"
import ListaCategoria from "./components/categorias/listaCategoria/ListaCategoria"
import AtCategoria from "./components/categorias/atCategoria/AtCategoria"
import DelCategoria from "./components/categorias/delCategoria/DelCategoria"


function App() {

  return (
    <>
       <BrowserRouter>
    <Navbar/>
    <div className="min-h-[80vh]">
               <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/categorias/listaCategoria" element={<ListaCategoria />} />
            <Route path="/categorias/cadCategoria" element={<AtCategoria />} />
            <Route path="/categorias/atCategoria/:id" element={<AtCategoria />} />
            <Route path="/categorias/delCategoria/:id" element={<DelCategoria />} />
          </Routes>
    </div>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
