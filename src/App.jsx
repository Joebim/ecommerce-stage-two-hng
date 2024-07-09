import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import ProductView from "./pages/ProductView.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Cart from "./pages/Cart.jsx"
import './App.css'
import { ContextProvider } from "./data/Context.jsx"


function App() {

  return (
    <>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-view/:id" element={<ProductView />} />
        </Routes>
        <Footer />
      </ContextProvider>

    </>
  )
}

export default App
