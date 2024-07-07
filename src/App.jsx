import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import ProductView from "./pages/ProductView.jsx"
import Navbar from "./components/Navbar.jsx"


function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-view" element={<ProductView />} />
      </Routes>
    </>
  )
}

export default App
